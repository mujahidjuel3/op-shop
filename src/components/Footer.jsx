
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa'

 import { Link } from 'react-router-dom'

const MenuLinks = [
    {
        title: "Home",
        link: '/',
    },
    {
        title: "About",
        link: '/about',
    },
    {
        title: "Products",
        link: '/products',
    },
    {
        title: "Others",
        link: '/others',
    },
    {
        title: "Contact",
        link: '/contact',
    },
]

const Footer = () => {
  return (
    <div className='bg-gray-200'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-10">
                <div className='pl-8 px-4'>
                    <a href='#' className=' text-red-600 font-semibold font-serif text-2xl uppercase '>
                        OP-Shop
                    </a>
                    <p className='pt-2'>This Website is a Online E-commerce Shop. You  can visit the website if you want. 
                       Daily essentials can be easily found here. And from here you  can buy products at home. Thank you.</p>
                       <p className='pt-2 mt-4'>Made with love by <span className='text-sm uppercase font-serif font-bold text-green-600'>Mujahid Juel</span></p>
                    <a href='https://www.google.com' className='inline-block hover:scale-95 duration-300 bg-red-600 text-white py-2 px-4 mt-4 text-sm rounded-full'>
                        Visit our Website
                    </a>
                </div>

                <div className='container lg:pt-0 md:pt-0 pt-32'>
                   <div className='md:pl-32 lg:pl-48 pl-8 px-4 pb-48'>
                        <h1 className='text-2xl font-bold sm:text-left text-lime-400 pb-4 underline'> Menu Links</h1>
                        <ul className='space-y-3'>
                           {
                            MenuLinks.map((data, index) => (
                                <li key={index}>
                                    <Link to={data.link} className='text-black hover:text-red-600 duration-300'>
                                        {data.title}
                                    </Link>
                                </li>
                            ))
                           }
                        </ul>
                    </div>
                </div>

                <div className='container lg:pt-0 md:pt-0'>
                    <div className='md:pl-32 lg:pl-48 space-y-3 pl-8 px-4'>
                        <h1 className='text-red-600 font-semibold font-serif text-2xl underline'>Address</h1>
                        <FaLocationArrow  className='text-2xl text-blue-600'/>
                        <p> Mohammadpur, Dhaka, Bangladesh</p>
                        <p>Mobile:+8801727983686</p>
                        <div className='flex pt-4 gap-8'>
                            <a className='hover:scale-150 duration-300 text-2xl text-blue-600' href='https://www.facebook.com/mujahidjuel07?mibextid=ZbWKwL'><FaFacebook /></a> 
                            <a className='hover:scale-150 duration-300 text-2xl text-red-600' href='https://www.instagram.com/md_mujahid_juel?igsh=aHBkczVuNXp3Mjgx'><FaInstagram /></a>
                            <a className='hover:scale-150 duration-300 text-2xl text-blue-600' href='https://www.linkedin.com/in/mujahid-juel'><FaLinkedin /></a>
                            <a className='hover:scale-150 duration-300 text-2xl text-black' href='https://github.com/mujahidjuel3'><FaGithub /></a>
                             
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer