import React, { useState, useContext, Fragment, ChangeEvent } from 'react';
import { TodoContext } from '../contexts';
import { ITodoItem } from '../contexts/typings';

const TodoList = () => {
	const [ items, setItems ] = useContext(TodoContext);
	const [ newItem, setNewItem ] = useState<ITodoItem>({} as ITodoItem);

	const handleAddItem = () => {
		const prevState = [ ...items ];

		setItems([ ...prevState, newItem ]);
		setNewItem({} as ITodoItem);
		localStorage.setItem('todoList', JSON.stringify([ ...prevState, newItem ]));
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewItem({
			name: e.target.value,
			done: false
		});
	};

	const handleItemOperation = (item: ITodoItem, mode: string = 'done') => {
		const newState = [ ...items ];
		newState.forEach((todo, index) => {
			if (todo.name === item.name) {
				mode === 'delete' ? newState.splice(index, 1) : (newState[index].done = !item.done);
			}
		});

		setItems(newState);
		localStorage.setItem('todoList', JSON.stringify(newState));
	};

	const listElms = items.map((item: ITodoItem, index: number) => {
		return (
			<li key={index}>
				{item.name}
				&nbsp;<button onClick={() => handleItemOperation(item)}>{item.done ? 'Not Done' : 'Done'}</button>
				&nbsp;<button onClick={() => handleItemOperation(item, 'delete')}>Delete</button>
				<br />Complete: {`${item.done}`}
			</li>
		);
	});

	return (
		<Fragment>
			<ul>
				{listElms}
				<li>
					<input onChange={handleInputChange} type="text" value={newItem.name || ''} />
					<button onClick={handleAddItem}>Add item</button>
				</li>
			</ul>
		</Fragment>
	);
};

export { TodoList };
