import { BOOKING_FLIGHT, BOOKING_DELETE } from "./actiontypes";

export const flighbookaction = (value) => {
  return {
    type: BOOKING_FLIGHT,
    payload: value,
  };
};
export const flighbookdelete = (value) => {
  return {
    type: BOOKING_DELETE,
    payload: value,
  };
};
