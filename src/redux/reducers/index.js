import { combineReducers } from "redux";
import { apartmentReducer, apartmentsReducer } from "./apartmentsReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  user: userReducer,
  apartments: apartmentsReducer,
  apartment: apartmentReducer,
});

export default reducer;
