import React from "react";

const Todos =({todo,handleToggle}) => {

  console.log(todo);
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

  return (

<ul className="list-group todos mx-auto text-light" key={todo.id}  onClick={handleClick} id={todo.id}>
       <li  key={todo.id}  name="todo" value={todo.task} className={ todo.complete ? "list-group-item d-flex justify-content-between align-items-center todo strike" :"list-group-item d-flex justify-content-between align-items-center todo"} >
            {todo.task}
        </li>
      </ul>
                  
  );

}

export default Todos;