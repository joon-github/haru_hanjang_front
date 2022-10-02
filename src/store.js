import { createStore } from "redux";
import navReducer from "./reducers/NavReducer";

const store = createStore(navReducer);

export default store;
