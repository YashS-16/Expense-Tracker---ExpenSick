import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Login-Signup/Login.jsx'
import './Components/Login-Signup/Signup.jsx'
import Login from './Components/Login-Signup/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Expense Tracker</h1> 
      <Login />
        
      <Signup />

    </>
  )
}

export default App
