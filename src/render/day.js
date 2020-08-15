import {RENDER_POSITION} from '../data/constant.js';
const renderDays = (renderFunction, DayElementComponent, PointElementComponent, EditingElementComponent, container, data) => {
  data.forEach(dayData => {
    renderFunction(container, new DayElementComponent(dayData).getElement(), RENDER_POSITION.beforeEnd);
    let dayContainer = document.querySelectorAll(`.trip-events__list`)[document.querySelectorAll(`.trip-events__list`).length - 1];
    dayData.routePoints.forEach(pointData => {
      let pointElement = new PointElementComponent(pointData).getElement();
      let editingElement = new EditingElementComponent(pointData).getElement();
      renderFunction(dayContainer, pointElement, RENDER_POSITION.beforeEnd);
      let openElement = pointElement.querySelector(`.event__rollup-btn`);
      openElement.addEventListener(`click`, function () {
        dayContainer.replaceChild(editingElement, pointElement);
      });
    });
  });
};
export {renderDays};
