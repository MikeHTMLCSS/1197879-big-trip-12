const renderDays = (renderFunction, makeDayElement, makePointElement, container, data) => {
  for (let i = 0; i < data.length; i++) {
    renderFunction(container, makeDayElement(data[i]), `beforeEnd`);
    let dayContainer = document.querySelectorAll(`.trip-events__list`)[document.querySelectorAll(`.trip-events__list`).length - 1];
    for (let j = 0; j < data[i].routePoints.length; j++) {
      renderFunction(dayContainer, makePointElement(data[i].routePoints[j]), `beforeEnd`);
    }
  }
};
export {renderDays};
