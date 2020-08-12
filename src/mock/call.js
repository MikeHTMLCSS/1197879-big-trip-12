import {DAYS_NUMBER} from '../data/constant.js';
import {makeDayDataMock} from './data/day.js';
import {makeRouteDataMock} from './data/route.js';
const callMockGenerationFunctions = () => {
  let routeData = makeRouteDataMock();
  let dayData = [];
  for (let i = 0; i < DAYS_NUMBER; i++) {
    dayData.push(makeDayDataMock());
  }
	return [routeData, dayData];
};
export {callMockGenerationFunctions};
