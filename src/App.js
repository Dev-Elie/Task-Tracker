import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
    const [tasks, setTasks] = useState(
        [{
                id: 1,
                text: 'Doctors appointment',
                day: 'Feb 5th at 2:30pm',
                reminder: true,
            },

            {
                id: 2,
                text: 'Meeting with Family',
                day: 'Feb 6th at 7:30pm',
                reminder: true,
            },

            {
                id: 3,
                text: 'Food Shopping',
                day: 'Feb 5th at 2:30pm',
                reminder: false,
            }
        ]

    );

    // Delete Tasks
    // 
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
    // Set reminder

    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task,
                    reminder:
                        !task.reminder
                } : task

            ))
    }
    return (
        <div className="container">
      <AddTask />
      <Header title = {'Task Tracker'} />
      {tasks.length > 0 ? (<Tasks tasks= {tasks} onDelete = {deleteTask} onToggle={toggleReminder} />):('No tasks yet')}
    </div>

    );
}

export default App;