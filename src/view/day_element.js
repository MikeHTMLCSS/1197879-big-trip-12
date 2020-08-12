import {MONTHS} from '../data/constant.js';
const makeDayElement = (data) => {
  let dayElement = `
  <li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${data.number}</span>
      <time class="day__date" datetime="${data.date.year}-${data.date.month}-${data.date.day}">${MONTHS[data.date.month - 1]} ${data.date.day}</time>
    </div>
    <ul class="trip-events__list">
    </ul>
  </li>`;
  return dayElement;
};
export {makeDayElement};
