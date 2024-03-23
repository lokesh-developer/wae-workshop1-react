import logo from './logo.svg';
import './App.css';
import { Table } from './components/Table';

function App() {
  const addTask = () => {

  }
  return (
    <>
      <div className="box">
        <h2>Task App</h2>
      </div>
      <div class="box task-box">
        <input name="task-name" id="task-name" onChange={addTask()} placeholder="New Task" />
        <button id="add-task">Add Task</button>
      </div>
      <Table />
      <Table />
      <Table />
    </>
  );
}

export default App;
