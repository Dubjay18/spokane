export const SET_USERNAME = "SET_USER";
export const SET_EMAIL = "SET_EMAIL";
export const SET_TOKEN = "SET_TOKEN";
export const SET_ENTRY = "SET_ENTRY";

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    username,
  };
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email,
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}

export function setEntry(entry) {
  return {
    type: SET_ENTRY,
    entry,
  };
}
