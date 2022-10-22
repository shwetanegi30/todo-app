import React from "react";

function TaskCard({ todo, todos, setTodos }) {
  const handleFilter = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const handleCompletion = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="task--card">
      <div
        className={
          todo.completed ? "complete--circle completed" : "complete--circle"
        }
        onClick={handleCompletion}
      >
        <i className="fas fa-check"></i>
      </div>
      <h3 className={todo.completed ? "task completed" : "task"}>
        {todo.text}
      </h3>
      <div className="remove--btn" onClick={handleFilter}>
        <i className="fas fa-times"></i>
      </div>
    </div>
  );
}

export default TaskCard;
