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
    console.log('delete',id);
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
