import 'core-js/stable';
import { async } from 'regenerator-runtime';
import adviceViev from './adviceViev.js';
import * as config from './config.js';

import 'regenerator-runtime/runtime';

console.log('test');

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

const getAdvice = async function () {
  try {
    const res = await Promise.race([
      fetch(config.URL_ADVICE),
      timeout(config.TIMEOUT_SECONDS),
    ]);
    console.log(res);
    if (!res.ok) throw new Error('Problem getting advice');

    const data = await res.json();

    adviceViev.generateAdvice(data.slip);
  } catch (err) {
    adviceViev.generateError();
  }
};

window.addEventListener('load', getAdvice);
window.addEventListener('click', e => {
  const target = e.target.closest('.btn--new__advice');

  if (target) {
    console.log(target.firstElementChild);
    adviceViev.generateSpinner(target.firstElementChild);
    setTimeout(getAdvice, config.LOAD_NEW_RECIPE_SECONDS * 1000);
  }
});

