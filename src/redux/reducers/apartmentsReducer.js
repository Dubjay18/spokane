import aptTypes from "../types/apartmentTypes";

export const apartmentsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case aptTypes.SET_APARTMENTS:
      return { ...state, payload };
    default:
      return state;
  }
};

export const apartmentReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case aptTypes.SET_APARTMENT:
      return { ...state };
    default:
      return state;
  }
};
