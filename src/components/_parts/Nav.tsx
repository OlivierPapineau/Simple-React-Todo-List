import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AllTodos, CompletedTodos } from '../../pages';

const Nav = () => {
	return (
		<Fragment>
			<nav>
				<ul>
					<li>
						<Link to="/">All todos</Link>
					</li>
					<li>
						<Link to="/completed">Completed todos</Link>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export { Nav };
