import { setUserData } from "./../utils/userdata";
import { SET_LOCAL_DATA, SET_USER_DATA } from "../types/types";
import { action, fullUserData } from "./../../types/types";

export const userdataReducer = (state: fullUserData | {} = {}, action: action) => {
	const { payload, type } = action;
	switch (type) {
		case SET_USER_DATA:
			setUserData(payload);
			return state;
		case SET_LOCAL_DATA:
			return { ...payload };
		default:
			return state;
	}
};
