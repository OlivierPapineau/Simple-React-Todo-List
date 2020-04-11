import React from 'react';
import './App.css';
import { TodoProvider } from './contexts';
import { TodoList } from './components';

function App() {
	return (
		<TodoProvider>
			<div className="App">
				<h1>HELLOOOOOOO</h1>
				<TodoList />
			</div>
		</TodoProvider>
	);
}

export default App;
