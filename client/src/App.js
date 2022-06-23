import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddItem from './components/addItem'
import Checkout from './components/checkout'
import Home from './components/home'
import Items from './components/items'
import Navbar from './components/navbar'
import { LoginContext } from './context/LoginContext'

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('products'))
      ? JSON.parse(localStorage.getItem('products'))
      : []
  )

  return (
    <LoginContext.Provider value={{ cart, setCart }}>
      <div className='App'>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/browseItems' element={<Items />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/addItems' element={<AddItem></AddItem>} />
            <Route exact path='/checkout' element={<Checkout />} />
          </Routes>
        </Router>
      </div>
    </LoginContext.Provider>
  )
}

export default App
