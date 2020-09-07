import ElementAbstract from './element_absract.js';
import {MONTHS} from '../data/constant.js';
export default class DayComponent extends ElementAbstract {
  constructor(data) {
    super();
    this._data = data;
  }
  _getTemplate() {
    return (`<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${this._data.number}</span>
        <time class="day__date" datetime="${this._data.date.year}-${this._data.date.month}-${this._data.date.day}">${MONTHS[this._data.date.month - 1]} ${this._data.date.day}</time>
      </div>
      <ul class="trip-events__list"></ul>
    </li>`);
  }
};
