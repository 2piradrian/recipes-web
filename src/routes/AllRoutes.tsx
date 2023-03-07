import { Navigate, Route, Routes } from "react-router-dom";
import Explore from "../pages/Explore";
import Favourites from "../pages/Favourites";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyRecipes from "../pages/MyRecipes";
import PrivateRoute from "../pages/PrivateRoute";
import Register from "../pages/Register";
import User from "../pages/User";

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
