import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const middlewareToApply = [thunk];

const middleware = composeWithDevTools(applyMiddleware(...middlewareToApply));

export default createStore(rootReducer, middleware);
