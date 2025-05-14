import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreateTask from './pages/CreateTask'

const App = () => {
  return (
    <Routes>
      <Route path='/tasks' element={<Dashboard />}/>
      <Route path='/tasks/createtask' element={<CreateTask />}/>
    </Routes>
  )
}

export default App