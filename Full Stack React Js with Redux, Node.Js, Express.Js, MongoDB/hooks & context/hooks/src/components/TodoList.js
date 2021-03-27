import React, { useState, useEffect } from 'react';
import AddNewTodo from './AddNewTodo';

const TodoList = () => {
	const [todos, setTodos] = useState([
		{ text: 'Pay bills', id: 1 },
		{ text: 'Do your homework', id: 2 },
		{ text: 'Feed the dog', id: 3 }
	]);

	const [count, setCount] = useState(0);

	const addTodo = (text) => {
		setTodos([
			...todos,
			{ text, id: Math.random() }
		]);
	};

	useEffect(() => {
		console.log('useEffect todos', todos);
	}, [todos]);

	useEffect(() => {
		console.log('useEffect count', count);
	}, [count]);

	useEffect(() => {
		console.log('this hook runs at initial render');
	}, []);

	return(
		<div>
			<ul>
				{
					todos.map(todo => {
						return( <li key={todo.id}>{todo.text}</li>)
					})
				}
			</ul>
			<AddNewTodo addTodo={addTodo}/>
			<button onClick={() => setCount(count + 1)}>Score: {count}</button>
		</div>
	)
};

export default TodoList;









