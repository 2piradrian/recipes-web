import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function User() {
	const navigate = useNavigate();
	useEffect(() => {
		getAuth().onAuthStateChanged(function (user) {
			if (!user) {
				return navigate("/login");
			}
		});
	}, []);

	return <div>User</div>;
}

export default User;
