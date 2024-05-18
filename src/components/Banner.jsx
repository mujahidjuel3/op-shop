
const Banner = ({data}) => {
  return (
    <div className='min-h-[340px] flex justify-center items-center py-12'>
      <div className='container'>
        <div className=' grid bg-blue-500 grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>

            <div className='p-6 sm:p-8'>
              <p data-aos='slide-right' className='text-sm'>{data.discount}</p>
              <h1 data-aos='zoom-out' className='uppercase text-4xl text-red-700/90 font-serif lg:text-7xl'>{data.title}</h1>
              <p data-aos='fade-up' className='text-sm'>{data.date}</p>
            </div>
              
             <div data-aos='zoom-in'>
              <img src={data.image} alt='' className='w-full' />
             </div>
            
             <div className='flex flex-col justify-center gap-4 p-10 sm:p-6'>
                <h1 data-aos='zoom-out' className='text-4xl text-white font-bold sm:m-2 font-serif lg:text-7xl'>{data.title2}</h1>
              </div> 
        
              
        </div>
      </div>
    </div>
  )
}

export default Banner