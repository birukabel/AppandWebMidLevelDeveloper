import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';

function App() {
  const [todos, setToDos] = useState({});
   useEffect(() => {
      fetch('https://127.0.0.1:3000/api/todos/')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setToDos(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  return (
    <div>
      <ToDoForm></ToDoForm>
      <ToDoList allToDos={todos} ></ToDoList>
    </div>
  );
}

export default App;
