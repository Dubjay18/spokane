export const initialState = {
  user: null,
  agent: null,
};
export const actionTypes = {
  SET_USER: "SET_USER",
  SET_AGENT: "SET_AGENT",
  SET_TOKEN: "SET_TOKEN",
  SET_QEMAIL: "SET_QEMAIL",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_AGENT:
      return {
        ...state,
        user: action.agent,
      };
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case actionTypes.SET_QEMAIL:
      return {
        ...state,
        qEmail: action.qEmail,
      };

    default:
      return state;
  }
};

export default reducer;
