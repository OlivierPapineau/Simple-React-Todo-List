import React, { Fragment } from 'react';
import { CompletedTodoList } from '../components';

const CompletedTodos = () => {
	return (
		<Fragment>
			<h1>Completed todos</h1>
			<CompletedTodoList />
		</Fragment>
	);
};

export { CompletedTodos };
