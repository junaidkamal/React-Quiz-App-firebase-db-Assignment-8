import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllQuestion from '../pages/AllQuestion'
import AskQuestion from '../pages/AskQuestion'
import Question from '../pages/question'


const Approuter = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<AllQuestion />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
        <Route path="/Question/:id" element={<Question />} />
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default Approuter
