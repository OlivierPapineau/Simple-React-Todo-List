import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { TodoProvider } from './contexts';
import { TodoList } from './components';
import { Nav } from './components/_parts';

function App() {
	return (
		<Router>
			<TodoProvider>
				<div className="App">
					<Nav />
				</div>
			</TodoProvider>
		</Router>
	);
}

export default App;
