import { createStore } from "redux";
import navReducer from "./reducers/initilalReducer";

const store = createStore(navReducer);

export default store;
