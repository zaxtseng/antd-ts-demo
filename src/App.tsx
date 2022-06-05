import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from './routes'
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        {
          routes.map(route => (
            <Route {...route}>
              
            </Route>))
        }
      </Routes>
    </div>
  )
}

export default App 
