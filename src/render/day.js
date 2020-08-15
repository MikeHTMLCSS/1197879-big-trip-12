import {RENDER_POSITION} from '../data/constant.js';
const OPENED_NAMES = {
  point: `point`,
  editing: `editing`,
};
const renderDays = (renderFunction, DayElementComponent, PointElementComponent, EditingElementComponent, container, data) => {
  data.forEach(dayData => {
    renderFunction(container, new DayElementComponent(dayData).getElement(), RENDER_POSITION.beforeEnd);
    let dayContainer = document.querySelectorAll(`.trip-events__list`)[document.querySelectorAll(`.trip-events__list`).length - 1];
    dayData.routePoints.forEach(pointData => {
      let pointElement = new PointElementComponent(pointData).getElement();
      let editingElement = new EditingElementComponent(pointData).getElement();
      renderFunction(dayContainer, pointElement, RENDER_POSITION.beforeEnd);
      let openElement = dayContainer.querySelector(`.event__rollup-btn`);
      let opened = OPENED_NAMES.point;
      openElement.addEventListener(`click`, function (evt) {
        if (evt.which === 1) {
          if (opened = OPENED_NAMES.point) {
            dayContainer.replaceChild(editingElement, pointElement);
            opened = OPENED_NAMES.editing;
          } else {
            dayContainer.replaceChild(pointElement, editingElement);
            opened = OPENED_NAMES.point;
          }
        }
      });
    });
  });
};
export {renderDays};
