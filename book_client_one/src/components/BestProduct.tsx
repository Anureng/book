'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import SkeletonDemo from './SkeletonDemo';
import Link from 'next/link';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
// const items = [
//   <p   onDragStart={handleDragStart}  >yooo!!!!</p>,
//   <p onDragStart={handleDragStart} >yooo!!!!</p>,
//   <p onDragStart={handleDragStart}  >yooo!!!!</p>,
// ];
const BestProduct = () => {

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
  

  return (
    <div className='space-y-4 p-2' >
<div className='mt-10'>
  <p className='text-red-500 font-bold text-2xl'>
  Best Products with 50% off
  </p>
</div>
    <div className=' border border-black p-10'>
    <Carousel swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px">
 <div className='flex flex-col  border w-screen  border-black '>
            {
                loading===true ? (
                <div className='flex items-center justify-center '>
                <SkeletonDemo/>
                </div>
                
                ):(
                    <div className='flex flex-wrap items-center space-x-4 space-y-2 border border-black  justify-center'>
                    {
                        getBookData?.map((el)=>(
                            <div key={el._id}>
                            <Link href={`/Detail/${el._id}`}>
                            <div className='flex flex-col flex-wrap border  p-3  border-black'>
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
        </div>
        </Carousel>
            {/* <AliceCarousel mouseTracking items={items} touchTracking keyboardNavigation /> */}
  </div>
    </div>
  )
}

export default BestProduct