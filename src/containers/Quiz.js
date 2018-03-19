/**
 * @flow
 */

import React from 'react';
import { toRomaji } from 'wanakana';

import { ANSWER_CORRECT, ANSWER_ALMOST, ANSWER_NONE } from '../constants/app';
import {
  getWords,
  getWordIndices,
  getCurrentWordIndex,
  getNextWordIndex,
  checkRomajiAnswer,
} from '../utils/word';
import QuizForm from '../components/QuizForm';
import type { Word, AnswerType } from '../types';

type Props = {
  kanaFont: string,
  showKanji: boolean,
};
type State = {
  answerType: AnswerType,
  currentWordIndex: number,
  inputValue: string,
  isMeaningVisible: boolean,
  wordIndices: Array<number>,
};

export default class Quiz extends React.Component<Props, State> {
  state = {
    answerType: ANSWER_NONE,
    currentWordIndex: getCurrentWordIndex(),
    inputValue: '',
    isMeaningVisible: false,
    wordIndices: getWordIndices(getWords()),
  };

  getCurrentWord = (): Word =>
    getWords()[this.state.wordIndices[this.state.currentWordIndex]];

  advance = () => {
    this.setState((prevState) => ({
      answerType: ANSWER_NONE,
      currentWordIndex: getNextWordIndex(prevState.currentWordIndex),
      inputValue: '',
      isMeaningVisible: false,
    }));
  };

  handleCheck = () => {
    const answerType = checkRomajiAnswer(
      this.getCurrentWord().kana,
      this.state.inputValue,
    );
    const newState = {
      answerType,
      isMeaningVisible: [ANSWER_CORRECT, ANSWER_ALMOST].includes(answerType),
    };

    if (answerType === ANSWER_ALMOST) {
      newState.inputValue = `${this.state.inputValue} (${toRomaji(
        this.getCurrentWord().kana,
      )})`;
    }

    this.setState(newState);
  };

  handleNext = () => {
    this.advance();
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleMeaningReveal = () => {
    this.setState({ isMeaningVisible: true });
  };

  handleShowAnswer = () => {
    this.setState({
      answerType: ANSWER_CORRECT,
      inputValue: toRomaji(this.getCurrentWord().kana),
      isMeaningVisible: true,
    });
  };

  handleSkip = () => {
    this.advance();
  };

  render() {
    const { answerType, inputValue, isMeaningVisible } = this.state;

    return (
      <QuizForm
        answerType={answerType}
        fieldValue={inputValue}
        isMeaningVisible={isMeaningVisible}
        kanaFont={this.props.kanaFont}
        showKanji={this.props.showKanji}
        onCheck={this.handleCheck}
        onFieldChange={this.handleInputChange}
        onMeaningReveal={this.handleMeaningReveal}
        onNext={this.handleNext}
        onShowAnswer={this.handleShowAnswer}
        onSkip={this.handleSkip}
        word={this.getCurrentWord()}
      />
    );
  }
}
Quiz.displayName = 'containers/Quiz';
