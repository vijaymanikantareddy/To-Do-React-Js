// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import ToDoList from "./ToDoList";
import data from "./data.json";
import TodoForm from "./TodoForm";
// import axios from 'axios';

function App() {
  const [toDoList, setTodoList] = useState(data);

  console.log(toDoList);
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setTodoList(copy);
  };
  return (
    <div className="container">
      <header className="text-center text-light my-4">
        <h1>To-do List 🚩</h1>
        <form className="search">
          {/* <input type='text' id='searchbar' onChange={()=> {}}  className='form-control m-auto' placeholder='🔍Search todo' /> */}
        </form>
      </header>

      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      {/* <Todos ul={todoList.name} id={todoList.id} /> */}

      {/* <Todos ul={todoList} /> */}
      {/* <h6 id='search' className='test-center text-light my-4'></h6> */}

      <TodoForm addTask={addTask} />

      <h6 className="text-center text-light my-4">
        <a href="https://github.com/vijaymanikantareddy" className="text-light">
          @VijayManikantaReddy
        </a>
      </h6>
    </div>
  );
}

export default App;
