import React, { useRef } from 'react'
import { Card, CardContent, Button, CardActions, Typography } from '@mui/material'

import { formatTime } from '../utils/formatTime';

const TaskTimer = ({seconds, minutes, hours, isRunning, start, pause}) => {
  


  return (
  <Card sx={{backdropFilter: "blur(5px)", padding: 12}}>
      <CardContent sx={{ fontSize: '3rem' }}>
        {formatTime(hours, minutes, seconds)}
        <Typography variant={{md: 'h6', xs: 'h1'}}>

        </Typography>
      </CardContent>
      <CardActions sx={{}}>
        {isRunning ? <Button
          onClick={pause}
          fullWidth
          sx={{
            background: 'black', '&:hover': {
              background: 'black'
            },
            paddingY: 1
          }} variant="contained">
          Stop
        </Button> :
          <Button
            onClick={start}
            fullWidth
            sx={{
              background: 'black', '&:hover': {
                background: 'black'
              } , paddingY: 1}} variant="contained">
        Start
      </Button>}

    </CardActions>
    </Card >
  )
}

export default TaskTimer;