import ProductCard from '../components/ProductCard'
import Image1 from '../assets/Electronics/Laptop/l1.png'
import Image2 from '../assets/Electronics/Laptop/l2.png'
import Image3 from '../assets/Electronics/Laptop/l3.png'
import Image4 from '../assets/Electronics/Laptop/l4.png'
import Image5 from '../assets/Electronics/Mobile/mobile1.png'
import Image6 from '../assets/Electronics/Mobile/mobile2.png'
import Image7 from '../assets/Electronics/Mobile/mobile3.png'
import Image8 from '../assets/Electronics/Mobile/mobile4.png'
import Image9 from '../assets/Electronics/Router/router1.png'
import Image10 from '../assets/Electronics/Router/router2.png'
import Image11 from '../assets/Electronics/Router/router3.png'
import Image12 from '../assets/Electronics/Router/router4.png'
import Image13 from '../assets/Electronics/Speaker/sp1.png'
import Image14 from '../assets/Electronics/Speaker/sp2.png'
import Image15 from '../assets/Electronics/Speaker/sp3.png'
import Image16 from '../assets/Electronics/Speaker/sp4.png'
import Image17 from '../assets/Electronics/Virtual/vr1.png'
import Image18 from '../assets/Electronics/Virtual/vr2.png'
import Image19 from '../assets/Electronics/Virtual/vr3.png'
import Image20 from '../assets/Electronics/Virtual/vr4.png'
import Nav from './Nav'
import Footer from './Footer'


const products = [
  {
    id: "1",
    img: Image1,
    productName: "Laptop",
    price: "680.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "2",
    img: Image2,
    productName: "Laptop",
    price: "680.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "3",
    img: Image3,
    productName: "Laptop",
    price: "680.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "4",
    img: Image4,
    productName: "Laptop",
    price: "680.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "5",
    img: Image5,
    productName: "Mobile",
    price: "999.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "6",
    img: Image6,
    productName: "Mobile",
    price: "999.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "7",
    img: Image7,
    productName: "Mobile",
    price: "999.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "8",
    img: Image8,
    productName: "Mobile",
    price: "999.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "9",
    img: Image9,
    productName: "Router",
    price: "140.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "10",
    img: Image10,
    productName: "Router",
    price: "140.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "11",
    img: Image11,
    productName: "Router",
    price: "140.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "12",
    img: Image12,
    productName: "Router",
    price: "140.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "13",
    img: Image13,
    productName: "Speaker",
    price: "360.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "14",
    img: Image14,
    productName: "Speaker",
    price: "361.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "15",
    img: Image15,
    productName: "Speaker",
    price: "360.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "16",
    img: Image16,
    productName: "Speaker",
    price: "360.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "17",
    img: Image17,
    productName: "Virtual",
    price: "244.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "18",
    img: Image18,
    productName: "Virtual",
    price: "244.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "19",
    img: Image19,
    productName: "Virtual",
    price: "244.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "20",
    img: Image20,
    productName: "Virtual",
    price: "244.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
];

const Electronics = () => {
  return (
  <div>
    <Nav />
    <div className="container mx-auto my-16">
      <div className='text-center text-2xl font-serif font-semibold pb-5'>
      <h1 className='border-b-[1px] pb-4 border-b-gray-900'>Electronics Product Items</h1>
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
};

export default Electronics;