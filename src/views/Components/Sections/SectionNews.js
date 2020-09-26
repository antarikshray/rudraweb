import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";

import Arrowd from "@material-ui/icons/ArrowDropDown";

import Bgvideo from "assets/videos/warrovervidf.mp4";
import rudrawin from "assets/img/image/news/rudrawin2.webp";
import webinar from "assets/img/image/news/webinar.jpg";
import transistors from "assets/img/image/news/Transistors.png";
import altium from "assets/img/image/news/altium.jpg";
import ML from "assets/img/image/news/ML.jpg";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirectiob: 'column',
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: 'wrap',
        height: '110vh',
        width: '96vw',
    },
    vidBG: {
        position: 'absolute',
        height: '110vh',
        backgroundColor: '#000'
    },
    video: {
        height: '100%',
        zIndex: '-1'
    },
    first: {
        position: 'absolute'
    },
    second: {
        position: 'absolute'
    },
    third: {
        position: 'absolute'
    },
    title: {
        order: '2',
        fontFamily: 'cairoBlack',
        color: '#fff',
        fontSize: '10vw',
        fontWeight: '400',
        textStrokeWidth: '5px',
        textStrokeColor: '#fff',
        textFillColor: 'transparent',
        zIndex: '20'
    },
    news1: {
        order: '1',
        width: '25vw',
        backgroundColor: '#000',
        zIndex: '100',
        color: 'transparent',
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: '250ms ease-in-out',
        transformOrigin: 'top',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.72))',
            zIndex: '200',
            color: 'white',
        },
    },
    news2: {
        order: '3',
        width: '20vw',
        backgroundColor: '#000',
        zIndex: '100',
        color: 'transparent',
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: '250ms ease-in-out',
        transformOrigin: 'top',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.72))',
            zIndex: '200',
            color: 'white',
        },
    },
    news3: {
        order: '4',
        width: '24vw',
        backgroundColor: '#000',
        zIndex: '100',
        color: 'transparent',
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: '250ms ease-in-out',
        transformOrigin: 'top',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.72))',
            zIndex: '200',
            color: 'white',
        },
    },
    news4: {
        order: '5',
        width: '24vw',
        backgroundColor: '#000',
        zIndex: '100',
        color: 'transparent',
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: '250ms ease-in-out',
        transformOrigin: 'top',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.72))',
            zIndex: '200',
            color: 'white',
        },
    },
    news5: {
        order: '6',
        width: '24vw',
        backgroundColor: '#000',
        zIndex: '100',
        color: 'transparent',
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: '250ms ease-in-out',
        transformOrigin: 'top',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.72))',
            zIndex: '200',
            color: 'white',
        },
    },
    downvote: {
        height: '5vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrow: {
        fontSize: '100px',
        color: '#f0f0f0'
    },

    '@media (max-width: 1024px) and (min-width: 800px)': {
        title: {
            order: '1',
            textStrokeWidth: '2px'
        },
        news1: {
            order: '3',
            width: '38vw'
        },
        news2: {
            order: '5',
            width: '38vw'
        },
        news3: {
            order: '6',
            width: '38vw'
        },
        news4: {
            order: '8',
            width: '38vw'
        },
        news5: {
            order: '9',
            width: '38vw'
        },
        first: {
            position: 'relative',
            order: '2',
            flexBasis: '100%'
        },
        second: {
            position: 'relative',
            order: '4',
            flexBasis: '100%'
        },
        third: {
            position: 'relative',
            order: '7',
            flexBasis: '100%'
        }
    },
    '@media (max-width: 800px)': {
        container: {
            height: '80vh'
        },
        vidBG: {
            height: '80vh'
        },
        title: {
            textStrokeWidth: '2px'
        },
        news1: {
            order: '3',
            width: '35vw'
        },
        news2: {
            order: '5',
            width: '35vw'
        },
        news3: {
            order: '6',
            width: '35vw'
        },
        news4: {
            order: '8',
            width: '35vw'
        },
        news5: {
            order: '9',
            width: '35vw'
        },
    }
});


export default function SectionNews() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.vidBG}>
                <video autoPlay loop muted className={classes.video}>
                    <source src={Bgvideo} type="video/mp4" />
                </video>
            </div>
            <h1 className={classes.title}>
                NEWS
            </h1>
            <div className={classes.first}></div>
            <div className={classes.news1}>
                <a href="https://github.com/ReactTraining/react-router/issues/1147">
                    <img src={rudrawin} width='100%' height='100%' />
                </a>
                {/* <h2 className={classNames(classes.wrapper, classes.wrapper2)} >Indian Rover Challenge 2020</h2> */}
            </div>
            <div className={classes.second}></div>
            <div className={classes.news2}>
                <a href="https://medium.com/@srmmarsroverteam">
                    <img src={transistors} width='100%' height='100%' />
                </a>
                {/* <h2 className={classes.wrapper}>Update on URC 2020 due to COVID-19</h2> */}
            </div>
            <div className={classes.news3}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdOIH8bOgD2yHTuxl-pjZwa4DY2JfaT8UvJ15UO5n2URdJpWw/closedform">
                    <img src={webinar} width='100%' height='100%' />
                </a>
                {/* <h2 className={classes.wrapper}>Sponsored for 3D printers by ANET</h2> */}
            </div>
            <div className={classes.third}></div>
            <div className={classes.news4}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdOIH8bOgD2yHTuxl-pjZwa4DY2JfaT8UvJ15UO5n2URdJpWw/closedform">
                    <img src={altium} width='100%' height='100%' />
                </a>
                {/* <h2 className={classes.wrapper}>Sponsored for electronic components by Sparkfun</h2> */}
            </div>
            <div className={classes.news5}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdOIH8bOgD2yHTuxl-pjZwa4DY2JfaT8UvJ15UO5n2URdJpWw/closedform">
                    <img src={ML} width='100%' height='100%' />
                </a>
                {/* <h2 className={classes.wrapper}>New Blog Post on Medium</h2> */}
            </div>
            <Link className={classes.downvote}
                to="achievetitle"
                spy={true}
                smooth={true}
                offset={120}
                duration={1000} >
                <Arrowd id='newar' className={classes.arrow} />
            </Link>
        </div>
    );
}
