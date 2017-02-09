 import {
   combineReducers
 } from 'redux';

 import {
   aboutReducer,
   projectReducer,
   skillsReducer,
   contactReducer,
 } from './Reducers.jsx';

 export default combineReducers({
   aboutState: aboutReducer,
   projectState: projectReducer,
   skillsState: skillsReducer,
   contactState: contactReducer,
 });
