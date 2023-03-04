import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
		</div>
	);
}

export default App;
