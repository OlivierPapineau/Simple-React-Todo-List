import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
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

				<Switch>
					<Route exact path="/">
						<AllTodos />
					</Route>
					<Route path="/completed">
						<CompletedTodos />
					</Route>
				</Switch>
			</nav>
		</Fragment>
	);
};

export { Nav };
