import aptTypes from "../types/apartmentTypes";

export const setApartments = (data) => {
  return {
    type: aptTypes.SET_APARTMENTS,
    payload: data,
  };
};

export const setApartment = (data) => {
  return {
    type: aptTypes.SET_APARTMENT,
    payload: data,
  };
};
