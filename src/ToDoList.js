import React from "react";
import Todos from "./Todos";
const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {

    return (
        <>
          {/* <ul className="list-group todos mx-auto text-light" > */}
         {
        toDoList.map((todo,index) => {
            return (
                <Todos todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} key={index}/>  
                
            )})
        
        }
        {/* </ul> */}
        <button  className="btn btn-info"  onClick={handleFilter}>Clear Completed</button>

        </>
    )

}

export default ToDoList;