import { useSelector } from "react-redux";
import UserProfile from "../sections/user-profile/UserProfile";
import { fullUserData } from "../types/types";

function User() {
	const userData: fullUserData = useSelector((state: any) => state.userData);

	return (
		<div className="bigcontainer">
			<UserProfile user={userData} />
		</div>
	);
}

export default User;
