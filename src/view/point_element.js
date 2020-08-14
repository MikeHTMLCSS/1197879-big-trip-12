const POINT_ELEMENT_TYPES = {
  'Taxi': {
    image: 'taxi.png',
    text: 'Taxi to',
  },
  'Bus': {
    image: 'bus.png',
    text: 'Bus to',
  },
  'Train': {
    image: 'train.png',
    text: 'Train to',
  },
  'Ship': {
    image: 'ship.png',
    text: 'Ship to',
  },
  'Transport': {
    image: 'transport.png',
    text: 'Transport to',
  },
  'Drive': {
    image: 'drive.png',
    text: 'Drive to',
  },
  'Flight': {
    image: 'flight.png',
    text: 'Flight to',
  },
  'Check': {
    image: 'check-in.png',
    text: 'Check-in in',
  },
  'Sightseeing': {
    image: 'sightseeing.png',
    text: 'Sightseeing in',
  },
  'Restaurant': {
    image: 'restaurant.png',
    text: 'Restaurant in',
  },
};
const NUMBER_OF_MINUTES_PER_HOUR = 60;
class MakePointElement {
  constructor(data) {
    this.getHTML = () => {
      let eventDuration = (data.endTime.hours - data.startTime.hours) * NUMBER_OF_MINUTES_PER_HOUR + data.endTime.minutes - data.startTime.minutes;
      if (eventDuration < NUMBER_OF_MINUTES_PER_HOUR) {
        eventDuration = eventDuration + `M`;
      } else {
        if (eventDuration % NUMBER_OF_MINUTES_PER_HOUR === 0) {
          eventDuration = `${eventDuration / NUMBER_OF_MINUTES_PER_HOUR}H`;
        } else {
          eventDuration = `${(eventDuration - eventDuration % NUMBER_OF_MINUTES_PER_HOUR) / NUMBER_OF_MINUTES_PER_HOUR}H ${eventDuration % NUMBER_OF_MINUTES_PER_HOUR}M`;
        }
      }
      data.startTime.hours = String(data.startTime.hours).padStart(2, '0');
      data.startTime.minutes = String(data.startTime.minutes).padStart(2, '0');
      data.endTime.hours = String(data.endTime.hours).padStart(2, '0');
      data.endTime.minutes = String(data.endTime.minutes).padStart(2, '0');
      let eventOffers = '';
      for (let i = 0; i < data.options.length; i++) {
        eventOffers = eventOffers + `
        <li class="event__offer">
          <span class="event__offer-title">${data.options[i].name}</span>
          &plus;
          &euro;&nbsp;<span class="event__offer-price">${data.options[i].cost}</span>
        </li>`;
      }
      let pointElement = `
      <li class="trip-events__item">
        <div class="event">
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/${POINT_ELEMENT_TYPES[data.type].image}" alt="Event type icon">
          </div>
          <h3 class="event__title">${POINT_ELEMENT_TYPES[data.type].text} ${data.city}</h3>
          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="2019-03-18T12:25">${data.startTime.hours}:${data.startTime.minutes}</time>
              &mdash;
              <time class="event__end-time" datetime="2019-03-18T13:35">${data.endTime.hours}:${data.endTime.minutes}</time>
            </p>
            <p class="event__duration">${eventDuration}</p>
          </div>
          <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${data.cost}</span>
          </p>
          <h4 class="visually-hidden">Offers:</h4>
          <ul class="event__selected-offers">${eventOffers}</ul>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </div>
      </li>`;
      return pointElement;
    }
  }
};
export default MakePointElement;
