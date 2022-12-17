import diceIcon from 'url:../img/icon-dice.svg';
import patternDividerDesktop from '../img/pattern-divider-desktop.svg';
class adviceViev {
  #container = document.querySelector('main');

  #clear() {
    this.#container.innerHTML = '';
  }

  generateAdvice(data) {
    const html = `
        <div class="advice__box">
            <h1 class="advice__number">Advice #${data.id}</h1>
            <p class="advice">"${data.advice}"</p>
            <img class="divider" src="${patternDividerDesktop}" alt="divider">
            <button class="btn--new__advice">
            <img  src="${diceIcon}" alt="dice"> 
            </button>
        </div>`;
    this.#clear();
    this.#container.insertAdjacentHTML('afterbegin', html);
    
  }
  
  generateSpinner(btn) {
    btn.classList.add('spinner')
  }
  generateError() {
    this.#container.innerHTML = `Can't generate an advice, try one more time!`
  }


}

export default new adviceViev();
