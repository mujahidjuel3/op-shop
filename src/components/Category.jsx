import React from 'react'
import Img1 from '../assets/Mans/Shirt/ms1.png'
import Img2 from '../assets/Womens/T-shirt/wts3.png'
import Img3 from '../assets/Kids/Shirt/ks1.png'
import Img4 from '../assets/Electronics/Laptop/l1.png'
import Img5 from '../assets/Cosmetics/lipstick.png'
import Img6 from '../assets/Sunglasses/sun1.png'
import Img7 from '../assets/Shoes/shoes.png'
import Img8 from '../assets/Watch/watch1.png'
import { Link } from 'react-router-dom'

    
const Category = () => {
  return (
    <div >
        <h1 className='items-center text-center text-4xl font-mono text-red-500 pt-5'>Products Categorys</h1>
        <p className='border-b-2 border-b-slate-950 pt-3 '></p>
        
        
    <div className='flex items-center justify-center min-h-screen container mx-auto pt-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div data-aos='zoom-out' data-aos-duration='800' className='card bg-gray-300'>
                <div className='p-3 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={Img1} alt='' className='h-[300px] w-full' />
                    </div>
                    <h5 className='text-2xl md:text-3xl font-serif mt-3'>Mens</h5>
                    <p className='text-slate-500 text-lg mt-3'>This Product is very Expensive. You want to 
                    <span className='font-semibold uppercase text-red-500'> Buy</span> a Product.</p>
                    <Link to='/mens' className='text-center bg-gray-800 font-semibold py-1 mt-4 text-xl
                      font-sans rounded hover:bg-lime-500 focus:scale-95 text-white transition-all duration-200 ease-out'>View All
                    </Link>
                    
                </div>
            </div>

            <div data-aos='zoom-out' data-aos-duration='800' className='card bg-lime-100'>
                <div className='p-3 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={Img2} alt=''  className='h-[300px] w-full'/>
                    </div>
                    <h5 className='text-2xl md:text-3xl font-serif mt-3'>Womens</h5>
                    <p className='text-slate-500 text-lg mt-3'>This Product is very Expensive. You want to 
                    <span className='font-semibold uppercase text-red-500'> Buy</span> a Product.</p>
                    <Link to='/womens' className='text-center bg-gray-800 font-semibold py-1 mt-4 text-xl
                      font-sans rounded hover:bg-lime-500 focus:scale-95 text-white transition-all duration-200 ease-out'>View All
                    </Link>
                    
                </div>
            </div>

            <div data-aos='zoom-out' data-aos-duration='800' className='card bg-red-100'>
                <div className='p-3 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={Img3} alt='' className='h-[300px] w-full'/>
                    </div>
                    <h5 className='text-2xl md:text-3xl font-serif mt-3'>Kids</h5>
                    <p className='text-slate-500 text-lg mt-3'>This Product is very Expensive. You want to 
                    <span className='font-semibold uppercase text-red-500'> Buy</span> a Product.</p>
                    <Link to='/kids' className='text-center bg-gray-800 font-semibold py-1 mt-4 text-xl
                      font-sans rounded hover:bg-lime-500 focus:scale-95 text-white transition-all duration-200 ease-out'>View All
                    </Link>
                    
                </div>
            </div>

            <div data-aos='zoom-out' data-aos-duration='800' className='card bg-blue-100'>
                <div className='p-3 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={Img4} alt='' className='h-[300px] w-full'/>
                    </div>
                    <h5 className='text-2xl md:text-3xl font-serif mt-3'>Electronics</h5>
                    <p className='text-slate-500 text-lg mt-3'>This Product is very Expensive. You want to 
                    <span className='font-semibold uppercase text-red-500'> Buy</span> a Product.</p>
                    <Link to='/electronics' className='text-center bg-gray-800 font-semibold py-1 mt-4 text-xl
                      font-sans rounded hover:bg-lime-500 focus:scale-95 text-white transition-all duration-200 ease-out'>View All
                    </Link>
                    
                </div>
            </div>

            <div data-aos='zoom-out' data-aos-duration='800' className='card bg-green-100'>
                <div className='p-3 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={Img5} alt='' className='h-[300px] w-full'/>
                    </div>
                    <h5 className='text-2xl md:text-3xl font-serif mt-3'>Cosmetics</h5>
                    <p className='text-slate-500 text-lg mt-3'>This Product is very Expensive. You want to 
                    <span className='font-semibold uppercase text-red-500'> Buy</span> a Product.</p>
                    <Link to='/cosmetics' className='text-center bg-gray-800 font-semibold py-1 mt-4 text-xl
                      font-sans rounded hover:bg-lime-500 focus:scale-95 text-white transition-all duration-200 ease-out'>View All
                    </Link>
                    
                </div>
            </div>

            <div data-aos='zoom-out' className='card bg-yellow-100'>
                <div className='p-3 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={Img6} alt='' className='h-[300px] w-full'/>
                    </div>
                    <h5 className='text-2xl md:text-3xl font-serif mt-3'>Sunglasses</h5>
                    <p className='text-slate-500 text-lg mt-3'>This Product is very Expensive. You want to 
                    <span className='font-semibold uppercase text-red-500'> Buy</span> a Product.</p>
                    <Link to='/sunglasses' className='text-center bg-gray-800 font-semibold py-1 mt-4 text-xl
                      font-sans rounded hover:bg-lime-500 focus:scale-95 text-white transition-all duration-200 ease-out'>View All
                    </Link>
                    
                </div>
            </div>

            <div data-aos='zoom-out' data-aos-duration='800' className='card bg-indigo-100'>
                <div className='p-3 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={Img7} alt='' className='h-[300px] w-full'/>
                    </div>
                    <h5 className='text-2xl md:text-3xl font-serif mt-3'>Shoes</h5>
                    <p className='text-slate-500 text-lg mt-3'>This Product is very Expensive. You want to 
                    <span className='font-semibold uppercase text-red-500'> Buy</span> a Product.</p>
                    <Link to='/shoes' className='text-center bg-gray-800 font-semibold py-1 mt-4 text-xl
                      font-sans rounded hover:bg-lime-500 focus:scale-95 text-white transition-all duration-200 ease-out'>View All
                    </Link>
                    
                </div>
            </div>

            <div data-aos='zoom-out' data-aos-duration='800' className='card bg-emerald-100'>
                <div className='p-3 flex flex-col'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={Img8} alt='' className='h-[300px] w-full'/>
                    </div>
                    <h5 className='text-2xl md:text-3xl font-serif mt-3'>Watch</h5>
                    <p className='text-slate-500 text-lg mt-3'>This Product is very Expensive. You want to 
                    <span className='font-semibold uppercase text-red-500'> Buy</span> a Product.</p>
                    <Link to='/watch' className='text-center bg-gray-800 font-semibold py-1 mt-4 text-xl
                      font-sans rounded hover:bg-lime-500 focus:scale-95 text-white transition-all duration-200 ease-out'>View All
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Category