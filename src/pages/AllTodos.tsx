import React, { Fragment } from 'react';
import { TodoList } from '../components';

const AllTodos = () => {
	return (
		<Fragment>
			<h1>All todos</h1>
			<TodoList />
		</Fragment>
	);
};

export { AllTodos };
