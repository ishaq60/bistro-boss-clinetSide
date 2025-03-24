
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

import imag1 from "../../../assets/home/slide1.jpg" 
import imag2 from "../../../assets/home/slide2.jpg" 
import imag3 from "../../../assets/home/slide3.jpg" 
import imag4 from "../../../assets/home/slide4.jpg"
import imag5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/sectionTitle/SectionTitle';



// import imag4 from "../../../assets/home/slide4.jpg" 
// import imag5 from "../../../assets/home/slide5.jpg" 
// import imag6 from "../../../assets/home/slide6.jpg" 
const Category = () => {
    return (
   <section>
<SectionTitle 
    subheading={"From 11.00 am to 10 pm"} 
    heading={"Order Online"} 
/>

<Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img className='' src={imag1} alt="" />
            <p className='text-4xl text-center -mt-16  text-white  uppercase'>salad</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={imag2} alt="" />
            <p className='text-4xl text-center -mt-16  text-white  uppercase'>Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={imag3} alt="" />
            <p className='text-4xl text-center -mt-16  text-white  uppercase'>soup</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={imag4} alt="" />
            <p className='text-4xl text-center -mt-16  text-white  uppercase'>Cake</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={imag5} alt="" />
            <p className='text-4xl text-center -mt-16  text-white  uppercase'>ssssss</p>
        </SwiperSlide>
      
      </Swiper>
   </section>
   
    );
};

export default Category;