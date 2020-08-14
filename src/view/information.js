import {MONTHS} from '../data/constant.js';
class MakeInformation {
  constructor(data) {
    this.getHTML = () => {
      let informationCities = ``;
      for (let i = 0; i < data.cities.length - 1; i++) {
        informationCities = informationCities + data.cities[i] + ` &mdash; `;
      }
      informationCities = informationCities + data.cities[data.cities.length - 1];
      let informationDate = MONTHS[data.date.start.month - 1] + ` ` + data.date.start.day;
      if (data.date.start.month === data.date.end.month) {
        informationDate = informationDate + `&mdash;` + data.date.end.day;
      } else {
        informationDate = informationDate + ` &mdash; ` + MONTHS[data.date.end.month - 1] + ` ` + data.date.end.day;
      }
      return `
      <section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">${informationCities}</h1>
      
          <p class="trip-info__dates">${informationDate}</p>
        </div>
      
        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value"></span>
        </p>
      </section>`;
    };
  }
};
export default MakeInformation;
