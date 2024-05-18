import ProductCard from '../components/ProductCard'
import Image1 from '../assets/Womens/Shirt/ws1.png'
import Image2 from '../assets/Womens/Shirt/ws2.png'
import Image3 from '../assets/Womens/Shirt/ws3.png'
import Image4 from '../assets/Womens/Shirt/ws4.png'
import Image5 from '../assets/Womens/Pant/wp1.png'
import Image6 from '../assets/Womens/Pant/wp2.png'
import Image7 from '../assets/Womens/Pant/wp3.png'
import Image8 from '../assets/Womens/Pant/wp4.png'
import Image9 from '../assets/Womens/T-shirt/wts1.png'
import Image10 from '../assets/Womens/T-shirt/wts2.png'
import Image11 from '../assets/Womens/T-shirt/wts3.png'
import Image12 from '../assets/Womens/T-shirt/wts4.png'
import Image13 from '../assets/Womens/T-shirt/wts5.png'
import Image14 from '../assets/Womens/T-shirt/wts6.png'
import Image15 from '../assets/Womens/T-shirt/wts7.png'
import Image16 from '../assets/Womens/T-shirt/wts8.png'
import Image17 from '../assets/Womens/Threepic/wtp1.png'
import Image18 from '../assets/Womens/Threepic/wtp2.png'
import Image19 from '../assets/Womens/Threepic/wtp3.png'
import Image20 from '../assets/Womens/Threepic/wtp4.png'
import Image21 from '../assets/Womens/Threepic/wtp5.png'
import Image22 from '../assets/Womens/Threepic/wtp6.png'
import Image23 from '../assets/Womens/Threepic/wtp7.png'
import Image24 from '../assets/Womens/Threepic/wtp8.png'
import Image25 from '../assets/Womens/Threepic/wtp9.png'
import Image26 from '../assets/Womens/Threepic/wtp10.png'
import Image27 from '../assets/Womens/Threepic/wtp11.png'
import Image28 from '../assets/Womens/Threepic/wtp12.png'
import Footer from './Footer'
import Nav from './Nav'

const products = [
  {
    id: "1",
    img: Image1,
    productName: "Shirt",
    price: "44.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "2",
    img: Image2,
    productName: "Shirt",
    price: "44.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "3",
    img: Image3,
    productName: "Shirt",
    price: "44.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "4",
    img: Image4,
    productName: "Shirt",
    price: "44.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "5",
    img: Image5,
    productName: "Jinse",
    price: "59.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "6",
    img: Image6,
    productName: "Jinse",
    price: "59.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "7",
    img: Image7,
    productName: "Jinse",
    price: "59.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "8",
    img: Image8,
    productName: "Jinse",
    price: "59.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "9",
    img: Image9,
    productName: "T-shirt",
    price: "34.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "10",
    img: Image10,
    productName: "T-shirt",
    price: "34.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "11",
    img: Image11,
    productName: "T-shirt",
    price: "34.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "12",
    img: Image12,
    productName: "T-shirt",
    price: "34.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "13",
    img: Image13,
    productName: "T-shirt",
    price: "34.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "14",
    img: Image14,
    productName: "T-shirt",
    price: "34.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "15",
    img: Image15,
    productName: "T-shirt",
    price: "34.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "16",
    img: Image16,
    productName: "T-shirt",
    price: "34.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "17",
    img: Image17,
    productName: "Threepeace",
    price: "44.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "18",
    img: Image18,
    productName: "Threepeace",
    price: "44.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "19",
    img: Image19,
    productName: "Threepeace",
    price: "44.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "20",
    img: Image20,
    productName: "Threepeace",
    price: "44.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "21",
    img: Image21,
    productName: "Threepeace",
    price: "59.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "22",
    img: Image22,
    productName: "Threepeace",
    price: "59.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "23",
    img: Image23,
    productName: "Threepeace",
    price: "59.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "24",
    img: Image24,
    productName: "Threepeace",
    price: "59.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "25",
    img: Image25,
    productName: "Threepeace",
    price: "34.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "26",
    img: Image26,
    productName: "Threepeace",
    price: "34.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "27",
    img: Image27,
    productName: "Threepeace",
    price: "34.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "28",
    img: Image28,
    productName: "Threepeace",
    price: "34.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  
];

const Womens = () => {
  return (
  <div>
    <Nav />
    <div className="container mx-auto my-16">
      <div className='text-center text-2xl font-serif font-semibold pb-5'>
      <h1 className='border-b-[1px] pb-4 border-b-gray-900'>Womens Product Items</h1>
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

export default Womens;