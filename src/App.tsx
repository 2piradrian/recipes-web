import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./routes/Home";
import Explore from "./routes/Explore";
import Favourites from "./routes/Favourites";
import MyRecipes from "./routes/MyRecipes";
import Layout from "./layout/Layout";
import Register from "./routes/Register";
import Login from "./routes/Login";

const queryClient = new QueryClient();

function App() {
	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<Layout>
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/explorar" element={<Explore />} />
						<Route path="/favoritos" element={<Favourites />} />
						<Route path="/recetario" element={<MyRecipes />} />
						<Route path="/usuario" element={<MyRecipes />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/" element={<Navigate to="/home" />} />
						<Route path="*" element={<Navigate to="/home" />} />
					</Routes>
				</Layout>
			</QueryClientProvider>
		</div>
	);
}

export default App;
