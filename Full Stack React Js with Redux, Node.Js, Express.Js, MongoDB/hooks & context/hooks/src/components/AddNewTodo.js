import React, { useState } from 'react';

const AddNewTodo = ({ addTodo }) => {
	const [todo, setTodo] = useState('');

	const onFormSubmit = e => {
		e.preventDefault();
		addTodo(todo);
		setTodo('');
	};

	return(
		<form onSubmit={onFormSubmit}>
			<label htmlFor="todo"></label>
			<input type="text" id='todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
			<input type="submit"/>
		</form>
	);
}

export default AddNewTodo;