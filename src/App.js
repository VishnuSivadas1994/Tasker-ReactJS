import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist Appointment',
      day: 'Aug 10th at 1:20pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Assignment Due',
      day: 'Aug 17th at 11:59pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Shopping',
      day: 'Aug 8th at 10:00am',
      reminder: false,
    }
  ])

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No tasks to display')}
    </div>
  );
}

export default App;
