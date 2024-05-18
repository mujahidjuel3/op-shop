import ProductCard from '../components/ProductCard'
import Image1 from '../assets/Sunglasses/sun1.png'
import Image2 from '../assets/Sunglasses/sun2.png'
import Image3 from '../assets/Sunglasses/sun3.png'
import Image4 from '../assets/Sunglasses/sun4.png'
import Image5 from '../assets/Sunglasses/sun5.png'
import Image6 from '../assets/Sunglasses/sun6.png'
import Image7 from '../assets/Sunglasses/sun7.png'
import Image8 from '../assets/Sunglasses/sun8.png'
import Image9 from '../assets/Sunglasses/sun9.png'
import Image10 from '../assets/Sunglasses/sun10.png'
import Image11 from '../assets/Sunglasses/sun11.png'
import Image12 from '../assets/Sunglasses/sun12.png'
import Nav from './Nav'
import Footer from './Footer'

const products = [
  {
    id: "1",
    img: Image1,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "2",
    img: Image2,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "3",
    img: Image3,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "4",
    img: Image4,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "5",
    img: Image5,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "6",
    img: Image6,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "7",
    img: Image7,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "8",
    img: Image8,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "9",
    img: Image9,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "10",
    img: Image10,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "11",
    img: Image11,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "12",
    img: Image12,
    productName: "Sunglass",
    price: "54.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  
];

const Sunglasses = () => {
  return (
  <div>
    <Nav />
    <div className="container mx-auto my-16">
      <div className='text-center text-2xl font-serif font-semibold pb-5'>
      <h1 className='border-b-[1px] pb-4 border-b-gray-900'>Sunglass Items</h1>
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

export default Sunglasses;