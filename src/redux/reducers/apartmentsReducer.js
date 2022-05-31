import aptTypes from "../types/apartmentTypes";

export const apartmentsReducer = (state = [], { type, payload, kind }) => {
  switch (type) {
    case aptTypes.SET_APARTMENTS:
      return payload
        ? kind !== "All"
          ? payload.filter((e) => e.category === kind)
          : payload
        : state;

    default:
      return state;
  }
};

export const apartmentReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case aptTypes.SET_APARTMENT:
      return payload;
    default:
      return state;
  }
};
