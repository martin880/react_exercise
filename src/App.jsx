import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TestPage from "./pages/Test";

function App() {
	return (
		<>
			<Routes>
				<Route path="" element={<HomePage />}></Route>
				<Route path="test" element={<TestPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
