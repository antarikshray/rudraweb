// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Link, animateScroll as scroll } from "react-scroll";
// import { Link as RLink } from "react-router-dom";
// import SwiperCore, { Navigation, Scrollbar, A11y, Parallax } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/swiper.scss';

// import image1 from "assets/img/image/carousel/c1.webp";
// import image2 from "assets/img/image/carousel/c2.webp";
// import image3 from "assets/img/image/carousel/c3.webp";
// import image4 from "assets/img/image/carousel/c4.webp";
// import image5 from "assets/img/image/carousel/c5.webp";
// import image6 from "assets/img/image/carousel/c6.webp";
// import image8 from "assets/img/image/carousel/c8.webp";
// import image9 from "assets/img/image/carousel/c9.webp";
// import image10 from "assets/img/image/carousel/main.webp";

// SwiperCore.use([Navigation, Scrollbar, A11y, Parallax]);

// const useStyles = makeStyles(() => ({
//     container: {
//         height: '100vh',
//         width: '100%',
//         backgroundColor: 'black'
//     }
// }));

// export default function SectionCarousel() {
    
//     const classes = useStyles();
    
//     return(
//         <div className={classes.container}>
//             <Swiper
//       spaceBetween={0}
//       slidesPerView={1}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//       Parallax="true"
//     >
//       <SwiperSlide><img src={image1} height="100%" width="100%" /></SwiperSlide>
//       <SwiperSlide><img src={image2} height="100%" width="100%" /></SwiperSlide>
//       <SwiperSlide><img src={image3} height="100%" width="100%" /></SwiperSlide>
//       <SwiperSlide><img src={image4} height="100%" width="100%" /></SwiperSlide>
//     </Swiper>
//         </div>
//     );
// }