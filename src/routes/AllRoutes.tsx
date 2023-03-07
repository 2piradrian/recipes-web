import Home from "./Home";
import Explore from "./Explore";
import Favourites from "./Favourites";
import MyRecipes from "./MyRecipes";
import Register from "./Register";
import Login from "./Login";
import { Navigate, Route, Routes } from "react-router-dom";
import User from "./User";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/explorar" element={<Explore />} />
			<Route
				path="/favoritos/*"
				element={<PrivateRoute element={<Favourites />} path="/favoritos/*" />}
			/>
			<Route
				path="/recetario/*"
				element={<PrivateRoute element={<MyRecipes />} path="/recetario/*" />}
			/>
			<Route
				path="/usuario/*"
				element={<PrivateRoute element={<User />} path="/usuario/*" />}
			/>
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<Navigate to="/home" />} />
			<Route path="*" element={<Navigate to="/home" />} />
		</Routes>
	);
}

export default AllRoutes;
