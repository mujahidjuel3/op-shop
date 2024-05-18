import ProductCard from '../components/ProductCard'
import Image1 from '../assets/Watch/watch.png'
import Image2 from '../assets/Watch/watch1.png'
import Image3 from '../assets/Watch/watch2.png'
import Image4 from '../assets/Watch/watch3.png'
import Image5 from '../assets/Watch/watch4.png'
import Image6 from '../assets/Watch/watch5.png'
import Image7 from '../assets/Watch/watch6.png'
import Image8 from '../assets/Watch/watch7.png'
import Nav from './Nav'
import Footer from './Footer'

const products = [
  {
    id: "1",
    img: Image1,
    productName: "Smart Watch",
    price: "250.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "2",
    img: Image2,
    productName: "Smart Watch",
    price: "210.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "3",
    img: Image3,
    productName: "Smart Watch",
    price: "290.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "4",
    img: Image4,
    productName: "Smart Watch",
    price: "330.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "5",
    img: Image5,
    productName: "Smart Watch",
    price: "190.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "6",
    img: Image6,
    productName: "Smart Watch",
    price: "220.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "7",
    img: Image7,
    productName: "Smart Watch",
    price: "270.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "8",
    img: Image8,
    productName: "Smart Watch",
    price: "290.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
];

const Watch = () => {
  return (
 <div>
    <Nav />

    <div className="container mx-auto my-16">
      <div className='text-center text-2xl font-serif font-semibold pb-5'>
      <h1 className='border-b-[1px] pb-4 border-b-gray-900'>Mens Product Items</h1>
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

export default Watch;