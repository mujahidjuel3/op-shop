
import Footer from '../Footer'
import Nav from '../Nav'

import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='bg-gray-400'>
        <Nav />

        <div className='items-center justify-center text-center text-green-800'>
          <h1 className='p-4 text-3xl font-serif font-semibold'>Product lists</h1>
        </div>
        <ul className='md:flex md:gap-6 lg:gap-16 sm:p-4 md:pl-3 lg:pl-24 ml-10 text-2xl font-serif'>
            <Link to='/mens'>
               <li className='hover:text-red-500 hover:border-b-2 border-slate-900 hover:border-black'>Mens</li>
            </Link>
            <Link to='/womens'>
               <li className='hover:text-red-500 hover:border-b-2 border-slate-900 hover:border-black'>Womens</li>
            </Link>
            <Link to='/kids'>
               <li className='hover:text-red-500 hover:border-b-2 border-slate-900 hover:border-black'>Kids</li>
            </Link>
            <Link to='/shoes'>
               <li className='hover:text-red-500 hover:border-b-2 border-slate-900 hover:border-black'>Shoes</li>
            </Link>
            <Link to='/electronics'>
               <li className='hover:text-red-500 hover:border-b-2 border-slate-900 hover:border-black'>Electronics</li>
            </Link>
            <Link to='/sunglasses'>
               <li className='hover:text-red-500 hover:border-b-2 border-slate-900 hover:border-black'>Sunglasses</li>
            </Link>
            <Link to='/cosmetics'>
               <li className='hover:text-red-500 hover:border-b-2 border-slate-900 hover:border-black'>Cosmetics</li>
            </Link>
            <Link to='/watch'>
               <li className='hover:text-red-500 hover:border-b-2 border-slate-900 hover:border-black'>Watch</li>
            </Link>
        </ul>
      <Footer />
    </div>
  )
}

export default Products