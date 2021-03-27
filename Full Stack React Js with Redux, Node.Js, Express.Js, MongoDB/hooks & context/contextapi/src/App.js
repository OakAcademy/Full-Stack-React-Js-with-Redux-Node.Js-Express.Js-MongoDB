import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
      	<ThemeContextProvider>
          <AuthContextProvider>
            <TodoListContextProvider>
        		  <Navbar />
        		  <TodoList />
            </TodoListContextProvider>
          </AuthContextProvider>
      	</ThemeContextProvider>
      </div>
    </div>
  );
}

export default App;
