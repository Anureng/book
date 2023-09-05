"use client"
import Link from 'next/link';
import React from 'react'
import { BsTwitter , BsInstagram , BsLinkedin , BsCart , BsSearch} from 'react-icons/bs';
import AuthenticatedRoute from './AuthenticatedRoute';
import { useCart } from '@/app/context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
  return (
    <div>

    <div className='bg-gray-200 flex items-center justify-evenly p-3'>
        <div className='text-red-600 font-bold text-xl '>
            Reader
        </div>
        <div className='flex space-x-3'>
            <BsTwitter/>
            <BsInstagram/>
            <BsLinkedin/>
        </div>
        <AuthenticatedRoute/>
    </div>

    <div className='flex items-center justify-evenly mt-6' >
    <div className='flex space-x-3'>
        <p>
            <Link href="/">
            Home
            </Link>
            </p>
        <p>
            <Link href="/Book">
            Books
            </Link>
            </p>
        {/* <p>Contact</p> */}
        <p>community</p>
    </div>

    <div className='flex items-center space-x-2'>
        {/* <div className=' hidden sm:visible  bg-gray-200 p-1 items-center rounded-xl space-x-2'>
        <input type="text" placeholder='Search Product...' className='rounded-xl p-1 outline-none' />
        <BsSearch  className=""/>
        </div> */}
        <div  className="bg-red-400 text-white text-xl p-1 ">
<Link href="/cart" className='flex'>
    <BsCart/>
    {cart.length}
</Link>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar