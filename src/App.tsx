import React from 'react'
import { Box } from '@mui/material';
import Approuter from './config/Approuter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



const App = () => {
  return (
    <>
      <Box 
      sx={{backgroundColor: "#9770e6" }}
      >
        <Approuter />
      </Box>
    </>
  )
}

export default App
