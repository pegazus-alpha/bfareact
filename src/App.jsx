import { useState, useEffect } from "react";
import './bootstrap-5.0.2-dist/css/bootstrap.min.css';
import './bootstrap-5.0.2-dist/js/bootstrap.min.js';
import './index.css'
import{
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from 'react-router-dom'

import LoginPage from "./Login";
import Todo from "./Todo";
import HomePage from "./Accueil";
import EditTodo from "./EditTodo"


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const addTodo = (todo) => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = [...storedTodos, todo];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const editTodo = (id, updatedTask) => {
    const updatedTodos = todos.map(todo => todo.id === id ? updatedTask : todo);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const toggleTodoState = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.state = todo.state === 0 ? 1 : 0;
      }
      return todo;
    });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  return <Router>
      <div>
      
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path="/EditTodo/:id" element={<EditTodo todos={todos} editTodo={editTodo}/>}></Route>
          <Route exact path='/Tasks' element={<Todo/>} ></Route>
          <Route exact path='/Login' element={<LoginPage/>}></Route>
          {/* <Route exact path='*' Component={HomePage}></Route> */}

        </Routes>
      </div>
      {/* <HomePage/> */}
      </Router>
  
}


export default App;
