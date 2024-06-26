import { createStore } from "redux";
import { chatReducer } from "./reducers/globalReducer";

const store = createStore(chatReducer);

export default store;
