import { useState } from 'react'
import './App.css'
import Dashboard from './Dashboard'
function App() {
  return (
    <>
    <div div className="fixed top-0 left-0 w-full h-16 bg-[#6C4B94] flex items-center px-5 text-white font-bold text-xl">
     My Trello board
    </div>
      <Dashboard />
    </>
  )
}

export default App
