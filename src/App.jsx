import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from './components/pages/Products'
import Others from './components/pages/Others'
import Contact from './components/pages/Contact'
import Mens from './components/Mens'
import Womens from './components/Womens'
import Kids from './components/Kids'
import Shoes from './components/Shoes'
import Electronics from './components/Electronics'
import Sunglasses from './components/Sunglasses'
import Cosmetics from './components/Cosmetics'
import Watch from './components/Watch'
import { CartProvider } from './components/CartFunction';
import AOS from 'aos'
import 'aos/dist/aos.css'

 

const App = () => {

  React.useEffect(() => {
    AOS.init(
      {
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
      }
    )
    AOS.refresh();
  }, [])
 

  return (
    <BrowserRouter> 
    <CartProvider>
    <div className="bg-white"> 
     <Routes>
       <Route path='/' element = {<Home/>} />
       <Route path='/about' element = {<About/>} />
       <Route path='/products' element = {<Products/>} />
       <Route path='/others' element = {<Others/>} />
       <Route path='/contact' element = {<Contact/>} />
       <Route path='/mens' element = {<Mens/>} />
       <Route path='/womens' element = {<Womens/>} />
       <Route path='/kids' element = {<Kids/>} />
       <Route path='/shoes' element = {<Shoes/>} />
       <Route path='/electronics' element = {<Electronics/>} />
       <Route path='/sunglasses' element = {<Sunglasses/>} />
       <Route path='/cosmetics' element = {<Cosmetics/>} />
       <Route path='/watch' element = {<Watch/>} />
     </Routes>
    </div>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App