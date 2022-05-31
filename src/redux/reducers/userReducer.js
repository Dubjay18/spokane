import { usertypes } from "../types/actiontypes";

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case usertypes.SET_EMAIL:
      return { ...state, payload };
    case usertypes.SET_USERNAME:
      return { ...state, payload };
    case usertypes.SET_ENTRY:
      return { ...state, payload };
    case usertypes.SET_TOKEN:
      return { ...state, payload };
    default:
      return state;
  }
};

export default userReducer;
