// Import React/SwiperCores/CSS
import React, {useState} from "react";
import SwiperCore, { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../../css/img.css';

// install Swiper components
SwiperCore.use([Navigation, Thumbs]);

const Gallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <React.Fragment>
            <div className = "galleryPlacement">
                <h1>GALLERY</h1>
                <Swiper
                    thumbs={{swiper : thumbsSwiper}}
                    spaceBetween= {10}
                    loop= {true}
                    loopedSlides= {5}
                    navigation
                    >
                    <SwiperSlide><img className = "galleryImages" src={require("../../img/gallery/0.jpg")} alt=""/></SwiperSlide>
                    <SwiperSlide><img className = "galleryImages" src={require("../../img/gallery/1.jpg")} alt=""/></SwiperSlide>
                    <SwiperSlide><img className = "galleryImages" src={require("../../img/gallery/2.jpg")} alt=""/></SwiperSlide>
                    <SwiperSlide><img className = "galleryImages" src={require("../../img/gallery/3.jpg")} alt=""/></SwiperSlide>
                    <SwiperSlide><img className = "galleryImages" src={require("../../img/gallery/4.jpg")} alt=""/></SwiperSlide>

                </Swiper>

                <Swiper 
                    onSwiper = {setThumbsSwiper}
                    spaceBetween= {10}
                    slidesPerView= {4}
                    freeMode= {true}
                    >

                    <SwiperSlide><img className = "thumbImages" src={require("../../img/gallery/0.jpg")} alt=""/></SwiperSlide>
                    <SwiperSlide><img className = "thumbImages" src={require("../../img/gallery/1.jpg")} alt=""/></SwiperSlide>
                    <SwiperSlide><img className = "thumbImages" src={require("../../img/gallery/2.jpg")} alt=""/></SwiperSlide>
                    <SwiperSlide><img className = "thumbImages" src={require("../../img/gallery/3.jpg")} alt=""/></SwiperSlide>
                    <SwiperSlide><img className = "thumbImages" src={require("../../img/gallery/4.jpg")} alt=""/></SwiperSlide>

                </Swiper>
            </div>
        </React.Fragment>
    );
};

export default Gallery;