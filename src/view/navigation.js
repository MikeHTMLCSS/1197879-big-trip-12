import {createElement} from '../util/utils.js';
export default class NavigationComponent {
  constructor() {
    this._element = null;
  }
  _getTemplate() {
    let navigation = `
    <h2 class="visually-hidden">Switch trip view</h2>
    <nav class="trip-controls__trip-tabs  trip-tabs">
      <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>
    </nav>`;
    return navigation;
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
