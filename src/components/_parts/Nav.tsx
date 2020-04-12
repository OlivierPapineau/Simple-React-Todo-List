import React, { Fragment, useContext } from 'react';
import { TodoContext } from '../../contexts';
import { Link } from 'react-router-dom';
import { AllTodos, CompletedTodos } from '../../pages';
import { ITodoItem } from '../../contexts/typings';

const Nav = () => {
	const [ items, setItems ] = useContext(TodoContext);

	const completedTodos: ITodoItem[] = items.filter((item: ITodoItem) => item.done);

	return (
		<Fragment>
			<nav>
				<ul>
					<li>
						<Link to="/">All todos</Link>
					</li>
					<li>
						<Link to="/completed">Completed todos</Link>
						{completedTodos.length > 0 && <span className="number-completed">{completedTodos.length}</span>}
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export { Nav };
