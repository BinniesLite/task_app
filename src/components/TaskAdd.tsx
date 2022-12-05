import { Button, Typography} from '@mui/material';
import { GrAddCircle } from 'react-icons/gr'

interface Prop {
    handleClickForm: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const TaskAdd = ({handleClickForm}: Prop) => {
  return (
    <Button onClick={handleClickForm}  sx={{p: 3, fontColor: 'white', color: 'white', gap: 2, borderColor: 'black', 
      '&hover': {
        borderColor: 'white'
      } }} variant="outlined">
          <GrAddCircle  />
          <Typography >
             Add Task
          </Typography>
          </Button>
  )
}

export default TaskAdd