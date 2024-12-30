import React from 'react'
import {Table,Paper,TableCell,TableContainer,TableHead,TableRow,TableBody} from '@mui/material'

const View = () => {
  return (
      <div>
          <br/><br/>
          <TableContainer component={Paper}>
              <Table border='2'>
                  <TableHead>
                      <TableRow>
                          <TableCell align="center">Name</TableCell>
                          <TableCell align="center">Age</TableCell>
                          <TableCell align="center">Department</TableCell>
                          <TableCell align="center">Salary</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                  </TableBody>
              </Table>
          </TableContainer>
      
    </div>
  )
}

export default View
