const POINTS_NUMBER = 25;
const ROUTE_POINT = {
  types: ['Taxi', 'Bus', 'Train', 'Ship', 'Transport', 'Drive', 'Flight', 'Check', 'Sightseeing', 'Restaurant'],
  cities: ['Tallin', 'Riga', 'Vilnius'],
  informations: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'.split('. '),
  costMin: 0,
  costMax: 1000,
}
const makeRoutePointDataMock = () => {
  let routePointData = {
    type: ROUTE_POINT.types[Math.round(Math.random() * (ROUTE_POINT.types.length - 1))],
    city: ROUTE_POINT.cities[Math.round(Math.random() * (ROUTE_POINT.cities.length - 1))],
    options: [{
      name: 'abc1',
      cost: 50,
    }, {
      name: 'abc2',
      cost: 150,
    }],
    startTime: {
      hours: 11,
      minutes: 11,
    },
    endTime: {
      hours: 12,
      minutes: 21,
    },
    information: ROUTE_POINT.informations[Math.round(Math.random() * (ROUTE_POINT.informations.length - 1))],
    photos: [],
    cost: Math.round(Math.random() * (ROUTE_POINT.costMax - ROUTE_POINT.costMin)) + ROUTE_POINT.costMin,
  };
  return routePointData;
};
let routePointDataMocks = [];
for (let i = 0; i < POINTS_NUMBER; i++) {
  routePointDataMocks.push(makeRoutePointDataMock());
}
const makeDayDataMock = () => {
  let dayData = {
    number: 5,
    date: {
      month: 3,
      day: 24,
    },
    routePoints: [routePointDataMocks[Math.round(Math.random() * (routePointDataMocks.length - 1))]],
  }
  return dayData;
};
export {makeDayDataMock};
