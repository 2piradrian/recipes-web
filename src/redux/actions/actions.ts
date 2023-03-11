import { fullUserData } from "./../../types/types";
import { GET_USER_DATA, SET_LOCAL_DATA, SET_USER_DATA } from "../types/types";

export const get_user_data = (email: string) => ({
	type: GET_USER_DATA,
	payload: email,
});

export const set_user_data = (data: fullUserData | null) => ({
	type: SET_USER_DATA,
	payload: data,
});

export const set_local_data = (data: fullUserData | null) => ({
	type: SET_LOCAL_DATA,
	payload: data,
});
