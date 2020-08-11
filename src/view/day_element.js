const DAY_ELEMENT_MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const makeDayElement = (data) => {
  let dayElement = `
  <li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${data.number}</span>
      <time class="day__date" datetime="2019-03-18">${DAY_ELEMENT_MONTHS[data.date.month - 1]} ${data.date.day}</time>
    </div>
    <ul class="trip-events__list">
    </ul>
  </li>`;
  return dayElement;
};
export {makeDayElement};
