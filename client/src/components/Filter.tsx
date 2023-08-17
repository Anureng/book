"use client"
import { spawn } from 'child_process'
import Image from 'next/image'
import React,{useState} from 'react'

interface IADATA {
    name: string,
    description: string,
    Price:number,
    Category:string,
    Author:string,
    type:string
}

const Filter = () => {
    const [data, setData] = useState<IADATA []>([
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

    const [filterData , setFilterData] =useState('')
    const [filterRadio , setFilterRadio] =useState('')
    const [item , setItem] =useState<IADATA[]>()

    const [activeCategories, setActiveCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [activePriceFilters, setActivePriceFilters] = useState([]);
    console.log(activeCategories);
    console.log(searchQuery);
    console.log(activePriceFilters);
    

    
    const handleCategoryFilter = (category) => {
        if (activeCategories.includes(category)) {
          setActiveCategories(activeCategories.filter((c) => c !== category));
        } else {
          setActiveCategories([activeCategories, category]);
        }
      };


      const handleSearch = (event) => {
        setSearchQuery(event.target.value);
      };
    
      const handlePriceFilter = (filterType) => {
        if (activePriceFilters.includes(filterType)) {
          setActivePriceFilters(activePriceFilters.filter((f) => f !== filterType));
        } else {
          setActivePriceFilters([...activePriceFilters, filterType]);
        }
      };
      const clearAllFilters = () => {
        setActiveCategories([]);
        setSearchQuery('');
        setActivePriceFilters([]);
      };


      const filteredItems = data.filter((item) => {
        const categoryMatch =
          activeCategories.length === 0 || activeCategories.includes(item.Category);
    
        const searchMatch =
          item.name.toLowerCase().includes(searchQuery.toLowerCase());
    
        const priceMatch =
          activePriceFilters.length === 0 ||
          ( activePriceFilters.includes('higher') && item.Price > 300) ||
          ( activePriceFilters.includes('lower') && item.Price <= 300);
    
        return categoryMatch && searchMatch && priceMatch;
      });

  

        const menuItems = [...new Set(data.map((val:IADATA)=>val.Category)) ]



        
  return (
    // <>
    //     {/* <input type="text"  placeholder='Enter Book item' onChange={(e:any)=>setFilterData(e.target.value)} /> */}
    //     {/* <button  value={filterRadio} onClick={(e:any)=>setFilterRadio(e.target.value)} >click</button> */}
  
    // <div>
    // <button onClick={() => handleCategoryFilter('All')}>All</button>
    // <div>
    //     {
    //         menuItems.map((el)=>(
    //             <button onClick={()=>handleCategoryFilter(el)}>{el}</button>
    //         ))
    //     }
    // </div>
    //             </div>
    //             <div>
    //     <input
    //       type="text"
    //       placeholder="Search by name"
    //       value={searchQuery}
    //       onChange={handleSearch}
    //     />
    //   </div>
    //   <div>
    //     <button onClick={() => handlePriceFilter('higher')}>Higher Price</button>
    //     <button onClick={() => handlePriceFilter('lower')}>Lower Price</button>
    //   </div>
    //   <div> <button onClick={clearAllFilters}>Clear All Filters</button></div>
    //   <ul>
    //     {filteredItems.map((item) => (
    //       <li key={item.id}>
    //         {item.name} - {item.Category} - ${item.Price}
    //       </li>
    //     ))}
    //   </ul>
    //         </>

    <>
    
    </>
  )
}

export default Filter