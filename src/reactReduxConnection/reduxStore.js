import { createStore } from "redux";
import { mdReducer } from "./reduxHelpers";

/**
 * The Redux store that will handle the state of the UI
 * 
 * @constant
 */
export const store = createStore(mdReducer);