import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";

import "swiper/css/swiper.css";
import { Parallax, Background } from 'react-parallax';
import Swiper from "react-id-swiper";
import Button from "components/CustomButtons/Button.js";
import LocationOn from "@material-ui/icons/LocationOn";

import Arrowd from "@material-ui/icons/ArrowDropDown";
import image1 from "assets/img/image/carousel/c1.webp";
import image2 from "assets/img/image/carousel/c2.webp";
import image3 from "assets/img/image/carousel/c3.webp";
import image4 from "assets/img/image/carousel/c4.webp";
import image5 from "assets/img/image/carousel/c5.webp";
import image6 from "assets/img/image/carousel/c6.webp";
import image8 from "assets/img/image/carousel/c8.webp";
import image9 from "assets/img/image/carousel/c9.webp";
import image10 from "assets/img/image/carousel/main.webp";
import bgImage from "assets/img/bg5.jpg";

import "assets/css/slider.css";

const HeroSliderConfigs = {
    containerClass: "swiper-container hero-slider",
    parallax: true,
    centeredSlides: true,
    speed: 2000,
    spaceBetween: 0,
    effect: 'slide',
    autoplay: 5000,
    autoplayDisableOnInteraction: false,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
};

const useStyles = makeStyles(() => ({
    
    container: {
        height: '110vh',
        backgroundImage:'linear-gradient(to bottom, rgba(0, 0, 0, 0.72), transparent)'
        // backgroundImage:'linear-gradient(to bottom, rgba(0, 0, 0, 0.72), transparent), url('+ bgImage +')',
    },

    '@media (max-width: 800px)': {
        container: {
            height: '80vh'
        },
        titleSection: {
            height: '20vh'
        },
        title: {
            position: 'absolute',
            marginTop: '10vh',
            marginLeft: '16vw',
            color: 'white',
            fontSize: '10vh',
            textStrokeWidth: '3px',
            fontWeight: "600",
            textStrokeColor: '#fff',
            textFillColor: 'transparent'
        },
        background: {
            position:'absolute',
            width: '70vw'
        },
        downvote: {
            position: 'absolute',
            marginLeft: '37vw',
            marginTop: '75vh',
            height: '50px',
            width: '50px',
            zIndex: '10000',
          },
          arrow: {
              width: "50px",
              height: "50px",
              marginLeft: "8px",
              transition: '1s',
              color: '#8470cf',
          },
    },
    '@media (min-width: 800px)': {
        titleSection: {
            height: '20vh'
        },
        title: {
            position: 'absolute',
            marginTop: '7vh',
            marginLeft: '18vw',
            color: 'white',
            fontSize: '10vh',
            textStrokeWidth: '3px',
            fontWeight: "600",
            textStrokeColor: '#fff',
            textFillColor: 'transparent'
        },
        background: {
            position:'absolute',
            width: '70vw'
        },
        downvote: {
            position: 'absolute',
            marginLeft: '45vw',
            marginTop: '100vh',
            height: '50px',
            width: '50px',
            zIndex: '10000',
          },
          arrow: {
              width: "100px",
              height: "100px",
              marginLeft: "8px",
              transition: '1s',
              color: '#ffffdd',
          },
    }
}));

export default function SectionCarousel() {
    const classes = useStyles();

    const [parallaxSwiper, setParallaxSwiper] = useState(null);
    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
    const parallaxOpacity = 0.1;


    setInterval(function () {
        if (parallaxSwiper !== null) {
            parallaxSwiper.slideNext();
        }
    }, 5000);

    return (
        <Parallax
        blur={{ min: -5, max: 5 }}
        bgImage={bgImage}
        bgImageAlt="the cat"
        strength={700}
    >
        <div className={classes.container}> 
            <Link className={classes.downvote}
                        to="video"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {1000} >
                <Arrowd id="gal" className={classes.arrow} />
            </Link>     
            <div className={classes.titleSection}>
                <h1 className={classes.title}>Gallery</h1>
            </div>
            <div className="card">
                <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
                    <div className="hero-slide">
                        <div className="slide-image" data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity={parallaxOpacity}>
                            <img className="imag" src={image9} height='100%' width='100%' alt="image9" />
                        </div>
                        <div className="content">
                            <h4>
                                <LocationOn className="slick-icons" />
                        Vellore Institute Of Technology, Chennai
                    </h4>
                        </div>
                    </div>
                    <div className="hero-slide">
                        <div className="slide-image" data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity={parallaxOpacity}>
                            <img className="imag" src={image6} height='100%' width='100%' alt="image6" />
                        </div>
                        <div className="content">
                            <h4>
                                <LocationOn className="slick-icons" />
                          Testing Grounds, SRM Main Campus, Chennai
                    </h4>
                        </div>
                    </div>
                    <div className="hero-slide">
                        <div className="slide-image" data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity={parallaxOpacity}>
                            <img className="imag" src={image8} height='100%' width='100%' alt="image8" />
                        </div>
                        <div className="content">
                            <h4>
                                <LocationOn className="slick-icons" />
                        Mars Dessert Research Station, Utah , United States
                    </h4>
                        </div>
                    </div>
                    <div className="hero-slide">
                        <div className="slide-image" data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity={parallaxOpacity}>
                            <img className="imag" src={image1} height='100%' width='100%' alt="image1" />
                        </div>
                        <div className="content">
                            <h4>
                                <LocationOn className="slick-icons" />
                        Mars Dessert Research Station, Utah , United States
                    </h4>
                        </div>
                    </div>
                    <div className="hero-slide">
                        <div className="slide-image" data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity={parallaxOpacity}>
                            <img className="imag" src={image2} height='100%' width='100%' alt="image2" />
                        </div>
                        <div className="content">
                            <h4>
                                <LocationOn className="slick-icons" />
                        Tech Park Stairs, SRMIST, Chennai
                    </h4>
                        </div>
                    </div>
                    <div className="hero-slide">
                        <div className="slide-image" data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity={parallaxOpacity}>
                            <img className="imag" src={image3} height='100%' width='100%' alt="image3" />
                        </div>
                        <div className="content">
                            <h4>
                                <LocationOn className="slick-icons" />
                        Utah, United States
                    </h4>
                        </div>
                    </div>
                </Swiper>
                <div className="btngal">
                    <Button color="primary" size="lg" round>
                        Gallery
                </Button>
                </div>
            </div>
        </div>
        </Parallax>
    );
}