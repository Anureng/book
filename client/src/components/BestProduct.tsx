'use client'
import Image from 'next/image';
import React from 'react'
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
const BestProduct = () => {

  return (
    <div className='space-y-4 p-2' >
<div className='mt-10'>
  <p className='text-red-500 font-bold text-2xl'>
  Best Products with 50% off
  </p>
</div>
    <div className=' border border-black p-10'>
      <Carousel
    swipeable={false}
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
    

    <div>
    name:Hello,
            description:lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu,
            Price:300,
            Category:Horror,
            <Image src="/home1.png" alt='Nothing' width={100} height={100}/>
            Author:Anurag,
            type:hardCopy
    </div>
    <div>    name:Hello,
            description:lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu,
            Price:300,
            Category:Horror,
            <Image src="/home1.png" alt='Nothing' width={100} height={100}/>
            Author:John,
            type:hardCopy</div>
    <div>    name:Hello,
            description:lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu,
            Price:300,
            Category:Horror,
            <Image src="/home1.png" alt='Nothing' width={100} height={100}/>
            Author:John,
            type:hardCopy</div>
    <div>    name:Hello,
            description:lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu,
            Price:300,
            Category:Horror,
            <Image src="/home1.png" alt='Nothing' width={100} height={100}/>
            Author:John,
            type:hardCopy</div>
    
  </Carousel>
  </div>
    </div>
  )
}

export default BestProduct