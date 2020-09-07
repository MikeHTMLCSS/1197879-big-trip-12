import {RENDER_POSITION} from '../data/constant.js';
import {renderElement} from '../util/utils.js';
import InformationComponent from '../view/information.js';
import NavigationComponent from '../view/navigation.js';
import FiterFormComponent from '../view/filter_form.js';
import SortFormComponent from '../view/sort_form.js';
import DayListComponent from '../view/day_list.js';
import DayComponent from '../view/day_element.js';
import PointComponent from '../view/point_element.js';
import EditingComponent from '../view/editing_element.js';
export default class Trip {
  constructor(routeData, dayData) {
    this._routeData = routeData;
    this._dayData = dayData;
    this._informationInstance = new InformationComponent(this._routeData);
    this._navigationInstance = new NavigationComponent();
    this._filterFormInstance = new FiterFormComponent();
    this._sortFormInstance = new SortFormComponent();
    this._dayListInstance = new DayListComponent();
    this._points = [];
    this._pointForms = [];
  }
  _renderInformation() {
    const tripMainElement = document.querySelector(`.trip-main`);
    renderElement(tripMainElement, this._informationInstance.getElement(), RENDER_POSITION.afterBegin);
  }
  _renderMenu() {
    const tripMenuElement = document.querySelector(`.trip-main__trip-controls`);
    renderElement(tripMenuElement, this._navigationInstance.getElement(), RENDER_POSITION.beforeEnd);
    renderElement(tripMenuElement, this._filterFormInstance.getElement(), RENDER_POSITION.beforeEnd);
  }
  _renderRoute() {
    const tripEventsElement = document.querySelector(`.trip-events`);
    renderElement(tripEventsElement, this._sortFormInstance.getElement(), RENDER_POSITION.beforeEnd);
    renderElement(tripEventsElement, this._dayListInstance.getElement(), RENDER_POSITION.beforeEnd);
  }
  _updateFavorite(routerPoint) {
    routerPoint.favorite = !routerPoint.favorite;
  }
  _resetPoints(container) {
    this._pointForms.forEach((form, index) => {
      form[0].changeListener(container, this._points[index]);
    });
  }
  _renderEvents() {
    const tripDaysElement = document.querySelector(`.trip-days`);
    this._dayData.forEach((dayData, index) => {
      let day = new DayComponent(dayData);
      let dayElement = day.getElement().querySelector('.trip-days__item');
      this._points[index] = [];
      this._pointForms[index] = [];
      renderElement(tripDaysElement, dayElement, RENDER_POSITION.beforeEnd);
      dayData.routePoints.forEach((pointData) => {
        let pointInstance = new PointComponent(pointData);
        let editingInstance = new EditingComponent(pointData, this._updateFavorite, this._routeData.cities);
        this._points[index].push(pointInstance);
        this._pointForms[index].push(editingInstance);
        pointInstance.addOpenListener(dayElement, editingInstance.getElement());
        editingInstance.addOpenListener(dayElement, pointInstance.getElement(), this._resetPoints.bind(this));
        editingInstance.restoreHandlers();
        renderElement(dayElement, pointInstance.getElement(), RENDER_POSITION.beforeEnd);
      });
    });
  }
  init() {
    this._updateFavorite = this._updateFavorite.bind(this);
    this._renderInformation();
    this._renderMenu();
    this._renderRoute();
    this._renderEvents();
  }
};
