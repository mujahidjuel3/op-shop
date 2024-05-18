import ProductCard from '../components/ProductCard'
import Image1 from '../assets/Shoes/Apex/apex1.png'
import Image2 from '../assets/Shoes/Apex/apex2.png'
import Image3 from '../assets/Shoes/Apex/apex3.png'
import Image4 from '../assets/Shoes/Apex/apex4.png'
import Image5 from '../assets/Shoes/Bata/bata1.png'
import Image6 from '../assets/Shoes/Bata/bata2.png'
import Image7 from '../assets/Shoes/Bata/bata3.png'
import Image8 from '../assets/Shoes/Bata/bata4.png'
import Image9 from '../assets/Shoes/Loto/loto1.png'
import Image10 from '../assets/Shoes/Loto/loto2.png'
import Image11 from '../assets/Shoes/Loto/loto3.png'
import Image12 from '../assets/Shoes/Loto/loto4.png'
import Image13 from '../assets/Shoes/Nikee/nike1.png'
import Image14 from '../assets/Shoes/Nikee/nike2.png'
import Image15 from '../assets/Shoes/Nikee/nike3.png'
import Image16 from '../assets/Shoes/Nikee/nike4.png'
import Nav from './Nav'
import Footer from './Footer'



const products = [
  {
    id: "1",
    img: Image1,
    productName: "Apex",
    price: "46.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "2",
    img: Image2,
    productName: "Apex",
    price: "46.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "3",
    img: Image3,
    productName: "Apex",
    price: "46.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "4",
    img: Image4,
    productName: "Apex",
    price: "46.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "5",
    img: Image5,
    productName: "Bata",
    price: "55.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "6",
    img: Image6,
    productName: "Bata",
    price: "55.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "7",
    img: Image7,
    productName: "Bata",
    price: "55.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "8",
    img: Image8,
    productName: "Bata",
    price: "55.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "9",
    img: Image9,
    productName: "Loto",
    price: "43.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "10",
    img: Image10,
    productName: "Loto",
    price: "43.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "11",
    img: Image11,
    productName: "Loto",
    price: "43.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "12",
    img: Image12,
    productName: "Loto",
    price: "43.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  {
    id: "13",
    img: Image13,
    productName: "Nike",
    price: "75.00",
    ratting: "★★★★★",
    aosDelay: '0',
  },
  {
    id: "14",
    img: Image14,
    productName: "Nike",
    price: "75.00",
    ratting: "★★★",
    aosDelay: '200',
    
  },
  {
    id: "15",
    img: Image15,
    productName: "Nike",
    price: "75.00",
    ratting: "★★★",
    aosDelay: '400',
    
  },
  {
    id: "16",
    img: Image16,
    productName: "Nike",
    price: "75.00",
    ratting: "★★★★",
    aosDelay: '600',
    
  },
  
];

const Shoes = () => {
  return (
    <div>
      <Nav />

    <div className="container mx-auto my-16">
      <div className='text-center text-2xl font-serif font-semibold pb-5'>
      <h1 className='border-b-[1px] pb-4 border-b-gray-900'>Shoes Items</h1>
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

export default Shoes;