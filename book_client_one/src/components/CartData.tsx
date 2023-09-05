"use client"
import { useCart } from '@/app/context/CartContext'
import Image from 'next/image'
Image
import React, { useState } from 'react'
const CartData = () => {
  const [totalAmount, setTotalAmount] = useState(0)
    const { cart } = useCart();

  return (
    <div> <ul>
    {cart.map((item, index) => (
      <li key={index}>
        <div className=' flex-wrap w-screen items-center justify-center'>
                <Image src={item.image} alt='Nothing' height={50} width={50}/> 
                <div className='flex flex-col'>
                <span> {item.name}</span>
                {/* <span>{item.rating}</span>
                <span> {item.description}</span>
                <span> Genre :- {item.genre}</span> 
                 <span> Author :- {item.author}</span>
                <span> Type :- {item.type}</span> */}
                <span> Price :-  {item.price}</span>
                </div>
                </div>
      </li>
    ))}
 Total item present Cart :-  {cart.length}
  </ul></div>
  )
}

export default CartData