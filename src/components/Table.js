import axios from "axios"
import { useRef } from "react"

export const Table = ({ taskName }) =>
{
  const taskNameRef = useRef()
  const completeTask = async (e) =>
  {
    try {
      const completeIt = await axios.post("https://4000-lokeshdevel-waeworkshop-wmkj7h8ck45.ws-us110.gitpod.io/completeTask", { id: e.target.id })
      e.target.parentElement.parentElement.querySelector('#taskHu').classList.add("completed")
      console.log(e)
      e.target.disabled = true
    } catch (error) {
      console.log(error)
    }
   
  }

  return (
    <div className="box table-box">
      <table>
        <tbody>
          <tr>
            <th>Task Name</th>
            <th>Done</th>
            <th>Delete</th>
          </tr>
          {taskName?.map((t) => (
            <tr>
              <td id="taskHu" className={t?.completed && "completed"} ref={taskNameRef}>{t.name}</td>
              <td><button disabled={t?.completed && true} id={t.id}  onClick={(e) => completeTask(e)} >Complete</button></td>
              <td><button id="delete-task" >Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}