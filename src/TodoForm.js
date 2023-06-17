import React from "react";
import { useState } from "react";

const TodoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    // const handleChange = (e) => {
    //     setUserInput(e.currentTarget.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="input-group mb-3 justify-content-center mt-3 animated fadeInDown delay-3s">
    <input type="text"  value={userInput}  onChange={(e) =>setUserInput(e.target.value)} className="form-control m-auto "   name="inputField" autoComplete="off" placeholder="➕ Add a new To-Do " />
    <button className="btn btn-success">Add</button>
</div>
</form>
    </>
    )
}

export default TodoForm;