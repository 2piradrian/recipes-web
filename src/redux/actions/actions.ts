import { fullUserData, partialUserData } from "./../../types/types";
import { GET_USER_DATA, SET_USER_DATA } from "../types/types";

export const get_user_data = (email: string) => ({
	type: GET_USER_DATA,
	payload: email,
});

export const set_user_data = (data: fullUserData | partialUserData | null) => ({
	type: SET_USER_DATA,
	payload: data,
});
