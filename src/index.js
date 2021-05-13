import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  formReset,
  inputController,
  submitController,
} from './formControllers';
import { checkErrors } from './utils';

// DOM ELEMENTS
const eightballForm = document.getElementById('eightballForm');

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

    if (checkErrors(errorStack)) formReset(document.getElementById('ask'));
  });
}
