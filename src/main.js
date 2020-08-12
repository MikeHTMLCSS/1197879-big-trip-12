'use strict';

import {makeInformation} from './view/information.js';
import {makeNavigation} from './view/navigation.js';
import {makeFiterForm} from './view/filter_form.js';
import {makeSortForm} from './view/sort_form.js';
import {makeDayList} from './view/day_list.js';
import {renderDays} from './render/day.js';
import {makeDayElement} from './view/day_element.js';
import {makePointElement} from './view/point_element.js';

import {callMockGenerationFunctions} from './mock/call.js';
const routeData = callMockGenerationFunctions()[0];
const dayData = callMockGenerationFunctions()[1];

const renderElement = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const renderSite = () => {
  const tripMainElement = document.querySelector(`.trip-main`);
  renderElement(tripMainElement, makeInformation(routeData), `afterBegin`);
  const tripFiterTitle = document.querySelector(`.trip-main__filter-title`);
  renderElement(tripFiterTitle, makeNavigation(), `beforeBegin`);
  renderElement(tripFiterTitle, makeFiterForm(), `afterEnd`);
  const tripEventsElement = document.querySelector(`.trip-events`);
  renderElement(tripEventsElement, makeSortForm(), `beforeEnd`);
  renderElement(tripEventsElement, makeDayList(), `beforeEnd`);
  const tripDaysElement = document.querySelector(`.trip-days`);
  renderDays(renderElement, makeDayElement, makePointElement, tripDaysElement, dayData);
};
renderSite();
