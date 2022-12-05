import React from 'react'
import { Task } from '../types/task'
import { Stack, Typography, Divider } from '@mui/material'
import TaskDetail from './TaskDetail';

interface Props {
  taskList: Task[],
  handleSelectTask: (id: string) => void,
  handleFinishTask?: (id: string) => void
}

const TaskList = ({taskList, handleSelectTask, handleFinishTask}: Props) => {
  return (
    <div>
      <Stack my={5} flexDirection="row" justifyContent="space-between">
        <Typography variant="body1">Tasks</Typography>  
        Settings
      </Stack>
      <Divider sx={{my: 2}} />
      <Stack gap={2} flexDirection="column">
        {taskList?.map((task, index) => 
          <TaskDetail 
            key={index} 
            task={task} 
            handleSelectTask={handleSelectTask}
            handleFinishTask={handleFinishTask}
            />
            
            )}
      </Stack>
    </div>
  )
}

export default TaskList