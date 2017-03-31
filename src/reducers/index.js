 import {
   combineReducers
 } from 'redux';

 import {
   toggleSlideMenuReducer
 } from './Reducers.jsx';

 export default combineReducers({
   slideState: toggleSlideMenuReducer
 });
