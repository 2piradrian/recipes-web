import { setUserData } from "./../utils/userdata";
import { SET_LOCAL_DATA, SET_USER_DATA } from "../types/types";
import { action, fullUserData } from "./../../types/types";

export const userdataReducer = (state: fullUserData | {} = {}, action: action) => {
	const { payload, type } = action;
	console.log(state);
	switch (type) {
		case SET_USER_DATA:
			/* establece en el state el documento del usuario al registrarse */
			/* además, lo sube a firerbase */
			setUserData(payload);
			console.log("payload", payload);
			return { ...payload };
		case SET_LOCAL_DATA:
			/* establece en el state el documento de información del usuario */
			console.log("payload", payload);
			return { ...payload };
		default:
			return state;
	}
};
