"use client"
import { useCart } from '@/app/context/CartContext'
import React from 'react'
const CartData = () => {
    const { cart } = useCart();
  return (
    <div> yooo<ul>
    {cart.map((item, index) => (
      <li key={index}>{item.name}</li>
    ))}
    {cart.length}
  </ul></div>
  )
}

export default CartData