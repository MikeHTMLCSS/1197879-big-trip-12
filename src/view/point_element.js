import PointAbstract from './point_abstract.js';
import {POINT_ELEMENT_TYPES} from '../data/constant.js';
const NUMBER_OF_MINUTES_PER_HOUR = 60;
export default class PointComponent extends PointAbstract {
  constructor(data) {
    super();
    this._data = data;
  }
  _getTemplate() {
    let eventDuration = (this._data.endTime.hours - this._data.startTime.hours) * NUMBER_OF_MINUTES_PER_HOUR + this._data.endTime.minutes - this._data.startTime.minutes;
    if (eventDuration < NUMBER_OF_MINUTES_PER_HOUR) {
      eventDuration = eventDuration + `M`;
    } else {
      if (eventDuration % NUMBER_OF_MINUTES_PER_HOUR === 0) {
        eventDuration = `${eventDuration / NUMBER_OF_MINUTES_PER_HOUR}H`;
      } else {
        eventDuration = `${(eventDuration - eventDuration % NUMBER_OF_MINUTES_PER_HOUR) / NUMBER_OF_MINUTES_PER_HOUR}H ${eventDuration % NUMBER_OF_MINUTES_PER_HOUR}M`;
      }
    }
    this._data.startTime.hours = String(this._data.startTime.hours).padStart(2, '0');
    this._data.startTime.minutes = String(this._data.startTime.minutes).padStart(2, '0');
    this._data.endTime.hours = String(this._data.endTime.hours).padStart(2, '0');
    this._data.endTime.minutes = String(this._data.endTime.minutes).padStart(2, '0');
    let eventOffers = '';
    for (let i = 0; i < this._data.options.length; i++) {
      eventOffers = eventOffers + `
      <li class="event__offer">
        <span class="event__offer-title">${this._data.options[i].name}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${this._data.options[i].cost}</span>
      </li>`;
    }
    return `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${POINT_ELEMENT_TYPES[this._data.type].image}" alt="Event type icon">
        </div>
        <h3 class="event__title">${POINT_ELEMENT_TYPES[this._data.type].text} ${this._data.city}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T12:25">${this._data.startTime.hours}:${this._data.startTime.minutes}</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T13:35">${this._data.endTime.hours}:${this._data.endTime.minutes}</time>
          </p>
          <p class="event__duration">${eventDuration}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${this._data.cost}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">${eventOffers}</ul>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`;
  }
  addOpenListener(container, anotherElement, cb) {
    this.getElement()
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this._openListener.bind(this, container, anotherElement, cb));

  }
};
