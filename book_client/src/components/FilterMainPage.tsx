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
import SkeletonDemo from './SkeletonDemo'
  
const FilterMainPage = () => {

    // const [loading, setLoading] = useState(false)

    const [getBookData, setGetBookData] = useState([])
    const [loading, setLoading] = useState(true)
    const [dataLength, setDataLength] = useState("")

    useEffect(() => {
    axios.get("http://localhost:8080/api/allbooks")
    .then((response)=>{
        setGetBookData(response.data)
        console.log(response.data);
        setDataLength(response.data.length)
   setLoading(false)
    })
    .catch((error) => console.log(error));
}, [])
   

    const [activeCategory, setActiveCategory] = useState([])
    const [activeCategoryAuthor, setActiveCategoryAuthor] = useState([])
    const categoryFilter = (genre) =>{
        if(activeCategory.includes(genre)){
            setActiveCategory(activeCategory.filter((c)=>c!==genre))
        }
        else{
            setActiveCategory([ genre])
        }
    }

    const authorFilter = (author) =>{
        if(activeCategoryAuthor.includes(author)){
            setActiveCategoryAuthor(activeCategoryAuthor.filter((c)=>c!==author))
        }
        else{
            setActiveCategoryAuthor([author])
        }
    }

    // const filteredItem = getBookData.filter((item)=>{
        // const categoryItem = activeCategory.includes(item.Category)
        // return categoryItem
    // })
    const [searchQuery, setSearchQuery] = useState("")

    const filteredItem = getBookData.filter((item)=>{
      
        const categoryMatch = activeCategory.length === 0 || activeCategory.includes(item.genre)
      const authorMatch = activeCategoryAuthor.length === 0 || activeCategoryAuthor.includes(item.author)
     const searchCategory = item.name.toLowerCase().includes(searchQuery.toLowerCase())
      return categoryMatch && authorMatch && searchCategory; 
    })

    // SEARCH FILTER



    // PAGINATION 




    const [currentPage, setCurrentPage] = useState(1)
    const [firstPage, setFirstPage] = useState(0)
    const [nextPage, setNextPage] = useState(4)

    const perDataPage = 4;
    const dataPerPageLength=Math.ceil(Number(dataLength)/perDataPage);
    console.log(dataPerPageLength)

    const handlenextButton  = (e:number) =>{
        if(firstPage === 0){
            setCurrentPage(currentPage+1)
            setFirstPage( (firstPage+perDataPage) * currentPage)
            setNextPage((nextPage)  * perDataPage)
        }
        else{
            setCurrentPage(currentPage+1)
            setFirstPage( firstPage* currentPage)
            setNextPage((nextPage)  * perDataPage)
        }        
    }

    const handlePreviousButton =(e:number) =>{
        if(firstPage === 0){
            setCurrentPage(currentPage-1)
            setFirstPage( (firstPage+perDataPage) / currentPage)
            setNextPage((nextPage)  / perDataPage)
        }
        else{
            setCurrentPage(currentPage-1)
            setFirstPage( firstPage/ currentPage)
            setNextPage((nextPage)  / perDataPage)
        }    
    }
    console.log(currentPage);
    console.log(firstPage);
    console.log(nextPage);
    

  return (
    <div>
    <div className='border border-black flex items-center justify-center flex-col '>
        {/* Navbar with higher or lower price  */}
        <div className='flex items-center space-x-2  justify-around'>
            <div>
                <button>Clear All Filter</button>
            </div>
            <div className='flex items-center'>
            <input onChange={(e)=>setSearchQuery(e.target.value)} className='px-1 py-2 outline-none ' type="text" placeholder='Enter Book Name...' />

            </div>
        </div>
        <div className='flex'>
        {/* left filter side  */}
        <div className='space-y-2  space-x-5 '>
            {/* Genre Category  */}
            <div className='flex flex-col items-center space-y-3'>
                <p className='text-red-600 font-bold text-lg '>Genre</p>
                <button onClick={()=>categoryFilter("Horror")}  className={"bg-gray-200 text-red-500 px-2 py-1 rounded-xl"} >Horror</button>
                <button onClick={()=>categoryFilter("Comedy")} className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Comedy</button>
                <button onClick={()=>categoryFilter("cartoon")} className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Cartoon</button>
                {/* <button onClick={()=>categoryFilter("Horror")} className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Something Else</button> */}
            </div>
            {/* Author Category  */}
            <div className='flex flex-col items-center space-y-3'>
                <p className='text-red-600 font-bold text-lg '>Author</p>
                <button onClick={()=>authorFilter("Sam")} className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Sam</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Jony</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Anurag</button>
                <button className='bg-gray-200 text-red-500 px-2 py-1 rounded-xl '>Sang</button>
            </div>
             {/* hardCopy and Soft copy  */}
            
        </div>
        {/* hr line  */}
        <div className=' border-left border'></div>
        {/* All Data  */}

        <div className='flex flex-col items-center justify-center w-5/6 border border-black '>
            {
                loading===true ? (
                <div className='flex items-center justify-center '>
                <SkeletonDemo/>
                </div>
                
                ):(
                    <div className='flex flex-wrap items-center space-x-4 space-y-2 border border-black  justify-center'>
                    {
                        filteredItem?.slice(firstPage,nextPage).map((el)=>(
                            <div key={el._id}>
                            <Link href={`/Detail/${el._id}`}>
                            <div className='flex flex-col flex-wrap border w-96 p-3  border-black'>
                            <Image src={el.image} alt='Nothing' height={150} width={150}/>
                            <span>Name :- {el.name}</span>
                            {/* <span> Description :- {el.description}</span> */}
                            <span> Genre :- {el.genre}</span> 
                            <span> Price :- {el.price}</span>
                            {/* <span> Author :- {el.author}</span>
                            <span> Type :- {el.type}</span>
                            <span> Price :- {el.price}</span> */}
                            </div>
                            </Link>
                    </div>
                        ))
                    }
                    </div>
                )
            }
            <div className='flex space-x-2 p-2'>
            <button className='bg-gray-300 px-2 py-1 font-bold rounded-xl text-red-600' disabled={currentPage===dataPerPageLength}  onClick={(e)=>handlenextButton(e.target.value)}>Next</button>
            <button className='bg-gray-300 px-2 py-1 font-bold rounded-xl text-red-600' disabled={currentPage===1}   onClick={(e)=>handlePreviousButton(e.target.value)}>Prev</button>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default FilterMainPage