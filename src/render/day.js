import {RENDER_POSITION} from '../data/constant.js';
const renderDays = (renderFunction, DayElementComponent, PointElementComponent, EditingElementComponent, container, data) => {
  data.forEach(dayData => {
    renderFunction(container, new DayElementComponent(dayData).getElement(), RENDER_POSITION.beforeEnd);
    let dayContainer = document.querySelectorAll(`.trip-events__list`)[document.querySelectorAll(`.trip-events__list`).length - 1];
    dayData.routePoints.forEach(pointData => {
      let pointElement = new PointElementComponent(pointData);
      let editingElement = new EditingElementComponent(pointData);
      pointElement.addOpenListener(dayContainer, editingElement.getElement());
      editingElement.addOpenListener(dayContainer, pointElement.getElement());
      renderFunction(dayContainer, pointElement.getElement(), RENDER_POSITION.beforeEnd);
    });
  });
};
export {renderDays};
