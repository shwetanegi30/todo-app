import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Task from "./Components/Task";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, filteredTodos]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    handleTheme();
  }, [theme]);

  useEffect(() => {
    const themeLocal = JSON.parse(localStorage.getItem("theme"));
    if (themeLocal) {
      setTheme(themeLocal);
    }
  }, []);

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    console.log({ localTodos });
    if (localTodos) {
      setTodos(localTodos);
    } else {
      console.log("error unable to get todos");
    }
  }, []);

  const handleTheme = () => {
    if (theme) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  };

  const filterHandler = () => {
    switch (status) {
      case "Active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const clearHandler = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
    setFilteredTodos(todos);
  };

  return (
    <div className="App">
      <main>
        <Header
          setTodos={setTodos}
          todos={todos}
          setInputValue={setInputValue}
          inputValue={inputValue}
          theme={theme}
          setTheme={setTheme}
        />
        <Task
          filteredTodos={filteredTodos}
          setStatus={setStatus}
          status={status}
          setTodos={setTodos}
          todos={todos}
          clearHandler={clearHandler}
        />

        <footer>
          <p className="footer-line"> Drag and drop to reorder list </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
