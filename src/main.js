'use strict';
import Trip from './presenter/trip.js';
import {callMockGenerationFunctions} from './mock/call.js';
const routeData = callMockGenerationFunctions()[0];
const dayData = callMockGenerationFunctions()[1];
let trip = new Trip(routeData, dayData);
trip.init();
