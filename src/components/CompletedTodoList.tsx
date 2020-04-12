import React, { Fragment, useContext } from 'react';
import { TodoContext } from '../contexts';
import { ITodoItem } from '../contexts/typings';

const CompletedTodoList = () => {
	const [ items, setItems ] = useContext(TodoContext);
	const itemElms = items.filter((item: ITodoItem) => item.done).map((filteredItem: ITodoItem, index: number) => {
		return (
			<li key={index}>
				{filteredItem.name} <button>Delete</button>
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
