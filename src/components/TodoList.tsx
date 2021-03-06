import React, { useState, useContext, Fragment, ChangeEvent } from 'react';
import { FaPlus } from 'react-icons/fa';
import { isUnique } from '../utils';
import { ITodoItem } from '../contexts/typings';
import { StatusButton } from './_parts';
import { TodoContext } from '../contexts';

const TodoList = () => {
	const [ items, setItems ] = useContext(TodoContext);
	const [ newItem, setNewItem ] = useState<ITodoItem>({} as ITodoItem);

	const handleAddItem = () => {
		const prevState = [ ...items ];

		if (!newItem.name) return;
		if (!isUnique(prevState, newItem, 'name')) return;

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
			<li key={index} className={`todo-item ${item.done ? 'done' : ''}`}>
				<div className="todo-item__label">{item.name}</div>
				<div className="todo-item__controls">
					<StatusButton onClick={() => handleItemOperation(item)} done={item.done} action="isDone" />
					<StatusButton onClick={() => handleItemOperation(item, 'delete')} action="delete" />
				</div>
			</li>
		);
	});

	return (
		<Fragment>
			<ul>
				{listElms}
				<li className="add-element">
					<input onChange={handleInputChange} type="text" value={newItem.name || ''} />
					<button onClick={handleAddItem}>
						<FaPlus />
						Add item
					</button>
				</li>
			</ul>
		</Fragment>
	);
};

export { TodoList };
