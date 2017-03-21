 import {
   combineReducers
 } from 'redux';

 import {
   routerReducer
 } from 'react-router-redux';

 import {
   currentLoactionReducer,
   toggleSlideMenuReducer
 } from './Reducers.jsx';

 export default combineReducers({
   locationState: currentLoactionReducer,
   routing: routerReducer,
   slideState: toggleSlideMenuReducer
 });
