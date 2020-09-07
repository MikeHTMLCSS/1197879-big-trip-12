import ElementAbstract from './element_absract.js';
export default class DayListComponent extends ElementAbstract {
  _getTemplate() {
    return `<ul class="trip-days"></ul>`;
  }
};
