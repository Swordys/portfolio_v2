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
   currentLoactionReducer
 } from './Reducers.jsx';

 export default combineReducers({
   locationState: currentLoactionReducer,
   aboutState: aboutReducer,
   projectState: projectReducer,
   skillsState: skillsReducer,
   contactState: contactReducer,
   routing: routerReducer,
 });
