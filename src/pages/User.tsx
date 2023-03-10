import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useVerification from "../hooks/useVerification";
import { fullUserData, partialUserData } from "../types/types";

function User() {
	const [verification, setVerification] = useState<boolean>();
	const { verifyUserData } = useVerification();
	const userData: fullUserData | partialUserData = useSelector((state: any) => state.userData);

	useEffect(() => {
		setVerification(verifyUserData(userData));
	}, [userData]);

	if (verification) {
		return <div>User</div>;
	} else {
		return <div>No User</div>;
	}
}

export default User;
