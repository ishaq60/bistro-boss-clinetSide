import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';

import imag1 from "../../../assets/home/slide1.jpg";
import imag2 from "../../../assets/home/slide2.jpg"; 
import imag3 from "../../../assets/home/slide3.jpg"; 
import imag4 from "../../../assets/home/slide4.jpg"; 
import imag5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../Components/sectionTitle/SectionTitle';

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
                loop={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={imag1} alt="Salad" />
                    <p className='text-4xl text-center -mt-16 text-white uppercase'>Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imag2} alt="Pizza" />
                    <p className='text-4xl text-center -mt-16 text-white uppercase'>Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imag3} alt="Soup" />
                    <p className='text-4xl text-center -mt-16 text-white uppercase'>Soup</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imag4} alt="Cake" />
                    <p className='text-4xl text-center -mt-16 text-white uppercase'>Cake</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imag5} alt="Dessert" />
                    <p className='text-4xl text-center -mt-16 text-white uppercase'>Dessert</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;
