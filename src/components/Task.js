import { FaTimes } from 'react-icons/fa'

const Task = ({task,onDelete,onToggle}) => {
  return (
  	// If the reminder is true,change the border to green,else nothing
    <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>onToggle(task.id)} >
    	<h3> { task.text } 
    	<FaTimes style= {{color: 'red'}}
    	 onClick = {()=>{onDelete(task.id)}}
     />  </h3>
    	<p> { task.day } </p>
    </div>
  )
}

export default Task;