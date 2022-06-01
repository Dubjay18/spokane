import usertypes from "../types/usertypes";

export const setUser = (user) => {
  return { type: usertypes.SET_USER, payload: user };
};

export const clearUser = () => {
  return { type: usertypes.CLEAR_USER, payload: "" };
};
