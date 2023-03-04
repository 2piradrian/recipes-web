import { Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./routes/Home";

const queryClient = new QueryClient();

function App() {
	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="*" element={<Navigate to="/home" />} />
				</Routes>
			</QueryClientProvider>
		</div>
	);
}

export default App;
