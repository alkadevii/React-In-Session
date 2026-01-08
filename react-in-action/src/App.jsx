import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'
import HelloImage from './components/HelloImage'
import UserList from './components/UserList'
import ProfileCard from './components/ProfileCard'
import Button from './components/Button'

function App() {
  
  return (
   <div>
    <HelloWorld/>
    <HelloImage/>
    <UserList/>
    <ProfileCard/>
   </div>
  )
}

export default App
