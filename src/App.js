import { useState } from "react"
import Header from './components/Header' 
import Tasks from './components/Tasks'
import Addtask from './components/Addtask'

const App = () => {

  const [tasks, setTasks] = useState(

    [

        {id: 1,
        text: 'Doctors Appointment',
        day:'Feb 5th at 2:30pm',
        reminder: true,
        
        },
        
        {id: 1,
            text: 'Meeting at School',
            day:'Feb 6th at 1:30pm',
            reminder: true,
            
            },
        
            {id: 1,
                text: 'Food Shopping',
                day:'Feb 5th at 2:30pm',
                reminder: false,
                
                }
        
        ]
)

//Delete Task

const deleteTask = (id) => {

  setTasks(tasks.filter((task) => task.id !==id))
}


//Toggle reminder

const toggleReminder = (id) =>{
setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task
)
)
}

  return (
    <div className ="container">
      < Header />

      <Addtask />
     { <Tasks tasks={tasks} onDelete={deleteTask}
     onToggle = {toggleReminder}
     
     />}
    </div>
  )
}

export default App
 