import React, { useState, useMemo } from "react";

const App = () => {
	const [number, setNumber] = useState(0);
	const [count, setCount] = useState(0);

	const incrementNumber = () => setNumber((prev) => prev + 1);
	const incrementCount = () => setCount((prev) => prev + 1);
	const dicrementCount = () => setCount((prev) => prev - 1);

	const isNumberEven = useMemo(() => {
		let i = 0;
		while (i < 2000000) i++;
		return number % 2 === 0;
	}, [number]);

	return (
		<div className="App">
			<button onClick={incrementNumber}>number : {number}</button>
			<div>{isNumberEven ? "even" : "odd"}</div>
			<div className="containerNumber">
				<button
					className="btn"
					style={{ marginRight: "10px", width: "20px" }}
					onClick={dicrementCount}
				>
					<p className="paragrap">-</p>
				</button>
				<p
					className="paragrap"
					style={{ fontSize: "20px", fontWeight: "bold" }}
				>
					{count}
				</p>

				<button
					className="btn"
					style={{ marginLeft: "10px", width: "20px" }}
					onClick={incrementCount}
				>
					<p className="paragrap">+</p>
				</button>
			</div>
		</div>
	);
};
export default App;
