
import Slider from "react-slick"

import MShirt from '../assets/Mans/Shirt/ms1.png'
import WJinse from '../assets/Womens/T-shirt/wts3.png'
import Kids from '../assets/Kids/Shirt/ks1.png'
import Electronics from '../assets/Electronics/Laptop/l1.png'
import Cosmetics from '../assets/Cosmetics/lipstick.png'
import Sunglass from '../assets/Sunglasses/sun1.png'
import Shoes from '../assets/Shoes/shoes.png'
import Watch from '../assets/Watch/watch1.png'

const HeroData = [
    {
        id: 1,
        img: MShirt,
        title: 'M-Shirt',
    },
    {
        id: 2,
        img: WJinse,
        title: 'W-Jinse',
    },
    {
        id: 3,
        img: Kids,
        title: 'Kids',
    },
    {
        id: 4,
        img: Electronics,
        title: 'Laptop',
    },
    {
        id: 5,
        img: Cosmetics,
        title: 'Lipstic',
    },
    {
        id: 6,
        img: Sunglass,
        title: 'Sunglass',
    },
    {
        id: 7,
        img: Shoes,
        title: 'Shoes',
    },
    {
        id: 8,
        img: Watch,
        title: 'Watch',
    },
]


const Hero = () => {

    const settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    }
  return (
    <div className='container md:pl-16'>
         <div className='overflow-hidden rounded-3xl min-h-[450px] sm:min-h-[550px] hero-bg-color flex justify-center items-center'>
            <div className='container pb-8 sm:pb-0 '>
              <Slider {...settings}>
                {
                    HeroData.map((data)=>(
                        <div key={data.id} className=''>
                               <div className='grid grid-cols-1 sm:grid-cols-2'>
                                  <div className='flex flex-col justify-center pt-10'>
                                     <h1 data-aos='zoom-out'
                                     data-aos-duration='500'
                                     data-aos-once='true' className='font-bold text-5xl uppercase underline text-red-600 items-start pt-2 pl-9 m-3 font-serif'>{data.title}</h1>
                                  </div>
                                  <div data-aos='zoom-in' data-aos-once='true'>
                                  <img src={data.img} alt='' className='h-[300px] w-[400px] sm:h-[450px]  sm:scale-105 lg:scale-110
                                   mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]'/>
                                   </div>
                               </div>
                        </div>
                    ))
                }
              </Slider>
            </div>
        </div>
    </div>
  )
}

export default Hero