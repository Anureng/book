"use client"
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const FilterMainPage = () => {
    const [data, setData] = useState([
        {
            "name":"Austin",
            "description":"lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "Price":300,
            "Category":"Horror",
            "Author":"John",
            "type":"hardCopy"
        },
        {
            "name":"joy",
            "description":"lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "Price":400,
            "Category":"Fantasy",
            "Author":"John",
            "type":"softcopy"
        },
        {
            "name":"Jimmy",
            "description":"lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "Price":300,
            "Category":"Horror",
            "Author":"John",
            "type":"hardCopy"
        },
        {
            "name":"Good day",
            "description":"lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "Price":300,
            "Category":"cartoon",
            "Author":"chris",
            "type":"softCopy"
        },
        {
            "name":"Hello",
            "description":"lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "Price":300,
            "Category":"Horror",
            "Author":"John",
            "type":"hardCopy"
        },
        {
            "name":"Hello",
            "description":"lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "Price":300,
            "Category":"Horror",
            "Author":"John",
            "type":"hardCopy"
        },
        {
            "name":"Hello",
            "description":"lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            "Price":300,
            "Category":"Horror",
            "Author":"John",
            "type":"hardCopy"
        }
    ])
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
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Horror</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Comedy</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Cartoon</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Something Else</button>
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
        <div className=''>
        {
            data.map((el)=>(
                <div className='flex flex-wrap'>
                <span>{el.name}</span>
                <span>{el.description}</span>
                <span>{el.Price}</span>
                <span>{el.Category}</span>
                <span>{el.Author}</span>
                <span>{el.type}</span>
                </div>
            ))
        }
        </div>
        </div>
        </div>
    </div>
  )
}

export default FilterMainPage