import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "../reducers";

function configureStoreProd(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export default configureStoreProd;
