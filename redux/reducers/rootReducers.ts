import { combineReducers } from "redux";

// All Reducers
import ModeReducers from "./modeReducers";
import EventReducers from "./eventReducers";

export const rootReducer = combineReducers({
  ModeReducer: ModeReducers,
  EventReducer: EventReducers,
});

export default rootReducer;
