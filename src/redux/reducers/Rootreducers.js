import { combineReducers } from "redux";
import flighbookingreducers from "./bookingreducers";

const Rootreducers = combineReducers({
  book: flighbookingreducers,
});

export default Rootreducers;
