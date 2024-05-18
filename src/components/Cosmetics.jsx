import ProductCard from '../components/ProductCard'
import Image1 from '../assets/Cosmetics/eyeb1.png'
import Image2 from '../assets/Cosmetics/eyeb2.png'
import Image3 from '../assets/Cosmetics/eyeliner.png'
import Image4 from '../assets/Cosmetics/foundation.png'
import Image5 from '../assets/Cosmetics/lipstick.png'
import Image6 from '../assets/Cosmetics/mekup1.png'
import Image7 from '../assets/Cosmetics/mekup2.png'
import Image8 from '../assets/Cosmetics/mekup3.png'
import Nav from './Nav'
import Footer from './Footer'

const products = [
  {
    id: "1",
    img: Image1,
    productName: "Eyebrush",
    price: "25.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "2",
    img: Image2,
    productName: "Eyebrush",
    price: "21.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "3",
    img: Image3,
    productName: "Eyeliner",
    price: "29.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "4",
    img: Image4,
    productName: "Foundation",
    price: "33.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "5",
    img: Image5,
    productName: "Lipstick",
    price: "19.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "6",
    img: Image6,
    productName: "Mekup",
    price: "62.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "7",
    img: Image7,
    productName: "Mekup",
    price: "67.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "8",
    img: Image8,
    productName: "Mekup",
    price: "99.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
];

const Cosmetics = () => {
  return (
<div>
    <Nav />
    <div className="container mx-auto my-16">
      <div className='text-center text-2xl font-serif font-semibold pb-5'>
      <h1 className='border-b-[1px] pb-4 border-b-gray-900'>Cosmetics Product Items</h1>
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

export default Cosmetics;