import { useState } from "react";

export default function TestPage() {
	// let name = "";
	const [name, setName] = useState("ayam");

	function changeName() {
		const newName = document.getElementById("input").value;
		// name = newName;
		setName(newName);
		console.log(name);
	}
	return (
		<div>
			<h1>Test</h1>
			<h2>{name}</h2>
			<input
				style={{ backgroundColor: "grey" }}
				type="text"
				id="input"
				onChange={changeName}
			/>
		</div>
	);
}
