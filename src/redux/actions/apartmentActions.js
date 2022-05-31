import aptTypes from "../types/apartmentTypes";

export const setApartments = (state = {}, { type, payload }) => {
  switch (type) {
    case aptTypes.SET_APARTMENTS:
      return { ...state, payload };

    default:
      return state;
  }
};
