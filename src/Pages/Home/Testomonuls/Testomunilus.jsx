import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Testomunilus = () => {
    const [reviews,setreviews]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setreviews(data))
    },[])
  return (
    <div className="my-20">
      <SectionTitle subheading="What Our client say" heading="Testimonials" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {
        reviews.map(review=>

            <SwiperSlide key={review._id}>
             <div className="m-16 flex items-center text-center flex-col">

     <Rating className="text-center mt-8"
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
  
                <p className="mt-4">{review.details}</p>
                <h3 className="text-2xl my-4 text-orange-400">{review.name}</h3>
             </div>
                </SwiperSlide>
        )
       }
      </Swiper>
    </div>
  );
};

export default Testomunilus;
