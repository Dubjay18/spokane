import { usertypes } from "../types/actiontypes";

export const setUsername = (username) => {
  return { type: usertypes.SET_USERNAME, username };
};

export const setEmail = (email) => {
  return { type: usertypes.SET_EMAIL, email };
};

export const setToken = (token) => {
  return { type: usertypes.SET_TOKEN, token };
};

export const setEntry = (entry) => {
  return { type: usertypes.SET_ENTRY, entry };
};
