import React from 'react'
import { Card, CardContent, Typography, Stack, Button } from '@mui/material'
import { Task } from '../types/task'
import { AiFillCheckCircle } from 'react-icons/ai';
import { formatTime } from '../utils/formatTime';
import { useTask } from '../context/task-context';

interface Props {
  task: Task,
  handleSelectTask: (id: string) => void,
  handleFinishTask?: (id: string) => void
}

const TaskDetail = ({task, handleSelectTask, handleFinishTask}: Props) => {
  const {done, taskName, time, id} = task;
  
  
  return (
  <Card 
      sx={{
          borderLeft: task.isChecked ? 'black 10px solid' : '', 
          cursor: 'pointer',
          '&:hover': {
            borderLeft: !task.isChecked ? '#D8D9CF 10px solid' : ''
          },
          }}>
      <CardContent>
        <Stack flexDirection="row" justifyContent="flex-start" gap={2}>
        <Button 
          onClick={() => handleFinishTask(id, 12)}
          sx={{color: done ? 'red' : 'gray', fontSize: '1.4rem', padding: '10px'}}>
            <AiFillCheckCircle /> 
          </Button>
          <Typography
            onClick={() => handleSelectTask(task.id)}
            variant="body1" 
            sx={{
              textDecorationLine: task.done ? 'line-through' : '',
            
            }}
          >
            {taskName || "Demo Task Name"}
          </Typography>
          <Typography 
            variant="subtitle1">
            {done && 
              formatTime(time.hours, time.minutes, time.seconds)}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default TaskDetail