import Nav from "../Nav"
import Juel from '../../assets/Juel/juel.jpeg'
import Footer from '../Footer'

const About = () => {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 sm:grid-cols-2  bg-slate-600 rounded-xl">
        <div className="pl-7 sm:pl-1">
        <img src={Juel} alt="" className="h-[430px] w-[430px] rounded-full p-2 lg:p-0 md:p-5"/>
        </div>
        <div className="pl-24">
        <h1 className="text-3xl text-white pt-5 font-serif font-bold">Md.Mujahid Juel</h1>
        <h3 className="pt-2 text-xs font-serif font-semibold text-white">CEO</h3>
        <h2 className="text-xl text-white font-serif border-b-4 border-b-stone-200">at OP-Shop</h2>
        <p className="text-xl text-white pt-5 pb-6 sm:pr-10 pr-10 text-justify font-serif">This website is an online e-commerce shop.  Boys, girls and kids clothes are available here.  Also available are shoes, sunglasses available. 
         Women's cosmetics are available, electronics products like mobile laptops etc are available.  A variety of other products are also available.  
         This is a trustworthy website.  If you want, you can pay online without wasting time and order from home.  And after ordering, you will receive the product in a certain time. Thank you, be well.
        </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About