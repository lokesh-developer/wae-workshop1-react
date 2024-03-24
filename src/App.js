import { useEffect, useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import axios from 'axios';

function App()
{
  const [input, setInput] = useState("")
  const [taskName, setTaskName] = useState([])

  console.log(input)
  useEffect(() =>
  {
    console.log("lokesh")
  }, [input])

  const addTask = async () =>
  {
    try {
      const addData = await axios.post("https://4000-lokeshdevel-waeworkshop-wmkj7h8ck45.ws-us110.gitpod.io/addTask", { name: input })
      console.log(addData, input)
      setTaskName([...taskName, input])
      setInput("")
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    const loadData = async () => {
      let taskss = []
      try {
        const tasks = await axios.get("https://4000-lokeshdevel-waeworkshop-wmkj7h8ck45.ws-us110.gitpod.io/get")
        tasks.data.map((t) => {
          taskss.push({name: t.name, id: t._id, completed: t.completed})
        })
          setTaskName(taskss)
        
  
  
      } catch (error) {
        console.log(error)
      }
    }
    loadData()
  }, [])
  
  return (
    <>
      <div className="box">
        <h2>Task App</h2>
      </div>
      <div className="box task-box">
        <input name="task-name" id="task-name" value={input} onChange={(e) => setInput(e.target.value)} placeholder="New Task" />
        <button id="add-task" onClick={addTask}>Add Task</button>
      </div>
      <Table taskName={taskName} />
    </>
  );
}

export default App;
