'use strict';
const DAYS_NUMBER = 3;
import {makeInformation} from './view/information.js';
import {makeNavigation} from './view/navigation.js';
import {makeFiterForm} from './view/filter_form.js';
import {makeSortForm} from './view/sort_form.js';
import {makeDayList} from './view/day_list.js';
import {makeDayElement} from './view/day_element.js';
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const tripMainElement = document.querySelector(`.trip-main`);
render(tripMainElement, makeInformation(), `afterBegin`);
const tripFiterTitle = document.querySelector(`.trip-main__filter-title`);
render(tripFiterTitle, makeNavigation(), `beforeBegin`);
render(tripFiterTitle, makeFiterForm(), `afterEnd`);
const tripEventsElement = document.querySelector(`.trip-events`);
render(tripEventsElement, makeSortForm(), `beforeEnd`);
render(tripEventsElement, makeDayList(), `beforeEnd`);
const tripDaysElement = document.querySelector(`.trip-days`);
for (let i = 0; i < DAYS_NUMBER; i++) {
  render(tripDaysElement, makeDayElement(), `afterEnd`);
}
