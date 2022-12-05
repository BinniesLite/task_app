import React, { createContext, useContext, useState } from 'react'
import { Task } from '../types/task';
import { dummy } from '../App';

interface TaskContextType {
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>,
    taskList: Task[],
    handleFinishTask: (id: string, updatedTime: any) => void
}

const TaskContext = createContext({} as TaskContextType);

interface Prop {
    children: React.ReactNode
}

const TaskProvider = ({children}: Prop) => {
    const [taskList, setTaskList] = useState<Task[]>(dummy)
    
    const handleFinishTask = (id: string, updatedTime: any) => {
        setTaskList(taskList.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                done: !item.done,
              }
            }
        
            return item
          }))
    }

    const data : TaskContextType = {
        taskList,
        setTaskList, 
        handleFinishTask
    }

    return <TaskContext.Provider value={data}>
        {children}
    </TaskContext.Provider>
}

export default TaskProvider;

export const useTask = () => useContext(TaskContext); 
