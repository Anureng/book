"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


interface IData {
  name: string
  image: string
  rating: number
  description: string
  price: number
  type: string
  author: string
  genre:string
}

const page = ({params}:any ) => {

  const [idData, setIdData] = useState<IData | undefined>()
  useEffect(() => {
    axios.get(`http://localhost:8080/api/getBookId/${params.id}`)
    .then((response) => {
      console.log(response.data);
      setIdData(response.data)
    })
    .catch((error)=>{
    console.log(error.message);
    })
  }, [params.id])




  return (
    <div>
      <Navbar/>
          <div className='flex p-10 flex-wrap items-center justify-center'>
       
                <div className='flex items-center justify-around flex-wrap  w-screen h-96'>
                <Image src={idData?.image} alt='Nothing' height={250} width={300}/> 
                <div className='flex flex-col'>
                <span> {idData?.name}</span>
                <span>{idData?.rating}</span>
                <span> {idData?.description}</span>
                <span> Genre :- {idData?.genre}</span> 
                 <span> Author :- {idData?.author}</span>
                <span> Type :- {idData?.type}</span>
                <span> Price :- {idData?.price}</span>
        {/* const response = await axios.get(`http://localhost:8080/api/getBookId/${params.slug}`); */}
                 </div>
                </div>
                <button className='bg-gray-200 py-2 px-1 rounded-xl'>Add to cart</button>
        </div> 


        <Footer/>
    </div>
  )
}

// page.getInitialProps = async ({ params: { id } }: PageProps) =>
// {
//   try {
//   const response = await axios.get(`http://localhost:8080/api/getBookId/${id}`);
//   const data = response.data
//   console.log(data);
//   return {data}
//   } catch (error) {
//     console.log(error);
//   }
  
// }

export default page