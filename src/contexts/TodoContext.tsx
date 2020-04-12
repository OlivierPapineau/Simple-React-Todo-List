import React, { useState, createContext } from 'react';
import { ITodoItem, ITodoProviderProps } from './typings';

type TChildrenType = JSX.Element[] | JSX.Element;

const TodoContext = createContext({} as any);

const TodoProvider = (props: ITodoProviderProps) => {
	const [ items, setItems ] = useState<ITodoItem[]>(
		localStorage.getItem('todoList') !== null
			? JSON.parse(localStorage.getItem('todoList') || '') as ITodoItem[]
			: [ { name: 'acheter des oeufs', done: false }, { name: 'acheter du lait', done: true } ]
	);

	return <TodoContext.Provider value={[ items, setItems ]}>{props.children}</TodoContext.Provider>;
};

export { TodoProvider, TodoContext };
