import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
function App() {
  
  return (
   <BrowserRouter>
       <Navbar/>
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/username" element={<Greeting/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:id" element={<ProductDetail/>} />

       </Routes>
   </BrowserRouter>
  )
}

export default App
