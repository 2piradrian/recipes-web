import { Navigate, Route, Routes } from "react-router-dom";
import Explore from "../pages/Explore";
import Favourites from "../pages/Favourites";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyRecipes from "../pages/MyRecipes";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import User from "../pages/User";
import AddRecipe from "../pages/AddRecipe";

function AllRoutes() {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/explore" element={<Explore />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/" element={<Navigate to="/home" />} />
			<Route path="*" element={<Navigate to="/home" />} />
			<Route element={<PrivateRoute />}>
				<Route path="/user" element={<User />} />
				<Route path="/favourites" element={<Favourites />} />
				<Route path="/myrecipes" element={<AddRecipe />} /> {/* <MyRecipes /> */}
				<Route path="/addrecipe" element={<AddRecipe />} />
			</Route>
		</Routes>
	);
}

export default AllRoutes;
