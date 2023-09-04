"use client"
import { useCart } from '@/app/context/CartContext'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RemoveCart = () => {
    const {removeFromCart} = useCart()
    const [getBookData, setGetBookData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    axios.get("http://localhost:8080/api/allbooks")
    .then((response)=>{
        setGetBookData(response.data)
        console.log(response.data);
   setLoading(false)
    })
    .catch((error) => console.log(error));
}, [])
  return (
    <div>
           <ul>
          {getBookData?.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() =>removeFromCart (product)}>Remove to Cart</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default RemoveCart