import { setUserData } from "./../utils/userdata";
import { SET_LOCAL_DATA, SET_USER_DATA } from "../types/types";
import { action, fullUserData } from "./../../types/types";

export const userdataReducer = (state: fullUserData | {} = {}, action: action) => {
	const { payload, type } = action;
	switch (type) {
		case SET_USER_DATA:
			/* establece en el state el documento del usuario al registrarse */
			/* además, lo sube a firerbase */
			setUserData(payload);
			return { ...payload };
		case SET_LOCAL_DATA:
			/* establece en el state el documento de información del usuario */
			return { ...payload };
		default:
			return state;
	}
};
