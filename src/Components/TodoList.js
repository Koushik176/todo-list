import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [enteredNewTask, setEnteredNewTask] = useState("");
  const [todoListArray, setTodoListArray] = useState([]);

  const taskChangeHandler = (event) => {
    setEnteredNewTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTodoListArray((prevState) => {
      return [...prevState, enteredNewTask];
    });
    setEnteredNewTask("");
  };

  const deleteTaskHandler = (index) => {
    setTodoListArray((prevList) => {
      const existingTask = prevList[index];
      const updatedList = prevList.filter((list) => list !== existingTask);
      return updatedList;
    });
  };

  return (
    <div className="task__header">
      <h1>TODO LIST</h1>
      <div className="new-task__controls">
        <form onSubmit={submitHandler}>
          <div className="new-task__control">
            <label>New Task</label>
            <input
              type="text"
              value={enteredNewTask}
              onChange={taskChangeHandler}
            />
            <div className="new-task__actions">
              <button type="submit">add Task</button>
            </div>
          </div>
        </form>
      </div>
      <div className="task-list__controls">
        <ul>
          {todoListArray.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTaskHandler(index)}>
                Delete Task
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoList;
