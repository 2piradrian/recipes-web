import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Favourites() {
	const navigate = useNavigate();
	useEffect(() => {
		getAuth().onAuthStateChanged(function (user) {
			if (!user) {
				navigate("/login");
			}
		});
	}, []);

	return <div>Favourites</div>;
}

export default Favourites;
