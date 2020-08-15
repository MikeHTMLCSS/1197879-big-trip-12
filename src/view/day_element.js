import {MONTHS} from '../data/constant.js';
import {createElement} from '../util/utils.js'
export default class DayElementComponent {
  constructor(data) {
    this._data = data;
    this._element = null;
  }
  _getTemplate() {
    let dayElement = `
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${this._data.number}</span>
        <time class="day__date" datetime="${this._data.date.year}-${this._data.date.month}-${this._data.date.day}">${MONTHS[this._data.date.month - 1]} ${this._data.date.day}</time>
      </div>
      <ul class="trip-events__list">
      </ul>
    </li>`;
    return dayElement;
  }
  getElement() {
    if (this._element === null) {
      this._element = createElement(this._getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
};
