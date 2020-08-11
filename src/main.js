'use strict';
//Constants
const DAYS_NUMBER = 3;
//Imports
import {makeInformation} from './view/information.js';
import {makeNavigation} from './view/navigation.js';
import {makeFiterForm} from './view/filter_form.js';
import {makeSortForm} from './view/sort_form.js';
import {makeDayList} from './view/day_list.js';
import {makeDayElement} from './view/day_element.js';
import {makePointElement} from './view/point_element.js';
//Mocks
import {makeDayDataMock} from './mock/day.js';
import {makeRouteDataMock} from './mock/route.js';
let routeData = makeRouteDataMock();
let dayData = [];
for (let i = 0; i < DAYS_NUMBER; i++) {
  dayData.push(makeDayDataMock());
}
//Render
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
//Rendering
const tripMainElement = document.querySelector(`.trip-main`);
render(tripMainElement, makeInformation(routeData), `afterBegin`);
const tripFiterTitle = document.querySelector(`.trip-main__filter-title`);
render(tripFiterTitle, makeNavigation(), `beforeBegin`);
render(tripFiterTitle, makeFiterForm(), `afterEnd`);
const tripEventsElement = document.querySelector(`.trip-events`);
render(tripEventsElement, makeSortForm(), `beforeEnd`);
render(tripEventsElement, makeDayList(), `beforeEnd`);
const tripDaysElement = document.querySelector(`.trip-days`);
for (let i = 0; i < dayData.length; i++) {
  render(tripDaysElement, makeDayElement(dayData[i]), `beforeEnd`);
  let tripDayElement = document.querySelectorAll(`.trip-events__list`)[document.querySelectorAll(`.trip-events__list`).length - 1];
  for (let j = 0; j < dayData[i].routePoints.length; j++) {
    render(tripDayElement, makePointElement(dayData[i].routePoints[j]), `beforeEnd`);
  }
}
