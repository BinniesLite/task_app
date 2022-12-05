import React, {useState} from 'react'
import TaskAdd from './TaskAdd'
import { Popover, Stack, TextField, Card, CardContent, CardActions, Button } from '@mui/material';
import {useForm, Controller} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  onSubmitTask: (data: any) => void
}

const TaskForm = ({onSubmitTask}: Props) => {
  
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const {handleSubmit, control } = useForm()


  const handleClickForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl)

  return (
    <div className='my-5 w-full'>
        <TaskAdd handleClickForm={handleClickForm}  />
        <Popover
          sx={{cursor: 'pointer'}}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          >
          <Card component="form" onSubmit={handleSubmit(onSubmitTask)} sx={{padding: 4 }}>
            <CardContent>
              <Controller 
                name="task"
                control={control}
                render={({ field }) => 
                <TextField
                  size="medium"
                  label="Add Task here" 
                  {...field} />}
              />
            </CardContent>
            <CardActions>
              <Button type="submit">Add</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </CardActions>
          </Card>
        </Popover>

    </div>
  )
}

export default TaskForm