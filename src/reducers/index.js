 import {
   combineReducers
 } from 'redux';

 import {
   routerReducer
 } from 'react-router-redux';

 import {
   aboutReducer,
   projectReducer,
   skillsReducer,
   contactReducer,
   currentLoactionReducer,
   toggleSlideMenuReducer
 } from './Reducers.jsx';

 export default combineReducers({
   locationState: currentLoactionReducer,
   aboutState: aboutReducer,
   projectState: projectReducer,
   skillsState: skillsReducer,
   contactState: contactReducer,
   routing: routerReducer,
   slideState: toggleSlideMenuReducer
 });
