import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TodoProvider } from './contexts';
import { TodoList } from './components';
import { Nav } from './components/_parts';
import { AllTodos, CompletedTodos } from './pages';

function App() {
	return (
		<Router>
			<TodoProvider>
				<div className="App">
					<Nav />
					<main>
						<Switch>
							<Route exact path="/">
								<AllTodos />
							</Route>
							<Route path="/completed">
								<CompletedTodos />
							</Route>
						</Switch>
					</main>
				</div>
			</TodoProvider>
		</Router>
	);
}

export default App;
