import React, { Fragment, MouseEvent, useContext } from 'react';
import { TodoContext } from '../../contexts';
import { Link, NavLink } from 'react-router-dom';
import { ITodoItem } from '../../contexts/typings';

const Nav = () => {
	const [ items, setItems ] = useContext(TodoContext);

	const completedTodos: ITodoItem[] = items.filter((item: ITodoItem) => item.done);

	return (
		<Fragment>
			<nav>
				<ul>
					<li>
						<NavLink exact={true} to="/" activeClassName="link-is-active">
							All todos
						</NavLink>
					</li>
					<li>
						<NavLink to="/completed" activeClassName="link-is-active">
							Completed todos
						</NavLink>
						{completedTodos.length > 0 && <span className="number-completed">{completedTodos.length}</span>}
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export { Nav };
