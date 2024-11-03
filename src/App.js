import { useState } from 'react';
import './App.css';
import InputContainer from './components/InputContainer';
import TodoContainer from './components/TodoContainer';

function App() {

  const [inputVal, setInputVal] = useState("");
  const [toDos, setToDos] = useState([]);

  function writeToDo(e) {
    setInputVal(e.target.value);
  }

  function addToDo() {
    if (inputVal !== "") {
      setToDos((prevToDos) => [...prevToDos, inputVal]);
      setInputVal("");
    }
  }

  function delToDo(toDoIndex) {
    setToDos((prevToDos) =>
      prevToDos.filter((prevToDos, prevToDosIndex) => {
        return prevToDosIndex != toDoIndex;
      })
    );
  }

  return (
    <main>
      <h1>To Do List App</h1>
      <InputContainer inputVal={inputVal} writeToDo={writeToDo} addToDo={addToDo} />
      <TodoContainer toDos={toDos} delToDo={delToDo} />
    </main>
  )
}

export default App;
