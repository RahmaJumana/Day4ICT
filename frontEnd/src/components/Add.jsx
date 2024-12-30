import React from 'react'
import { TextField } from '@mui/material'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const Add = () => {
  return (
      <div>
          <br/><br/>
          <Typography variant="h6" component="div" > Details
          </Typography>
          <TextField label="name" variant='filled' /><br /><br />
          <TextField label="age" variant='filled' /><br /><br />
          <TextField label="department" variant='filled' /><br /><br />
          <TextField label="salary" variant='filled' /><br /><br />
          <Button variant='contained'>Submit</Button>
      
    </div>
  )
}

export default Add
