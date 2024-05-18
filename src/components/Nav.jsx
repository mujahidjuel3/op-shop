import React, { useState } from "react"
import {RxHamburgerMenu} from 'react-icons/rx'
import { FaSearch } from "react-icons/fa"
import { FaCartPlus } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"

import {Link} from 'react-router-dom'
import { useCart } from '../components/CartFunction';
import NavbarCart from "../components/NavberCart"

const Nav = () => {
   
   const [nav, setNav] = useState(false)

   const handleClick = () => setNav(!nav)


  return (
    <nav className="flex justify-between p-5 bg-slate-300 items-center border-b">
            <span className='md:text-3xl font-serif text-green-950 font-bold text-2xl'>OP-Shop..</span>
        
        <ul className='md:flex hidden gap-8 ml-10 text-[18px]'>
            <Link to='/'>
               <li className='hover:text-green-500  hover:border-b-2 border-slate-900 hover:border-green-500'>Home</li>
            </Link>
            <Link to='/about'>
               <li className='hover:text-green-500  hover:border-b-2 border-slate-900 hover:border-green-500'>About</li>
            </Link>
            <Link to='/products'>
               <li className='hover:text-green-500  hover:border-b-2 border-slate-900 hover:border-green-500'>Products</li>
            </Link>
            <Link to='/others'>
               <li className='hover:text-green-500  hover:border-b-2 border-slate-900 hover:border-green-500'>Others</li>
            </Link>
            <Link to='/contact'>
               <li className='hover:text-green-500  hover:border-b-2 border-slate-900 hover:border-green-500'>Contact</li>
            </Link>
         </ul>
         <div className="flex items-center gap-x-5">
           <div className="relative w-48">
            <span className="relative md:absolute inset-y-0  left-0 flex items-center pl-2">
            <button  className="pl-36 focus:outline-none absolute md:text-black"><FaSearch /></button></span>
            <input type='text' placeholder="Search"
              className="w-full px-4 py-1 pl-3 rounded-full shadow outline-none hidden md:block" />
           </div>
         </div>
         <button className="sm:pr-10 pr-5 relative">
         
         <div className="w-4 h-4 text-white rounded-full absolute bottom-4 sm:right-8 right-3 flex text-xs items-center justify-center">
         <NavbarCart />
         </div>
         </button>
         <div className="md:hidden z-10" onClick={handleClick}>
         {nav ? <FaTimes size={25} color="white"/> : <RxHamburgerMenu size={25}/>}
        </div>
        <ul className={`${
         nav
         ? 'text-white opacity-100 transform translate-x-0'
         : 'opacity-0 transform -translate-y-full'}
         absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2x`}
         onClick={() => setNav(false)}>
            <Link to='/'>
               <li className='hover:text-green-500  hover:border-b-2 p-2 border-slate-900 hover:border-green-500'>Home</li>
            </Link>
            <Link to='/about'>
               <li className='hover:text-green-500  hover:border-b-2 p-2 border-slate-900 hover:border-green-500'>About</li>
            </Link>
            <Link to='/products'>
               <li className='hover:text-green-500  hover:border-b-2 p-2 border-slate-900 hover:border-green-500'>Products</li>
            </Link>
            <Link to='/others'>
               <li className='hover:text-green-500  hover:border-b-2 p-2 border-slate-900 hover:border-green-500'>Others</li>
            </Link>
            <Link to='/contact'>
               <li className='hover:text-green-500  hover:border-b-2 p-2 border-slate-900 hover:border-green-500'>Contact</li>
            </Link>
        </ul>
         
    </nav>
  )
}

export default Nav