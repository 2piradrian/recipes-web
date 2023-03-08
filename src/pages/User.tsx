import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fullUserData, partialUserData } from "../types/types";

function User() {
	const userData: fullUserData | partialUserData = useSelector((state: any) => state.userData);
	useEffect(() => {
		if (userData) {
		}
	});
	return <div>User</div>;
}

export default User;
