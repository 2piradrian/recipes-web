import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyRecipes() {
	const navigate = useNavigate();
	useEffect(() => {
		getAuth().onAuthStateChanged(function (user) {
			if (!user) {
				navigate("/login");
			}
		});
	}, []);

	return <div>MyRecipes</div>;
}

export default MyRecipes;
