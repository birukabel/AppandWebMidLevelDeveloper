import React,{useState,useEffect} from "react";

function ToDoForm() {
    let[todoName,updateName] = useState('');
    let[todoid,updateId] = useState('');

    const addToDos = async (todoname) => {
        await fetch('https://127.0.0.1:3000/api/todos', {
           method: 'POST',
           body: JSON.stringify({
              id: 5,
              name: todoName
              }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        })
           .then((response) => response.json())
           .then((data) => {
              updateName(data);              
           })
           .catch((err) => {
              console.log(err.message);
           });
     };
    

    return (
        <form className="row g-3" onSubmit={addToDos}>
            <div className="col-md-6">
                <label for="name">ToDo Name</label>
                <input type="text"
                    className="form-control"
                    id="name"
                    placeholder="ToDo Name"
                    value={todoName}
                     />
            </div>
            <button type="submit" className="btn btn-primary">Add ToDo</button>
        </form>
    )
}

export default ToDoForm;