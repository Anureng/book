"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = ({params}:any) => {
    const [idData, setIdData] = useState("")
    const [allData, setAllData] = useState("")
    useEffect(() => {
        axios.get(`http://localhost:8080/api/getBookId/${params.id}`)
        .then((response) => {
          console.log(response.data);
          setIdData(response.data)
        })
        .catch((error)=>{
        console.log(error.message);
        })
    }, [])

    useEffect(() => {
      axios.get("http://localhost:8080/api/allbooks")
      .then((response) => {
        setAllData(response.data)
        console.log(response.data);
      })
      .catch((error)=>{
      console.log(error.message);
      })
    }, [])
    
    
  return (
    <div>
      <Navbar/>
         <div className='flex flex-wrap items-center justify-center'>
       
                <div className='flex items-center justify-around flex-wrap border    border-black w-screen h-96'>
                <Image src={idData.image} alt='Nothing' height={250} width={300}/> 
                <div className='flex flex-col'>
                <span> {idData.name}</span>
                <span>{idData.rating}</span>
                <span> {idData.description}</span>
                <span> Genre :- {idData.genre}</span> 
                 <span> Author :- {idData.author}</span>
                <span> Type :- {idData.type}</span>
                <span> Price :- {idData.price}</span>
                </div>
                <button className='bg-gray-200 py-2 px-1 rounded-xl'>Add to cart</button>
                </div>
        </div>
        <Footer/>
    </div>
  )
}

export default page