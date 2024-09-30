import { useState } from 'react'
import './index.css';
import Todo from './Todo';
import Task from './task';

function App() {
  // const [allTodos,setTodos]=useState([])
  // const [NewTitle,setNewTitle]=useState("")
  // const [NewDesc,setNewDesc]=useState("")



  return (
   
      <div className='min-h-screen bg-gray-900'>
      <Todo/>
      </div>
  )
}

export default App
