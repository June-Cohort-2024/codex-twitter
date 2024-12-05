import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LogIn } from './ScreenComponents/LogIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Wall } from './ScreenComponents/Wall'
import { Error } from './ScreenComponents/Error'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn />}  /> 
          <Route path='/wall' element={  <Wall/> }  />
          <Route path='*' element = {<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
