import { legacy_createStore as createStore } from "redux";
import Rootreducers from "./reducers/Rootreducers";

const store = createStore(Rootreducers);

export default store;
