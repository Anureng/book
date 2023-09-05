"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



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

const Auther = () => {
    const [data , setData] = useState([
        {
            "Name":"Anurag "
        },
        {
            "Name":"Sidhu "
        },
        {
            "Name":"Amit "
        },
        {
            "Name":"Kunal "
        },
        {
            "Name":"krishna "
        },
        {
            "Name":"Hitesh "
        },
        {
            "Name":"Arjun "
        },
        {
            "Name":"Khan "
        },
        {
            "Name":"Nft "
        },
        {
            "Name":"jaadu "
        },
    ])
  return (
    <div>
        <div className="p-10">
            <div className=' border border-black p-10'>
            <p className='flex  justify-center text-red-500 text-2xl'>Feature Author</p>
      <Carousel
    swipeable={true}
    draggable={false}
    showDots={false}
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
    itemClass="carousel-item-padding-40-px"
  >
    
                        {
                    data.map((el,i)=>(
                        <div key={i}>
                        <Image src="/home1.png" alt='Nothing' width={100} height={100}/>
                        <p>{el.Name}</p>
                        </div>
                    ))
                }
            </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Auther