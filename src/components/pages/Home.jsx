import Nav from '../Nav'
import Banner from '../Banner'
import Hero from '../Hero'
import Category from '../Category'
import Services from '../Services'
import Footer from '../Footer'
import Sunglass from '../../assets/Sunglasses/sun1.png'
//import Api from '../Api'
//import Fetch from '../Fetch'

const BannerData = 
   {
    discount: '30% OFF',
    title: 'Smart Sunglass',
    date:'26 April 25 May',
    image: Sunglass,
    title2:'Products of the Year',
  };

const Home = () => {
  return (
    <div>
    <Nav />
    <Banner data={BannerData}/>
    <Hero />
    <Category />
    <Services />
    <Footer />
    </div>
  )
}

export default Home