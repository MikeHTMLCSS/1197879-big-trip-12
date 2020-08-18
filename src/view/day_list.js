import ElementAbstract from './element_absract.js';
export default class DayListComponent extends ElementAbstract {
  _getTemplate() {
    let dayList = `
    <ul class="trip-days">
    </ul>`;
    return dayList;
  }
};
