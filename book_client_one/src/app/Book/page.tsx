import Filter from '@/components/Filter'
import FilterButton from '@/components/FilterButton'
import FilterMainPage from '@/components/FilterMainPage'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <Filter/>
        {/* <FilterButton/> */}
        <FilterMainPage/>
    </div>
  )
}

export default page