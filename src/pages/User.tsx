import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useVerification from "../hooks/useVerification";
import UserForm from "../sections/user-form/UserForm";
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
		return <UserForm />;
	}
}

export default User;
