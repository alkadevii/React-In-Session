import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'
import HelloImage from './components/HelloImage'
import Greeting from './components/Greeting'
import Login from './components/Login'
import Register from './components/Register'
import ProductCardList from './components/ProductList'
import Parent from './components/Parent'

function App() {
  
  return (
   <div>
    <Parent/>
   </div>
  )
}

export default App
