import { fullUserData } from "./../../types/types";
import {
	GET_USER_DATA,
	NO_FILTER,
	SET_LOCAL_DATA,
	FILTER_NAME,
	SET_USER_DATA,
	FILTER_CATEGORY,
} from "../types/types";

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

export const no_filters = () => ({
	type: NO_FILTER,
});

export const filter_name = (name: string) => ({
	type: FILTER_NAME,
	payload: name,
});

export const filter_category = (category: string) => ({
	type: FILTER_CATEGORY,
	payload: category,
});
