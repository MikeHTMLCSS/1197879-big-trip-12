'use strict';

import {renderElement} from './util/utils.js'
import MakeInformation from './view/information.js';
import MakeNavigation from './view/navigation.js';
import MakeFiterForm from './view/filter_form.js';
import MakeSortForm from './view/sort_form.js';
import MakeDayList from './view/day_list.js';
import {renderDays} from './render/day.js';
import MakeDayElement from './view/day_element.js';
import MakePointElement from './view/point_element.js';

import {callMockGenerationFunctions} from './mock/call.js';
const routeData = callMockGenerationFunctions()[0];
const dayData = callMockGenerationFunctions()[1];

const renderSite = () => {
  const tripMainElement = document.querySelector(`.trip-main`);
  renderElement(tripMainElement, new MakeInformation(routeData).getHTML(), `afterBegin`);
  const tripFiterTitle = document.querySelector(`.trip-main__filter-title`);
  renderElement(tripFiterTitle, new MakeNavigation().getHTML(), `beforeBegin`);
  renderElement(tripFiterTitle, new MakeFiterForm().getHTML(), `afterEnd`);
  const tripEventsElement = document.querySelector(`.trip-events`);
  renderElement(tripEventsElement, new MakeSortForm().getHTML(), `beforeEnd`);
  renderElement(tripEventsElement, new MakeDayList().getHTML(), `beforeEnd`);
  const tripDaysElement = document.querySelector(`.trip-days`);
  renderDays(renderElement, MakeDayElement, MakePointElement, tripDaysElement, dayData);
};
renderSite();
