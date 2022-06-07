import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {routes} from './routes'
import './App.css'
import Frame from './components/Frame/Frame'

function App() {

  return (
    <Frame>
      <div className="App">
        <Routes>
          {
            routes.map(route => (
              // <Route {...route} />
              <Route key={route.key} path={route.path} element={route.element} />
              ))
          }
        </Routes>
      </div>
    </Frame>
  )
}

export default App 
