import ElementAbstract from './element_absract.js';
import {MONTHS} from '../data/constant.js';
export default class InformationComponent extends ElementAbstract {
  constructor(data) {
    super();
    this._data = data;
  }
  _getCities() {
    let informationCities = ``;
    for (let i = 0; i < this._data.cities.length - 1; i++) {
      informationCities = informationCities + this._data.cities[i] + ` &mdash; `;
    }
    informationCities = informationCities + this._data.cities[this._data.cities.length - 1];
    return informationCities;
  }
  _getDate() {
    let informationDate = MONTHS[this._data.date.start.month - 1] + ` ` + this._data.date.start.day;
    if (this._data.date.start.month === this._data.date.end.month) {
      informationDate = informationDate + `&mdash;` + this._data.date.end.day;
    } else {
      informationDate = informationDate + ` &mdash; ` + MONTHS[this._data.date.end.month - 1] + ` ` + this._data.date.end.day;
    }
    return informationDate;
  }
  _getTemplate() {
    const informationCities = this._getCities();
    const informationDate = this._getDate();
    return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${informationCities}</h1>

        <p class="trip-info__dates">${informationDate}</p>
      </div>

      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value"></span>
      </p>
    </section>`;
  }
};
