import React from 'react'
import './App.css'
import Form from './component/Form'
import Tasks from './component/Tasks'

const App = () => {
  return (
    <div className='app'>
      <Form/>
      <Tasks/>
    </div>
  )
}

export default App