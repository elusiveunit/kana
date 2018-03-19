/**
 * @flow
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import {
  ANSWER_CORRECT,
  ANSWER_ALMOST,
  ANSWER_WRONG,
} from '../../constants/app';
import { Body } from '../../stories/helpers';
import QuizForm from '../QuizForm';

storiesOf('QuizForm', module)
  .add(
    'Default',
    withInfo(
      "Kana and possibly kanji as a 'question' where romaji is typed as the answer. An empty answer is not checked.",
    )(() => (
      <Body>
        <QuizForm
          word={{
            kana: 'しょうゆ',
            kanji: '醤油',
            english: ['soy sauce'],
          }}
          fieldValue=""
          onFieldChange={action('Input change')}
          onCheck={action('SHOULD NOT BE CALLED')}
          onShowAnswer={action('Show answer')}
          onSkip={action('Skip question')}
          onMeaningReveal={action('Reveal meaning')}
          isMeaningVisible={false}
          showKanji
        />
      </Body>
    )),
  )
  .add(
    'Long meaning, no kanji',
    withInfo('Some meanings can be long and will then span multiple lines.')(
      () => (
        <Body>
          <QuizForm
            word={{
              kana: 'オンリーワン',
              kanji: null,
              english: [
                'From the English |only one|: (adjective) one of a kind or unique; e.g., オンリーワン技術 (~gijutsu: "only one technology") or オンリーワン商品 (~shōhin: "only one products") meaning one of a kind technology or products',
              ],
            }}
            fieldValue="onriiwan"
            onFieldChange={action('Input change')}
            onCheck={action('Check answer')}
            onShowAnswer={action('Show answer')}
            onSkip={action('Skip question')}
          />
        </Body>
      ),
    ),
  )
  .add(
    'Correct answer',
    withInfo(
      "When the correct answer has been submitted, the 'check' button is changed to to a 'next' button that advances to the next word.",
    )(() => (
      <Body>
        <QuizForm
          word={{
            kana: 'しょうゆ',
            kanji: '醤油',
            english: ['soy sauce'],
          }}
          fieldValue="shouyu"
          answerType={ANSWER_CORRECT}
          onFieldChange={action('Input change')}
          onNext={action('Next word')}
          onShowAnswer={action('Show answer')}
          onSkip={action('Skip question')}
          showKanji
        />
      </Body>
    )),
  )
  .add(
    'Almost correct answer',
    withInfo(
      [
        "Some answers can be correctly read even if the supplied romanization is slightly wrong, like writing 'oo' instead of 'ou'.",
        'For those cases the answer is marked as almost correct and counts as a fully correct one.',
      ].join(' '),
    )(() => (
      <Body>
        <QuizForm
          word={{
            kana: 'アウトコース',
            kanji: null,
            english: ['From the English |out course|: outside'],
          }}
          fieldValue="autokoosu (autokousu)"
          answerType={ANSWER_ALMOST}
          onFieldChange={action('Input change')}
          onNext={action('Check answer')}
          onShowAnswer={action('Show answer')}
          onSkip={action('Skip question')}
        />
      </Body>
    )),
  )
  .add(
    'Wrong answer',
    withInfo(
      'A wrong answer just changes the look of the form while it stays functionally the same as the default state.',
    )(() => (
      <Body>
        <QuizForm
          word={{
            kana: 'しょうゆ',
            kanji: '醤油',
            english: ['soy sauce'],
          }}
          fieldValue="shouyo"
          answerType={ANSWER_WRONG}
          onFieldChange={action('Input change')}
          onCheck={action('Check answer')}
          onShowAnswer={action('Show answer')}
          onSkip={action('Skip question')}
          onMeaningReveal={action('Reveal meaning')}
          isMeaningVisible={false}
          showKanji
        />
      </Body>
    )),
  );
