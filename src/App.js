import './App.css';
import './style.css'
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  return (
    <div className="App">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
const Home = () => {
  const [list, setList] = useState([])
  const [init, setInit] = useState()
  const getFromLocal = () => {
    const task = JSON.parse(localStorage.getItem('task'))
    if (task) {
      console.log(task, 'task')
      setList(task)
    }


  }
  useEffect(() => {
    getFromLocal()
  }, [])
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader init={init} list={list} setList={setList} />
        <TodoList list={list} setList={setList} />
        <Form setInit={setInit} list={list} setList={setList} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
