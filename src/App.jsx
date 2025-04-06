import { useState } from "react";

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

import './App.css'
import Search from "./components/Search";

function App() {

  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Ir para a Academia",
      category: "Pessoal",
      isCompleted: false,
    }
  ]);

  function addTodo(text, category) {
    const newTodos = [...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text: text,
        category: category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };
  
  const removeTodo = (id) => {

    const newTodos = [...todos];

    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );

    setTodos(filteredTodos);

  }

  const completeTodo = (id) => {

    const newTodos = [...todos];

    newTodos.map((todo) => 
      todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );

    setTodos(newTodos);

  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search 
        search={search}
        setSearch={setSearch}
      />
      <div className="todo-list">
        {todos.length > 0 ? (

          todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))
        ) : (
          <p>Não Há Tarefas!</p>
        )}
        
      </div>
      <TodoForm 
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
