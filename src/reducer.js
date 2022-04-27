import * as actions from "./actionTypes/newUser";

const initialUser = {
  username: null,
  email: null,
  token: null,
  entry: null,
};

export function user(state = initialUser, action) {
  switch (action.type) {
    case actions.SET_USERNAME:
      return Object.assign({}, state, { username: action.username });
    case actions.SET_EMAIL:
      return Object.assign({}, state, { email: action.email });
    case actions.SET_TOKEN:
      return Object.assign({}, state, { token: action.token });
    case actions.SET_ENTRY:
      return Object.assign({}, state, { entry: action.entry });
    default:
      return state;
  }
}
