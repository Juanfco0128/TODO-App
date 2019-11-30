import React, { useState } from "react";

//create your first component
export function Home() {
	const [inputValue, setInputValue] = useState("data");
	const [todos, setTodos] = useState([""]);

	const removeTodo = todo => {
		let newTodos = [...todos]; // duplicar arreglo
		let index = todos.indexOf(todo); // encontrar la posicion (indice) del todo
		newTodos.splice(index, 1); // quitar el elemnento del arreglo usando su indice
		setTodos(newTodos); // actualizar el arreglo original todos
	};
	return (
		<div>
			<div className="text-center mt-5">
				<h1> ToDo Lits</h1>
				<input
					style={{ position: "absolute", left: "45%" }}
					onChange={e => setInputValue(e.target.value)}
					onKeyPress={e => {
						if (e.charCode === 13) {
							setTodos(todos.concat(<h4>{inputValue}</h4>));
						}
					}}
				/>
				<div className="text-center list">
					<ol>
						{todos.map((t, i) => (
							<li
								key={i}
								className="d-flex justify-content-between">
								{t}
								<button
									className="Delete"
									onClick={() => removeTodo(t)}
								/>
							</li>
						))}
					</ol>
				</div>
			</div>
		</div>
	);
}
