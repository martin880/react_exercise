import "./App copy.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import TestPage from "./pages/Test";
import TestPage2 from "./pages/useEffect";

function App() {
	return (
		<>
			<Routes>
				<Route path="" element={<HomePage />}></Route>
				<Route path="test" element={<TestPage />}></Route>
				<Route path="test2" element={<TestPage2 />}></Route>
			</Routes>
		</>
	);
}

export default App;
