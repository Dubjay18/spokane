import usertypes from "../types/usertypes";

const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case usertypes.SET_USER:
      return { ...state, ...payload };
    case usertypes.CLEAR_USER:
      return {};
    default:
      return state;
  }
};

export default userReducer;
