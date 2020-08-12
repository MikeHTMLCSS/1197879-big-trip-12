const renderDays = (renderFunction, makeDayElement, makePointElement, container, data) => {
  data.forEach(dayData => {
    renderFunction(container, makeDayElement(dayData), `beforeEnd`);
    let dayContainer = document.querySelectorAll(`.trip-events__list`)[document.querySelectorAll(`.trip-events__list`).length - 1];
    dayData.routePoints.forEach(pointData => {
      renderFunction(dayContainer, makePointElement(pointData), `beforeEnd`);
    });
  });
};
export {renderDays};
