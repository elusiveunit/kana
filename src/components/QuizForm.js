/**
 * @flow
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import noop from 'lodash/noop';

import {
  ANSWER_CORRECT,
  ANSWER_ALMOST,
  ANSWER_WRONG,
  ANSWER_NONE,
  STATUS_ERROR,
  STATUS_WARNING,
  STATUS_SUCCESS,
} from '../constants/app';
import { media } from '../style/mixins';
import { Grid, Item } from './Grid';
import Button from './Button';
import TextField from './TextField';
import MeaningText from './MeaningText';
import QuestionBox from './QuestionBox';
import Wrap from './Wrap';
import type { Word, AnswerType } from '../types';

const GRID_SPACING = '10px';

const textSizing = css`
  height: 2em;
  line-height: 2em;
  font-size: ${rem('34px')};

  ${media.medium`
    font-size: ${rem('28px')};
  `};
  ${media.small`
    font-size: ${rem('24px')};
  `};
`;
const buttonWidth = css`
  width: 10vw;
  min-width: 150px;

  ${media.small`
    width: 100%;
  `};
`;
const buttonSizing = css`
  ${textSizing};
  ${buttonWidth};
`;
const QuizTextField = styled(TextField)`
  ${textSizing};
  padding-left: 15px;
  padding-right: 50px;

  ${media.small`
    margin-bottom: ${GRID_SPACING};
  `};
`;
const QuizButton = styled(Button)`
  ${buttonSizing};
`;
// An ugly way to prevent the meaning area from overlapping the absolutely
// positioned secondary buttons. Should do something else later.
const QuizSecondaryButtonSizerItem = styled(Item)`
  ${media.small`
    display: none;
  `};
`;
const QuizSecondaryButtonSizer = styled.div`
  ${buttonSizing};
  height: 0;
`;
const QuizSecondaryButtonContainer = styled.div`
  ${buttonWidth};
  position: absolute;
  top: 100%;
  margin-top: ${GRID_SPACING};
  z-index: 10;

  ${media.small`
    position: static;
  `};
`;
const QuizSkipButton = styled(Button)`
  display: block;
  width: 100%;
  height: auto;
  padding: 0 5px;
  font-size: 14px;
  line-height: 1.75;
`;
const QuizLabel = styled.div`
  font-size: 14px;
  font-weight: ${(props) => props.theme.fontWeightBold};
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 1px;

  ${media.small`
    margin-top: 3px;
    margin-bottom: 3px;
    text-align: left;
  `};
`;

type Props = {
  fieldValue: string,
  kanaFont: string,
  showKanji: boolean,
  word: Word,
  answerType?: AnswerType,
  isMeaningVisible?: boolean,
  onCheck: () => void,
  onFieldChange: (e: Object) => void,
  onMeaningReveal: (e: Object) => void,
  onNext: () => void,
  onShowAnswer: () => void,
  onSkip: () => void,
};

type State = {
  isHoldingModifier: boolean,
};

export default class QuizForm extends React.Component<Props, State> {
  state = {
    isHoldingModifier: false,
  };

  componentDidMount() {
    this.focusInput();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.word !== nextProps.word) {
      this.focusInput();
    }
  }

  getButtonHandler = (): (() => void) => {
    if (!this.props.fieldValue) {
      return noop;
    }

    return [ANSWER_CORRECT, ANSWER_ALMOST].includes(this.props.answerType)
      ? this.props.onNext
      : this.props.onCheck;
  };

  focusInput = () => {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  };

  handleCheckClick = () => {
    this.getButtonHandler()();
  };

  handleInputKeyDown = (e) => {
    switch (e.key) {
      case 'Control':
      case 'Meta':
        this.setState({ isHoldingModifier: true });
        break;

      case 'Enter':
        e.preventDefault();
        if (this.state.isHoldingModifier) {
          this.props.onShowAnswer();
        } else {
          this.getButtonHandler()();
        }
        break;

      case 'Escape':
        e.preventDefault();
        this.props.onSkip();
        break;

      default:
        break;
    }
  };

  handleInputKeyUp = (e) => {
    switch (e.key) {
      case 'Control':
      case 'Meta':
        this.setState({ isHoldingModifier: false });
        break;

      default:
        break;
    }
  };

  render() {
    const {
      answerType,
      fieldValue,
      isMeaningVisible,
      kanaFont,
      showKanji,
      onFieldChange,
      onMeaningReveal,
      onShowAnswer,
      onSkip,
      word,
    } = this.props;
    const labelWidth = '6em';
    const buttonVariants = {
      [ANSWER_NONE]: 'primary',
      [ANSWER_CORRECT]: 'success',
      [ANSWER_ALMOST]: 'warning',
      [ANSWER_WRONG]: 'danger',
    };
    const buttonTexts = {
      [ANSWER_NONE]: 'Check',
      [ANSWER_CORRECT]: 'Next',
      [ANSWER_ALMOST]: 'Next',
      [ANSWER_WRONG]: 'Again',
    };
    const statuses = {
      [ANSWER_WRONG]: STATUS_ERROR,
      [ANSWER_ALMOST]: STATUS_WARNING,
      [ANSWER_CORRECT]: STATUS_SUCCESS,
    };
    const status = statuses[answerType] || null;
    const buttonVariant = buttonVariants[answerType];
    const buttonText = buttonTexts[answerType];

    return (
      <Wrap>
        <Grid verticalAlign="middle" mb={GRID_SPACING} multilineWhen="small">
          <Item width={labelWidth} shrink={false} colsSmall={1}>
            <QuizLabel>Kana:</QuizLabel>
          </Item>
          <Item colsSmall={1}>
            <QuestionBox kanaFont={kanaFont}>{word.kana}</QuestionBox>
          </Item>
          {Boolean(word.kanji && showKanji) && [
            <Item key="0" width={labelWidth} colsSmall={1}>
              <QuizLabel>Kanji:</QuizLabel>
            </Item>,
            <Item key="1" grow={false} colsSmall={1}>
              <QuestionBox kanaFont={kanaFont}>{word.kanji}</QuestionBox>
            </Item>,
          ]}
        </Grid>

        <Grid verticalAlign="middle" multilineWhen="small">
          <Item width={labelWidth} shrink={false} colsSmall={1}>
            <QuizLabel>Romaji:</QuizLabel>
          </Item>
          <Item colsSmall={1}>
            <QuizTextField
              innerRef={(c) => {
                this.inputRef = c;
              }}
              label="Romaji"
              isLabelVisible={false}
              statusIconSize={24}
              value={fieldValue}
              onKeyDown={this.handleInputKeyDown}
              onKeyUp={this.handleInputKeyUp}
              onChange={onFieldChange}
              status={status}
            />
          </Item>
          <Item grow={false} colsSmall={1}>
            <QuizButton variant={buttonVariant} onClick={this.handleCheckClick}>
              {buttonText}
            </QuizButton>
            <QuizSecondaryButtonContainer>
              <Grid>
                <Item cols={2}>
                  <QuizSkipButton variant="secondary" onClick={onShowAnswer}>
                    Answer
                  </QuizSkipButton>
                </Item>
                <Item cols={2}>
                  <QuizSkipButton variant="secondary" onClick={onSkip}>
                    Skip
                  </QuizSkipButton>
                </Item>
              </Grid>
            </QuizSecondaryButtonContainer>
          </Item>
        </Grid>

        <Grid mt={GRID_SPACING} multilineWhen="small">
          <Item width={labelWidth} shrink={false} pt="5px" colsSmall={1}>
            <QuizLabel>Meaning:</QuizLabel>
          </Item>
          <Item>
            <MeaningText
              meaning={word.english}
              isVisible={isMeaningVisible}
              onRevealPress={onMeaningReveal}
            />
          </Item>
          {/* See definition */}
          <QuizSecondaryButtonSizerItem grow={false}>
            <QuizSecondaryButtonSizer />
          </QuizSecondaryButtonSizerItem>
        </Grid>
      </Wrap>
    );
  }
}
QuizForm.displayName = 'components/QuizForm';
QuizForm.defaultProps = {
  answerType: ANSWER_NONE,
  isMeaningVisible: true,
};
