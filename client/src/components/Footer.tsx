import React from 'react'
import { BsTwitter , BsInstagram , BsLinkedin , BsCart , BsSearch} from 'react-icons/bs';
const Footer = () => {
  return (
    <div>
        <div className='flex list-none items-center justify-evenly space-x-7'>
            <div>
                <li className='text-red-600 font-bold font-serif'>Company</li>
                <li>About Us</li>
                <li>Carrer</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </div>
            <div>
                <li className='text-red-600 font-bold font-serif'>Policies</li>
                <li>Privacy Policies</li>
                <li>Term of Use</li>
                <li>Secure Shopping</li>
                <li>Copyright Policy</li>
            </div>
            <div>
                <li className='text-red-600 font-bold font-serif'>Help</li>
                <li>Payment</li>
                <li>Shipping</li>
                <li>Return</li>
                <li>FAQ</li>
            </div>
            <div>
                <li className='text-red-600 font-bold font-serif'>Misc</li>
                <li>Affiliate</li>
                <li>Sitemap</li>
            </div>
            <div></div>
        </div>
        <div className='flex space-x-3 p-4 text-2xl items-center justify-center'>
            <BsInstagram/>
            <BsTwitter/>
            <BsLinkedin/>
        </div>
        <div className='p-2'>
        <hr  className='border-black p-2'/>
            <p className='flex items-center justify-center text-red-600 text-xl font-bold'>All rights reserved to anurag Sidhu</p>
        </div>
    </div>
  )
}

export default Footer