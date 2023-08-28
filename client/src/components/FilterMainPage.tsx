"use client"
import React, { useState ,useEffect} from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import Image from 'next/image'

  import axios from "axios"
import Link from 'next/link'
  
const FilterMainPage = () => {

    const [getBookData, setGetBookData] = useState([])

    useEffect(() => {
    axios.get("http://localhost:8080/api/allbooks")
    .then((response)=>{
        setGetBookData(response.data)
        console.log(response.data);
    })
    .catch((error) => console.log(error));
}, [])
   

    const [activeCategory, setActiveCategory] = useState([])
    const [loading, setLoading] = useState(false)
    const categoryFilter = (genre) =>{
        if(activeCategory.includes(genre)){
            setActiveCategory(activeCategory.filter((c)=>c!==genre))
        }
        else{
            setActiveCategory([ genre])
        }
    }

    // const filteredItem = getBookData.filter((item)=>{
        // const categoryItem = activeCategory.includes(item.Category)
        // return categoryItem
    // })

    const filteredItem = getBookData.filter((item)=>{
        const categoryMatch = activeCategory.length === 0 || activeCategory.includes(item.genre)
        return categoryMatch;
    })
  return (
    <div>
    <div className='border border-black  '>
        {/* Navbar with higher or lower price  */}
        <div className='flex items-center space-x-2  justify-around'>
            <div>
                <button>Clear All Filter</button>
            </div>
            <div className='flex items-center'>
            <input className='px-1 py-2 outline-none ' type="text" placeholder='Enter Book Name...' />
            <Select>
  <SelectTrigger className="w-[180px] rounded-xl" >
    <SelectValue placeholder="Select"  />
  </SelectTrigger>
  <SelectContent className='rounded-xl'>
    <SelectItem value="Higher">Higher</SelectItem>
    <SelectItem value="Lower">Lower</SelectItem>
    {/* <SelectItem value="Select">Select</SelectItem> */}
    
  </SelectContent>
</Select>

            </div>
        </div>
        <div className='flex'>
        {/* left filter side  */}
        <div className='space-y-2'>
            {/* Genre Category  */}
            <div className='flex flex-col items-center space-y-3'>
                <p className='text-red-600 font-bold text-lg '>Genre</p>
                <button onClick={()=>categoryFilter("Horror")} className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Horror</button>
                <button onClick={()=>categoryFilter("Comedy")} className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Comedy</button>
                <button onClick={()=>categoryFilter("cartoon")} className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Cartoon</button>
                <button onClick={()=>categoryFilter("Horror")} className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Something Else</button>
            </div>
            {/* Author Category  */}
            <div className='flex flex-col items-center space-y-3'>
                <p className='text-red-600 font-bold text-lg '>Author</p>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Sam</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Jony</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Anurag</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Sang</button>
            </div>
             {/* hardCopy and Soft copy  */}
             <div className='flex flex-col items-center space-y-3'>
                <p className='text-red-600 font-bold text-lg '>Type</p>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Hard Copy</button>
             <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Soft Copy</button>
            </div>
        </div>
        {/* hr line  */}
        <div className=' border-left border'></div>
        {/* All Data  */}
        <div className='flex flex-wrap items-center justify-center'>
        {
            filteredItem?.map((el)=>(
                <Link href={`/detail/${el._id}`}>
                <div className='flex flex-col flex-wrap border w-96  border-black'>
                <Image src={el.image} alt='Nothing' height={100} width={100}/>
                <span>Name :- {el.name}</span>
                <span> Description :- {el.description}</span>
                <span> Genre :- {el.genre}</span> 
                {/* <span> Author :- {el.author}</span>
                <span> Type :- {el.type}</span>
                <span> Price :- {el.price}</span> */}
                </div>
                </Link>
            ))
        }
        </div>
        </div>
        </div>
    </div>
  )
}

export default FilterMainPage