import { useState } from "react";

export default function TestPage() {
	// let name = "";
	// const [name, setName] = useState("ayam");

	// function changeName() {
	// 	const newName = document.getElementById("input").value;
	// 	// name = newName;
	// 	setName(newName);
	// 	console.log(name);
	// }

	// Function Sum
	const [result, setResult] = useState(0);

	function sum() {
		const angka1 = parseInt(document.getElementById("angka1").value);
		const angka2 = parseInt(document.getElementById("angka2").value);
		setResult(angka1 + angka2);
		console.log(angka1 + angka2);
	}

	return (
		<div>
			{/* <h1>Test</h1>
			<h2>{name}</h2>
			<input
				style={{ backgroundColor: "grey" }}
				type="text"
				id="input"
				onChange={changeName}
			/> */}

			<div>
				<input
					style={{ backgroundColor: "#6d77b3", width: "20px", color: "#fff" }}
					type="text"
					id="angka1"
					defaultValue={0}
					onChange={sum}
				/>
				+
				<input
					style={{ backgroundColor: "#6d77b3", width: "20px", color: "#fff" }}
					type="text"
					id="angka2"
					defaultValue={0}
					onChange={sum}
				/>
				= {result}
			</div>
		</div>
	);
}
