import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { inputReducer } from "./inputReducer";
import { commentReducer } from "./commentReducer";
import { appReducer } from "../Components/appReducer";

export const rootReducer = combineReducers({
  likesReducer,
  inputReducer,
  commentReducer,
  appReducer
});
