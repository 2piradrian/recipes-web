import { userdataReducer } from "./userdata";
import { combineReducers } from "redux";

const reducer = combineReducers({
	userData: userdataReducer,
});

export default reducer;
