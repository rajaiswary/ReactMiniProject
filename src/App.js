import './App.css';
import React,{useState,useRef} from "react";

function App() {
  const [todo,setTodo] = useState([]);

  const [current,setCurrent] = useState("");

  const inputTask = useRef(null);

  function addTask()
  {
    setTodo([...todo,{task : current,completed : false}]);
    inputTask.current.value = "";
    setCurrent("");
    console.log(todo);
  }

  function completeTask(tasktocomplete)
  { 

      setTodo(todo.map((task)=>{
        return (task.task == tasktocomplete?{task : tasktocomplete,completed:true}:{task : task.task,completed:task.completed?true:false});
      }))

  }

  function deleteTask(task)
  {
    setTodo(todo.filter((taskToDelete)=>{return taskToDelete.task !== task}))
  }
     
  return (
    <div className='App'>
      <div>
        <h1>ToDo List</h1>
        <input ref = {inputTask} type = "text" placeholder='Task...' onKeyDown={(event)=>{if(event.keyCode == 13){addTask();}}}  onChange={(event)=>{setCurrent(event.target.value);}}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr/>
      <div>
        <ul>
          
          {todo.map((val,key)=>{
            
            return( 
            <div id = "task">
              <li key={key}>{val.task}</li>
              <button onClick={()=>completeTask(val.task)}>Completed</button>
              <button onClick={()=>deleteTask(val.task)}>X</button>
              {val.completed?(<h1>task completed</h1>):(<h1>Task not completed</h1>)}
            </div>
            )
            
          })}
        </ul>
      </div>
    </div>
   

      
    
  );
}

export default App;
