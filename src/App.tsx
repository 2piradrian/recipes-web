import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./layout/Layout";
import AllRoutes from "./routes/AllRoutes";

const queryClient = new QueryClient();

function App() {
	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<Layout>
					<AllRoutes />
				</Layout>
			</QueryClientProvider>
		</div>
	);
}

export default App;
