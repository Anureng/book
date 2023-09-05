"use client"
import React, { useState } from 'react';

const FilterButton = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', category: 'Category A', price: 10 },
    { id: 2, name: 'Item 2', category: 'Category B', price: 20 },
    { id: 3, name: 'Item 3', category: 'Category A', price: 15 },
    { id: 4, name: 'Item 4', category: 'Category C', price: 25 },
  ]);

  const [activeCategories, setActiveCategories] = useState([]);
const [searchQuery, setSearchQuery] = useState('');
const [activePriceFilters, setActivePriceFilters] = useState([]);

  const handleCategoryFilter = (category) => {
    if (activeCategories.includes(category)) {
      setActiveCategories(activeCategories.filter((c) => c !== category));
    } else {
      setActiveCategories([...activeCategories, category]);
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

  const filteredItems = items.filter((item) => {
    const categoryMatch =
      activeCategories.length === 0 || activeCategories.includes(item.category);

    const searchMatch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase());

    const priceMatch =
      activePriceFilters.length === 0 ||
      (activePriceFilters.includes('higher') && item.price >= 20) ||
      (activePriceFilters.includes('lower') && item.price < 20);

    return categoryMatch && searchMatch && priceMatch;
  });

  return (
    <div>
      <h2>Filter Items</h2>
      <div>
        <button onClick={() => handleCategoryFilter('All')}>All</button>
        <button onClick={() => handleCategoryFilter('Category A')}>Category A</button>
        <button onClick={() => handleCategoryFilter('Category B')}>Category B</button>
        <button onClick={() => handleCategoryFilter('Category C')}>Category C</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div>
        <button onClick={() => handlePriceFilter('higher')}>Higher Price</button>
        <button onClick={() => handlePriceFilter('lower')}>Lower Price</button>
      </div>
      <div> <button onClick={clearAllFilters}>Clear All Filters</button></div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterButton;


// "use client"
// import React, { useState } from 'react'

// const FilterButton = () => {
//     const [item, setItem] = useState([
//         {
//             "id":"1"  , "name":"Anurag" , "Category":"veg" , "Price":"100" 
//         },
//         {
//             "id":"2"  , "name":"Anurag" , "Category":"non_veg" , "Price":"40" 
//         },
//         {
//             "id":"3"  , "name":"Anurag" , "Category":"veg" , "Price":"200" 
//         },
//         {
//             "id":"4"  , "name":"Anurag" , "Category":"non_veg" , "Price":"10" 
//         }
//     ])

//     const [activeCategory, setActiveCategory] = useState('')
//     const [searchFilter, setSearchFilter] = useState('')
//     const [priceFilter, setPriceFilter] = useState("")

//     const category = (data) =>{
//         if(setActiveCategory(data)){
//             setActiveCategory(data.filter(el)=>)
//         }
//     }
//   return (
//     <>
//     <div>
//         <button onClick={category}>All</button>
//     </div>
//     <div>
//         {
//             item.map((el)=>{
//                 return(
//                     <div key={el.id}>
//                     <span>{el.name}</span> 
//                     <span>{el.Category}</span>
//                     <span>{el.Price}</span>
//                     </div>
//                 )
//             })
//         }
//     </div>
//         </>
//   )
// }

// export default FilterButton
