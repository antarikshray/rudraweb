import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Parallax, Background } from 'react-parallax';
import Button from "components/CustomButtons/Button.js";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import 'assets/css/sponsor.css';
import Arrowd from "@material-ui/icons/ArrowDropDown";
import wheeleez from 'assets/img/image/sponsors/wheeleez.webp';
import nvidia from 'assets/img/image/sponsors/Nvidia_logo.webp';
import anet from 'assets/img/image/sponsors/anet.webp';
import vectorInk from 'assets/img/image/sponsors/vectorink.webp';
import incwave from 'assets/img/image/sponsors/inception_wave.webp';
import monster from 'assets/img/image/sponsors/monster.webp';
import parall from "assets/img/rover.png";
import { isMobile } from 'react-device-detect';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles({
    container: {
        height: '130vh',
        // backgroundImage: 'url(' + bgImage + ')',
        backgroundColor: '#12121C'
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'space-around'
    },
    sponsor: {
        height: '30vh',
        // width: '50%',
        backgroundColor: '#202432',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        height: '5vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    h1: {
        fontFamily: 'gotham',
        fontSize: '15vw',
        textStrokeWidth: '2px',
        textStrokeColor: '#8896BF',
        textFillColor: 'transparent',
    },
    image: {
        width: '98%',
    },
    button: {
        width: '100%',
        margin: '5vh 0 4vh 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    downvote: {
        marginTop: '5vh',
        height: '5vh',
        width: '100%',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: '0.4',
        transition: '250ms ease-in-out',
        '&:hover': {
            opacity: '0.7'
        }
    },
    arrow: {
        width: "100px",
        height: "100px",
        transition: '1s',
        color: '#fff',
        opacity: '0.3'
    },
});


export default function SectionSponsorship(props) {
    const classes = useStyles();

    const prevScrollY = useRef(0);
    useEffect(() => {
        if (!isMobile) {
            ////////////////scroll event//////////////////////////
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                prevScrollY.current = currentScrollY;
                let element = document.getElementById('sponsortitle');
                let element2 = document.getElementById('partnerstitle');
                console.log(currentScrollY);
                if (currentScrollY > 9100 && currentScrollY < 10040) {
                    element.className = 'titleDuring';
                    document.getElementById('sponsorcontainer').style.backgroundColor = '#6C44D2';
                } else if (currentScrollY >= 10040) {
                    element.className = 'titleAfter';
                    document.getElementById('sponsorcontainer').style.backgroundColor = '#009BB3';
                } else {
                    element.className = 'title';
                }

                if (currentScrollY > 10896 && currentScrollY < 12216) {
                    element2.className = 'titlePDuring';
                } else if (currentScrollY >= 12216) {
                    element2.className = 'titlePAfter';
                } else {
                    element2.className = 'title2';
                }
                if (currentScrollY >= 11830) {
                    document.getElementById('button').style.width = '20vw';
                }
                else {
                    document.getElementById('button').style.width = '0px';
                }
                if (currentScrollY >= 13884) {
                    document.getElementById('patreonnote').style.width = '0%';
                    document.getElementById('patreondot').style.backgroundColor = '#D98471';
                }
                else {
                    document.getElementById('patreonnote').style.width = '100%';
                    document.getElementById('patreonnote').style.backgroundColor = '#634C73';
                    document.getElementById('patreondot').style.backgroundColor = '#634C73';
                }
                if (currentScrollY >= 14257) {
                    document.getElementById('contactOutline').style.backgroundColor = 'transparent';
                }
                else {
                    document.getElementById('contactOutline').style.backgroundColor = '#FFAC62';
                }
            };

            window.addEventListener("scroll", handleScroll, { passive: true });

            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [prevScrollY, isMobile]);

    var settings = {
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };

    if (isMobile) {
        return (
            <div className={classes.container}>
                <br />
                <br />
                <div className={classes.title}>
                    <h1 className={classes.h1}>Sponsors</h1>
                </div>
                <br />
                <br />
                <br />
                <Slider {...settings}>
                    <Paper elevation={24} className={classes.sponsor}>
                        <img className={classes.image} style={{ marginTop: '8vh' }} src={wheeleez} width="100%" ></img>
                    </Paper>
                    <Paper elevation={24} className={classes.sponsor}>
                        <img className={classes.image} style={{ margin: '2vh 0 0 1vw' }} src={nvidia} width="100%"></img>
                    </Paper>
                    <Paper elevation={24} className={classes.sponsor}>
                        <img className={classes.image} src={anet} width="100%"></img>
                    </Paper>
                </Slider>
                <br />
                <br />
                <div className={classes.title}>
                    <h1 className={classes.h1}>Partners</h1>
                </div>
                <br />
                <br />
                <br />
                <Slider {...settings}>
                    <Paper elevation={24} className={classes.sponsor}>
                        <img className={classes.image} src={vectorInk} style={{ width: '80%', margin: 'auto', marginTop: '2vh' }} width="100%" ></img>
                    </Paper>
                    <Paper elevation={24} className={classes.sponsor}>
                        <img className={classes.image} src={incwave} width="100%"></img>
                    </Paper>
                    <Paper elevation={24} className={classes.sponsor}>
                        <img className={classes.image} src={monster} style={{ marginTop: '7vh' }} width="100%"></img>
                    </Paper>
                </Slider>
                <div className={classes.button}>
                    <Button size="large">
                        Know About Our Sponsors
                </Button>
                </div>
                <Link className={classes.downvote}
                    to="patron"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000} >
                    <Arrowd id="pral" className={classes.arrow} />
                </Link>
            </div>
        );
    }
    return (
        <div id='sponsorcontainer' className='container'>
            <div id="sponsortitle" className='title'>
                <h1 className='titleFont' style={{ fontSize: '10vh', fontWeight: '100px' }}>SPONSORS</h1>
            </div>
            <div className='wheeleez'>
                <img height='100%' className='wheeleezimag' src={wheeleez} />
                <hr className='horisponsor'></hr>
            </div>
            <div className='nvidia'>
                <img height='100%' className='nvidiaimag' src={nvidia} />
                <hr className='horisponsor'></hr>
            </div>

            <div className='anet'>
                <img height='100%' className='anetimag' src={anet} />
                <hr className='horisponsor'></hr>
            </div>
            <Parallax
                blur={{ min: -100, max: 100 }}
                bgImage={parall}
                style={{ overflow: 'visible' }}
                bgImageStyle={{ position: 'absolute', marginTop: '150vh', height: '70vh', width: '70vw' }}
                bgImageAlt="the cat"
                strength={700}
            >
                <div style={{ height: '200vh' }}>
                </div>
            </Parallax>
            <div id="partnerstitle" className='title2'>
                <h1 className='titleFont'>PARTNERS</h1>
            </div>
            <div className='vectorInk'>
                <img height='100%' className='vectorimag' src={vectorInk} />
                <h2 className='vectortitle'>DESIGN PARTNER</h2>
                <hr className='horipartner'></hr>
            </div>
            <div className='inceptionwave'>
                <img height='100%' className='vectorimag' src={incwave} />
                <h2 className='vectortitle'>MEDIA PARTNER</h2>
                <hr className='horipartner'></hr>
            </div>
            <div className='monster'>
                <img height='100%' className='monsterimag' src={monster} />
                <h2 className='vectortitle'>ENERGY PARTNER</h2>
                <hr className='horipartner'></hr>
            </div>
            <div id='button' className='button'>
                <Button style={{ backgroundColor: '#005A82' }} size="lg" round>
                    Find out all sponsors
                </Button>
            </div>
        </div>
    );
}