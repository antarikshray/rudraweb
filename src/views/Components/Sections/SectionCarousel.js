import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RLink } from "react-router-dom";
import DelayLink from 'react-delay-link';

import 'swiper/css/swiper.css'

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
import bgImage from "assets/img/bggal.jpg";

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
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.72), transparent)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titleSection: {
        height: '16vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: '10vh',
        textStrokeWidth: '3px',
        fontWeight: "600",
        textStrokeColor: '#fff',
        textFillColor: 'transparent'
    },
    background: {
        position: 'absolute',
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
    card: {
        position: 'relative',
        width: '67%'
    },

    '@media (max-width: 1024px)': {
        card: {
            width: '85%'
        },
        container: {
            height: '80vh'
        }   
    },
    '@media (max-width: 800px)': {
        container:{
            height: '70vh'
        },

        card: {
            width: '95%'
        },
        subtitle:{
            fontSize: '0.7em',
            fontWeight: 'bolder'
        }
    },

}));

export default function SectionCarousel() {
    const classes = useStyles();

    const [parallaxSwiper, setParallaxSwiper] = useState(null);
    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
    const parallaxOpacity = 0.1;

    useEffect(() => {
        const interval = setInterval(function () {
            if (parallaxSwiper !== null) {
                parallaxSwiper.slideNext();
            }
        }, 5000);

        return () => { clearInterval(interval); }
    });


    return (
        <Parallax
            blur={{ min: -5, max: 5 }}
            bgImage={bgImage}
            bgImageAlt="the cat"
            strength={700}
        >
            <div className={classes.container}>
                <div className={classes.titleSection}>
                    <h1 className={classes.title}>Gallery</h1>
                </div>
                <div className={classes.card}>
                    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
                        <div className="hero-slide">
                            <div className="slide-image" data-swiper-parallax={parallaxAmount} data-swiper-parallax-opacity={parallaxOpacity}>
                                <img className="imag" src={image9} height='100%' width='100%' alt="image9" />
                            </div>
                            <div className="content">
                                <h4 className={classes.subtitle}>
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
                                <h4 className={classes.subtitle}>
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
                                <h4 className={classes.subtitle}>
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
                                <h4 className={classes.subtitle}>
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
                                <h4 className={classes.subtitle}>
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
                                <h4 className={classes.subtitle}>
                                    <LocationOn className="slick-icons" />
                        Utah, United States
                    </h4>
                            </div>
                        </div>
                    </Swiper>
                </div>
                <DelayLink delay={1800} to="/gallery-page" clickAction={() => {
                    document.getElementById('load1').style.width = '50vw';
                    document.getElementById('load2').style.height = '120vh';
                    setTimeout(function () {
                        document.getElementById('load3').style.height = '120vh';
                    }, 500);
                }}>
                    <Button color="grey" size="lg" round >
                        Gallery
                            </Button>
                </DelayLink>
                {/* <Link className={classes.downvote}
                    to="video"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000} >
                    <Arrowd id="gal" className={classes.arrow} />
                </Link> */}
            </div>
        </Parallax>
    );
}