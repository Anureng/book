import Auther from '@/components/Auther'
import BestProduct from '@/components/BestProduct'
import BestSell from '@/components/BestSell'
import CartData from '@/components/CartData'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LoginData from '@/components/LoginData'
import Navbar from '@/components/Navbar'
import ProductList from '@/components/ProductList'
import Image from 'next/image'

export default function Home() {
  return (
  <div>
    <Navbar/>
    <Header/>
    <BestSell/>
    <BestProduct/>
    <Auther/>
    <Footer/>
    {/* <CartData/> */}
    {/* <br /><br />
    <ProductList/>
    <LoginData/> */}
  </div>
  )
}
