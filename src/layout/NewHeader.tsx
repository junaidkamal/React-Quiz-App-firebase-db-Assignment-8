import React from 'react'
import NewButton from '../components/NewButton'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const NewHeader = () => {
    const navigate = useNavigate()
  return (
    <>
      <Box className="bg-success text-dark">
        <Box className="container py-5 d-flex align-items-center">
            <h1 className="text-white">Ques</h1>
            <NewButton onClick={() => navigate('/AskQuestion')}
            label="Ask Question"
            />
        </Box>

      </Box>
    </>
  )
}

export default NewHeader;
