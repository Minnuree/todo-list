import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);  // todos tüm lisetenin elemanlarını tutan settodos değişimi tutan 
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []) 
  
  // bir kere
  
  useEffect(() => {
    filterHandler(todos) //ya da filterHandler ı useEffect içinde yazarsak çözülür
    saveLocalTodos();
  }, [todos, status]) //eslint-disable-line

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //! save to local 
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") ===null) {
      localStorage.setItem("todos", JSON.stringify([])) // boşsa bir şeyler ekleyeceğiz 
    } else{
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My To Do List</h1>
        </header>
        <Form
        inputText = {inputText}
        setInputText = {setInputText}
        todos = {todos}
        setTodos ={setTodos}
        setStatus ={setStatus}
        />
        <TodoList
        todos = {todos}
        setTodos = {setTodos} //props olarak todoliste gönderdik
        filteredTodos = {filteredTodos}
         />
        
    </div>
  );
}

export default App;
