import {RENDER_POSITION} from '../data/constant.js';
import {renderElement} from '../util/utils.js';
import InformationComponent from '../view/information.js';
import NavigationComponent from '../view/navigation.js';
import FiterFormComponent from '../view/filter_form.js';
import SortFormComponent from '../view/sort_form.js';
import DayListComponent from '../view/day_list.js';
import {renderDays} from '../render/day.js';
import DayElementComponent from '../view/day_element.js';
import PointElementComponent from '../view/point_element.js';
import EditingElementComponent from '../view/editing_element.js';
export default class Trip {
  constructor(routeData, dayData) {
    this._routeData = routeData;
    this._dayData = dayData;
    this._informationElement = new InformationComponent(this._routeData);
    this._navigationElement = new NavigationComponent();
    this._filterFormElement = new FiterFormComponent();
    this._sortFormElement = new SortFormComponent();
    this._dayListElement = new DayListComponent();
  }
  renderInformation() {
    const tripMainElement = document.querySelector(`.trip-main`);
    renderElement(tripMainElement, this._informationElement.getElement(), RENDER_POSITION.afterBegin);
  }
  renderMenu() {
    const tripMenuElement = document.querySelector(`.trip-main__trip-controls`);
    renderElement(tripMenuElement, this._navigationElement.getElement(), RENDER_POSITION.beforeEnd);
    renderElement(tripMenuElement, this._filterFormElement.getElement(), RENDER_POSITION.beforeEnd);
  }
  renderRoute() {
    const tripEventsElement = document.querySelector(`.trip-events`);
    renderElement(tripEventsElement, this._sortFormElement.getElement(), RENDER_POSITION.beforeEnd);
    renderElement(tripEventsElement, this._dayListElement.getElement(), RENDER_POSITION.beforeEnd);
  }
  renderEvents() {
    const tripDaysElement = document.querySelector(`.trip-days`);
    renderDays(renderElement, DayElementComponent, PointElementComponent, EditingElementComponent, tripDaysElement, this._dayData);
  }
  renderSite() {
    this.renderInformation();
    this.renderMenu();
    this.renderRoute();
    this.renderEvents();
  }
};
