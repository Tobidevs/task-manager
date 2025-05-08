import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreateTask from './pages/CreateTask'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/createtask' element={<CreateTask />}/>
    </Routes>
  )
}

export default App