import { combineReducers } from "redux";

// All Reducers
import ModeReducers from "./modeReducers";

export const rootReducer = combineReducers({
  ModeReducer: ModeReducers,
});

export default rootReducer;
