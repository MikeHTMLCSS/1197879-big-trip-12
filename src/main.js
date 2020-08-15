'use strict';

import {RENDER_POSITION} from './data/constant.js';
import {renderElement} from './util/utils.js';
import InformationComponent from './view/information.js';
import NavigationComponent from './view/navigation.js';
import FiterFormComponent from './view/filter_form.js';
import SortFormComponent from './view/sort_form.js';
import DayListComponent from './view/day_list.js';
import {renderDays} from './render/day.js';
import DayElementComponent from './view/day_element.js';
import PointElementComponent from './view/point_element.js';

import {callMockGenerationFunctions} from './mock/call.js';
const routeData = callMockGenerationFunctions()[0];
const dayData = callMockGenerationFunctions()[1];

const renderSite = () => {
  const tripMainElement = document.querySelector(`.trip-main`);
  renderElement(tripMainElement, new InformationComponent(routeData).getElement(), RENDER_POSITION.afterBegin);
  const tripMenuElement = document.querySelector(`.trip-main__trip-controls`);
  renderElement(tripMenuElement, new NavigationComponent().getElement(), RENDER_POSITION.beforeEnd);
  renderElement(tripMenuElement, new FiterFormComponent().getElement(), RENDER_POSITION.beforeEnd);
  const tripEventsElement = document.querySelector(`.trip-events`);
  renderElement(tripEventsElement, new SortFormComponent().getElement(), RENDER_POSITION.beforeEnd);
  renderElement(tripEventsElement, new DayListComponent().getElement(), RENDER_POSITION.beforeEnd);
  const tripDaysElement = document.querySelector(`.trip-days`);
  renderDays(renderElement, DayElementComponent, PointElementComponent, tripDaysElement, dayData);
};
renderSite();
