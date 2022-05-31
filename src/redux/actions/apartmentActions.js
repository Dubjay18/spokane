import aptTypes from "../types/apartmentTypes";

export const setApartments = (kind, data) => {
  return {
    type: aptTypes.SET_APARTMENTS,
    payload: data,
    kind,
  };
};

export const setApartment = (data) => {
  return {
    type: aptTypes.SET_APARTMENT,
    payload: data,
  };
};
