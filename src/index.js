import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  formReset,
  inputController,
  submitController,
} from './formControllers';
import { checkErrors, randomAnswer } from './utils';

// DOM ELEMENTS
const eightballForm = document.getElementById('eightballForm');
const eightballAnswers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Very doubtful',
];

// DELEGATION
// -- eightball form
if (eightballForm) {
  const errorStack = { ask: '' };

  // Check if the input values are empty/not empty
  // This is used for stylng the custom placeholder
  inputController(document.getElementById('ask'));

  eightballForm.addEventListener('submit', (e) => {
    e.preventDefault();

    submitController(errorStack, document.getElementById('ask'));

    if (checkErrors(errorStack)) {
      const selectedAnswer = randomAnswer(...eightballAnswers);

      document.querySelector('.eightball__answer-content').textContent =
        selectedAnswer;

      document.querySelector('.eightball__answer').classList.add('response');

      console.log(selectedAnswer);

      setTimeout(() => {
        document.querySelector('.eightball__answer-content').textContent = '';

        document
          .querySelector('.eightball__answer')
          .classList.remove('response');

        formReset(document.getElementById('ask'));
      }, 7000);
    }
  });
}
