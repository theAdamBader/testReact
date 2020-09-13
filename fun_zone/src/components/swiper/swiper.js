import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from "swiper";
// import 'swiper/swiper.scss';

// const Slider = props => {
//     const slides = [];

//     for (let i = 0; i < slides.length; i++){
//         slides.push(
//             <SwiperSlide key = {'slide-${(i)}'}>
//                 <img src={require("../../img/por.jpg")} alt=""/>
//             </SwiperSlide>
//         );
//     }

//     return <React.Fragment>
//         <Swiper id = "gallerySwipe">
//             {slides}
//         </Swiper>
//     </React.Fragment>
// }

// export default Slider;

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const sliding = props => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={require("../../img/gallery/0.jpg")} alt=""/></SwiperSlide>
      <SwiperSlide><img src={require("../../img/gallery/1.jpg")} alt=""/></SwiperSlide>
      <SwiperSlide><img src={require("../../img/gallery/2.jpg")} alt=""/></SwiperSlide>
      <SwiperSlide><img src={require("../../img/gallery/3.jpg")} alt=""/></SwiperSlide>
      ...
    </Swiper>
  );
};

export default sliding;