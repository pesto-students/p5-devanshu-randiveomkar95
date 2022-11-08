import React, { useState, useEffect } from "react";
import './todo.css';

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
      getList()
  },[])
  const getList = () => {
      if(localStorage.getItem("tasks")){
          const storedList = JSON.parse(localStorage.getItem("tasks"));
          setTasks(storedList);
      }
  }
  const addTask = (e) => {
      if (task) {
          const newTask = { id: new Date().getTime().toString(), title: task, status: 0 };
          setTasks([...tasks, newTask]);
          localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
          setTask("");
      }
  };
  const completeTask = (id) => {
      const storedList = JSON.parse(localStorage.getItem("tasks"));
        storedList[id].status = 1
        localStorage.setItem("tasks", JSON.stringify([...storedList]));
        getList()
  }; 
  return (
    <div className="col-md-12">
        <h1>TODO APP</h1>
        <div className="col-md-6 center">
        <input
          type="text"
          className="form-control"
          placeholder="Add task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn-primary" onClick={addTask}>Add Task</button>
        </div>
        <br />
        <div className="col-md-12 row">
        {tasks.map((task,i) => (
        <div key={task.id}>
            <div className={task.status === 1 ? 'complete' : 'card'} style={{"marginLeft" : "10px", "width" : "12rem"}}>
                <span className={task.status === 1 ? 'task-complete' : ''}>{task.title} </span><br />
                <button className="btn-success" onClick={() =>completeTask(i)}>{task.status === 1 ? 'Completed' : 'Mark as Complete'} </button>
                <br />
            </div>
        </div>
      ))}
          </div>
    </div>
  )
}
export default Todo