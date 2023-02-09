import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import serviceReducer from "../reducers/serviceReducer";
import { servicesRequestEpic } from "../epics";

const reducer = combineReducers({
  services: serviceReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epic = combineEpics(servicesRequestEpic);
const epicMiddleare = createEpicMiddleware();

export const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleare))
);

epicMiddleare.run(epic);
