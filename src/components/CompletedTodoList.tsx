import React, { Fragment, useContext } from 'react';
import { TodoContext } from '../contexts';
import { ITodoItem } from '../contexts/typings';

const CompletedTodoList = () => {
	const [ items, setItems ] = useContext(TodoContext);

	const handleDelete = (item: ITodoItem) => {
		const newState = [ ...items ];
		newState.forEach((todo, index) => {
			if (todo.name === item.name) {
				newState.splice(index, 1);
			}
		});

		setItems(newState);
		localStorage.setItem('todoList', JSON.stringify(newState));
	};

	const itemElms = items.filter((item: ITodoItem) => item.done).map((filteredItem: ITodoItem, index: number) => {
		return (
			<li key={index}>
				{filteredItem.name} <button onClick={() => handleDelete(filteredItem)}>Delete</button>
			</li>
		);
	});

	return (
		<Fragment>
			<ul>{itemElms}</ul>
		</Fragment>
	);
};

export { CompletedTodoList };
