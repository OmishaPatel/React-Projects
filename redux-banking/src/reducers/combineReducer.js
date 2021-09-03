import { combineReducers } from "redux";
import { bankingreducer } from "./bankingreducers";
import { authReducer } from "./authReducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  banking: bankingreducer,
});
