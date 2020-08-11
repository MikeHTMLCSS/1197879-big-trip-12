const makeRouteDataMock = () => {
    let routeData = {
        cities: ['Tallin', 'Riga', 'Vilnius'],
        date: {
            start: {
                month: 2,
                day: 21,
            },
            end: {
                month: 7,
                day: 24,
            },
        },
    };
    return routeData;
};
export {makeRouteDataMock};
