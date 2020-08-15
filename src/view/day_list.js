import {createElement} from '../util/utils.js';
export default class DayListComponent {
  constructor() {
    this._element = null;
  }
  _getTemplate() {
    let dayList = `
    <ul class="trip-days">
    </ul>`;
    return dayList;
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
