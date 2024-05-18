import Nav from '../Nav'

import ProductCard from '../ProductCard'
import Image1 from '../../assets/Others/ac.png'
import Image2 from '../../assets/Others/bag.png'
import Image3 from '../../assets/Others/bds.png'
import Image4 from '../../assets/Others/fan.png'
import Image5 from '../../assets/Others/headphone.png'
import Image6 from '../../assets/Others/ipad.png'
import Image7 from '../../assets/Others/ips.png'
import Image8 from '../../assets/Others/iron.png'
import Image9 from '../../assets/Others/keyboard.png'
import Image10 from '../../assets/Others/lages.png'
import Image11 from '../../assets/Others/light.png'
import Image12 from '../../assets/Others/mouse.png'
import Image13 from '../../assets/Others/sampo.png'
import Image14 from '../../assets/Others/spray.png'
import Image15 from '../../assets/Others/tv.png'
import Image16 from '../../assets/Others/wallet.png'
import Footer from '../Footer'

const products = [
  {
    id: "1",
    img: Image1,
    productName: "AC",
    price: "546.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "2",
    img: Image2,
    productName: "Bag",
    price: "48.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "3",
    img: Image3,
    productName: "FOG",
    price: "460.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "4",
    img: Image4,
    productName: "Fan",
    price: "246.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "5",
    img: Image5,
    productName: "Headphone",
    price: "255.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "6",
    img: Image6,
    productName: "I-pad",
    price: "655.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "7",
    img: Image7,
    productName: "Ips",
    price: "255.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "8",
    img: Image8,
    productName: "Iron",
    price: "105.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "9",
    img: Image9,
    productName: "Keyboard",
    price: "83.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "10",
    img: Image10,
    productName: "Lagez",
    price: "243.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "11",
    img: Image11,
    productName: "Light",
    price: "31.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "12",
    img: Image12,
    productName: "Mouse",
    price: "93.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "13",
    img: Image13,
    productName: "Sampo",
    price: "75.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "14",
    img: Image14,
    productName: "Room Spray",
    price: "97.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "15",
    img: Image15,
    productName: "TV",
    price: "675.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "16",
    img: Image16,
    productName: "Wallet",
    price: "63.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  
];


const Others = () => {
  return (
   <div>
    <Nav />
    <div className="container mx-auto my-16">
      <div className='text-center text-2xl font-serif font-semibold pb-5'>
      <h1 className='border-b-[1px] pb-4 border-b-gray-900'>Another Products Items</h1>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div data-aos='fade-up'
          data-aos-delay={product.aosDelay}>
          <ProductCard 
          key={index}
          id={product.id}
          img={product.img}
          productName={product.productName}
          ratting={product.ratting}
          price={product.price}
        />
        </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
  );
  
}

export default Others