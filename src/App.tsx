import React, { useState } from 'react'
import './App.css'

import { TaskForm, TaskTimer, TaskList} from './components';
import { Task } from './types/task';
import { useStopwatch } from 'react-timer-hook';

import { Stack } from '@mui/material';

import { useTask } from './context/task-context';

import { v4 as uuidv4 } from 'uuid';


export const dummy = [{
  id: uuidv4(), 
  taskName: 'Working on a react Project', 
  done: true,
  time: {
    hours: 0,
    minutes: 10,
    seconds: 30
  },
  isChecked: false
},
{
  id: uuidv4(),
  taskName: 'Working on a react Project', 
  done: false,
  time: {
    hours: 0,
    minutes: 10,
    seconds: 30
  },
  isChecked: false
},
{
  id: uuidv4(),
  taskName: 'Working on a react Project', 
  done: false,
  time: {
    hours: 0,
    minutes: 10,
    seconds: 30
  },
  isChecked: false
  
}

]

const defaultTime = {
  hours: 0, minutes: 0, seconds: 0
}
function App() {
  const {taskList, setTaskList} = useTask()
  
  // Stop Watch to get the time spent on task
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
  } = useStopwatch({});

  const handleSelectTask = (id: string) => {
    const updatedTask = taskList &&
      taskList.map(task => 
        task.id === id ? {...task, isChecked: true} : {...task, isChecked: false});

    setTaskList(updatedTask);
  }

  const onSubmitTask = (data: any) => {
    const { task } = data
    
    const newTask: Task = { 
      id: uuidv4(),
      taskName: task,
      isChecked: false,
      done: false,
      time: defaultTime
    }

    setTaskList(prev => prev && [...prev, newTask]);
    
  } 

  const handleFinishTask = (id: string) => { 
    const updatedTime = {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }

    // Why don't this change, I do not know
    setTaskList(taskList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: !item.done,
          time: updatedTime
        }
      }
  
      return item
    }))
  }

  return (
    <div className="w-full text-white overflow-y-scroll bg-[#ba4949] h-[100vh] flex justify-center ">
      <div className='m-3 mt-5'>
        <TaskTimer 
          seconds={seconds} 
          minutes={minutes} 
          hours={hours} 
          pause={pause} 
          start={start} 
          isRunning={isRunning} />
        
        <TaskList 
          taskList={taskList} 
          handleSelectTask={handleSelectTask}  
          handleFinishTask={handleFinishTask}
         
        />
      
        <TaskForm 
          onSubmitTask={onSubmitTask} 
        />
      </div>
    </div>
  )
}

export default App
