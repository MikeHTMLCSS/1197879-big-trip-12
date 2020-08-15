import {RENDER_POSITION} from '../data/constant.js';
const renderDays = (renderFunction, DayElementComponent, PointElementComponent, container, data) => {
  data.forEach(dayData => {
    renderFunction(container, new DayElementComponent(dayData).getElement(), RENDER_POSITION.beforeEnd);
    let dayContainer = document.querySelectorAll(`.trip-events__list`)[document.querySelectorAll(`.trip-events__list`).length - 1];
    dayData.routePoints.forEach(pointData => {
      renderFunction(dayContainer, new PointElementComponent(pointData).getElement(), RENDER_POSITION.beforeEnd);
    });
  });
};
export {renderDays};
