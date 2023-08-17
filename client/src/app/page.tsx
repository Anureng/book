import Auther from '@/components/Auther'
import BestProduct from '@/components/BestProduct'
import BestSell from '@/components/BestSell'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
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
  </div>
  )
}
