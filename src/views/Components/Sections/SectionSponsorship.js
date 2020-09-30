import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Parallax, Background } from 'react-parallax';
import Button from "components/CustomButtons/Button.js";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Arrowd from "@material-ui/icons/ArrowDropDown";
import wheeleez from 'assets/img/image/sponsors/wheeleez.webp';
import nvidia from 'assets/img/image/sponsors/Nvidia_logo.webp';
import anet from 'assets/img/image/sponsors/anet.webp';
import unfynite from 'assets/img/image/sponsors/unfynite.webp';
import incwave from 'assets/img/image/sponsors/inception_wave.webp';
import monster from 'assets/img/image/sponsors/monster.webp';
import parall from "assets/img/sponsorbg.webp";
import { isMobile } from 'react-device-detect';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles({

    '@media (min-width: 800px)': {
        container: {
            height: '345vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        title: {
            fontSize: '5em',
            fontWeight: '600',
            textStrokeWidth: '2px',
            textStrokeColor: '#D9D9D9',
            textFillColor: 'transparent',
        },
        sponsor: {
            height: '40vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            margin: '2vh 0'
        },
        icon: {
            width: '30%'
        },
        contentl: {
            fontSize: '1.5em',
            lineHeight: '1.5em',
            width: '60%',
            textAlign: 'left',
            color: '#8C8C8C'
        },
        contentr: {
            fontSize: '1.5em',
            lineHeight: '1.5em',
            width: '60%',
            textAlign: 'right',
            color: '#8C8C8C'
        }
    },
    '@media (max-width: 800px)': {
        container: {
            backgroundColor: '#12121C',
            height: '130vh',
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
    }
});


export default function SectionSponsorship(props) {
    const classes = useStyles();

    const prevScrollY = useRef(0);

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
                        <img className={classes.image} src={unfynite} style={{ width: '80%', margin: 'auto', marginTop: '2vh' }} width="100%" ></img>
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
        <Parallax
            bgImage={parall}
            bgImageAlt="the cat"
            strength={700}
        >
            <div className={classes.container}>
                <h1 className={classes.title}>MEET OUR SPONSORS</h1>
                <div className={classes.sponsor}>
                    <img src={wheeleez} className={classes.icon} height="100%" width="100%" />
                    <p className={classes.contentr}>
                        Wheeleez is the sponsor for our rover wheels. They, <br />provide us woth top
                        quality balloon wheels for better<br /> traversal on sandy and difficult terrain.
                    </p>
                </div>
                <div className={classes.sponsor}>
                    <img src={nvidia} className={classes.icon} height="100%" width="100%" />
                    <p className={classes.contentr}>
                        Nvidia Corporation is a multinational technology<br /> which designs
                    GPUs, as well as CPUs for mobile<br /> computing. Nvidia sponsored
                    the Jetson TX2 dev <br />board
                    which is used as a powerful brain on the rover.
                    </p>
                </div>
                <div className={classes.sponsor}>
                    <img src={anet} className={classes.icon} height="100%" width="100%" />
                    <p className={classes.contentr}>
                        Anet 3D printers provide you with comfortable home <br />
                    based 3D printing technology using multiple materials.<br />
                    Anet sponsored us with one to print Tough joints and <br />
                    Ligaments of the Rover.
                    </p>
                </div>
                <h1 className={classes.title}>OUR PARTNERS</h1>
                <div className={classes.sponsor}>
                    <p className={classes.contentl}>
                        Unfynite is a Design Company for Businesses
                    <br />that provide us with Notification Posters to
                    <br />Shoutouts!
                    </p>
                    <img src={unfynite} className={classes.icon} height="100%" width="100%" />
                </div>
                <div className={classes.sponsor}>
                    <p className={classes.contentl}>
                        Inception Wave is a Student Chapter that focusses <br />
                    on bridging the gap between businesses. They are <br />
                    responsible for shoutouts and Media Reach for our endeavours.
                    </p>
                    <img src={incwave} className={classes.icon} height="100%" width="100%" />
                </div>
                <div className={classes.sponsor}>
                    <p className={classes.contentl}>
                        Monster Energy is an International Energy Drink producer. <br />
                    They provide us thirst wrenching energy drinks with great taste<br />
                    and help us outperform competitors.
                    </p>
                    <img src={monster} className={classes.icon} height="100%" width="100%" />
                </div>
                <br />
                <br />
                <br />
            </div>
        </Parallax>
    );
}