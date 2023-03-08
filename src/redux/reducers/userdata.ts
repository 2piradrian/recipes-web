import { getUserData, setUserData } from "./../utils/userdata";
import { GET_USER_DATA, SET_USER_DATA } from "../types/types";
import { action, fullUserData, partialUserData } from "./../../types/types";

export const userdataReducer = (
	state: fullUserData | partialUserData | {} = {},
	action: action
) => {
	const { payload, type } = action;
	switch (type) {
		case SET_USER_DATA:
			setUserData(payload);
			return state;
		case GET_USER_DATA:
			state = getUserData(payload);
			console.log(state);
			return state;
		default:
			return state;
	}
};
