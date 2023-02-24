import { BOOKING_FLIGHT, BOOKING_DELETE } from "../actions/actiontypes";
const initialstate = {
  book: [],
};

const flighbookingreducers = (state = initialstate, action) => {
  switch (action.type) {
    case BOOKING_FLIGHT:
      return {
        ...state,
        book: [...state.book, action.payload],
      };
    case BOOKING_DELETE:
      return {
        ...state,
        book: state.book.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default flighbookingreducers;
