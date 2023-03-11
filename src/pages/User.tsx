import { useSelector } from "react-redux";
import useVerification from "../hooks/useVerification";
import UserForm from "../sections/user-form/UserForm";
import { fullUserData, partialUserData } from "../types/types";

function User() {
	const { verifyUserData } = useVerification();
	const userData: fullUserData | partialUserData = useSelector((state: any) => state.userData);

	if (Object.keys(userData).length !== 0 && verifyUserData(userData)) {
		return <div>User</div>;
	} else {
		return <UserForm />;
	}
}

export default User;
