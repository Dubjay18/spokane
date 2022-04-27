export const initialState = {
  user: null,
  entry: null,
};
export const actionTypes = {
  SET_USER: "SET_USER",

  SET_ENTRY: "SET_ENTRY",
  SET_TOKEN: "SET_TOKEN",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        user: action.user,
      };
    case actionTypes.SET_ENTRY:
      return {
        ...state,
        entry: action.entry,
      };
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
