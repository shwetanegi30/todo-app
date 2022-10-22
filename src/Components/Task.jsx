import React from "react";
import TaskCard from "./TaskCard";

function Task({ todos, setTodos, filteredTodos, setStatus, clearHandler }) {
  const statusHandler = (e) => {
    setStatus(e.target.textContent);
  };
  return (
    <div className="task--wrapper">
      <div className="task--container">
        {filteredTodos.map((todo, i) => {
          return (
            <TaskCard setTodos={setTodos} todos={todos} todo={todo} key={i} />
          );
        })}
      </div>
      <div className="filter--wrapper">
        <h2 className="items--left">{todos ? todos.length : 0} items left</h2>

        <div className="wrapper-folder">
        <h2 className="items--left-mob">{todos ? todos.length : 0} items left</h2>
        <button onClick={clearHandler} className="clear--btn-mob">
          Clear Completed
        </button>

        </div>

        <div className="filter--links">
          <span className="link-a" onClick={statusHandler}>All</span>
          <span className="dark-blue" onClick={statusHandler}>Active</span>
          <span className="dark-blue" onClick={statusHandler}>Completed</span>
        </div>
        <button onClick={clearHandler} className="clear--btn">
          Clear Completed
        </button>
      </div>
    </div>
    
  );
}
export default Task;
