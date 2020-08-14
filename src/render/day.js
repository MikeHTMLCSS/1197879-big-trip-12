const renderDays = (renderFunction, MakeDayElement, MakePointElement, container, data) => {
  data.forEach(dayData => {
    renderFunction(container, new MakeDayElement(dayData).getHTML(), `beforeEnd`);
    let dayContainer = document.querySelectorAll(`.trip-events__list`)[document.querySelectorAll(`.trip-events__list`).length - 1];
    dayData.routePoints.forEach(pointData => {
      renderFunction(dayContainer, new MakePointElement(pointData).getHTML(), `beforeEnd`);
    });
  });
};
export {renderDays};
