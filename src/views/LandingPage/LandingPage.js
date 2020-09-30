import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Arrow from '@material-ui/icons/ArrowBackIos';
import { isMobile } from 'react-device-detect';
import Slider from "react-slick";
import Paper from '@material-ui/core/Paper';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundImage: 'linear-gradient(to bottom right, #fff, #D5E5F2)'
    },
    title: {
        textStrokeColor: '#2F4659',
        textFillColor: 'transparent',
        fontWeight: '600',
    },


    '@media (min-width: 800px)': {
        container: {
            height: '100vh',
            width: '200%',
            flexDirection: 'row',
        },
        right: {
            width: '130%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignitems: 'center',
            justifyContent: 'space-around',
            backgroundImage: 'linear-gradient(to bottom right, #fff, #D5E5F2)',
            transition: '400ms ease-in-out',
            // transform: 'translateX(100%)',
            filter: 'drop-shadow(10px 0 7px #000)'
        },
        rbreak: {
            flexBasis: '100%'
        },
        title: {
            fontSize: '10vw',
            textStrokeWidth: '3px',
            width: '100%'
        },
        tabs: {
            height: '45vh',
            width: '25vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: '#54728C',
            filter: 'drop-shadow(10px 0 7px #000)'
        },
        head: {
            fontSize: '1.5em',
            color: '#D5E5F2'
        },
        content: {
            fontSize: '1em',
            color: '#D5E5F2'
        },
        contenter: {
            width: '90%',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        swipe: {
            fontSize: '10em',
            marginRight: '10vw',
            transition: '200ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)'
            }
        }
    },
    '@media (max-width: 800px)': {
        container: {
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            overflowX: 'hidden'
        },
        title: {
            fontSize: '3em',
            textStrokeWidth: '1px',
            width: '100%',
            textAlign: 'center'
        },
        tabs: {
            width: '100%',
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: '#54728C', 
        },
        head: {
            fontSize: '1.7em',
            color: '#D5E5F2',
            textAlign: 'center'
        },
        contenter: {
            width: '90%',
            marginLeft: '12px'
        },
        content: {
            fontSize: '1em',
            color: '#D5E5F2',
            textAlign: 'center'
        }
    }
});


export default function LandingPage(props) {
    const classes = useStyles();

    var settings = {
        dots: true,
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

    const swipeRender = () => {
        document.getElementById('rightcont').style.transform = 'translateX(-100%)';
    }
    if (!isMobile) {
        return (
            <div className={classes.container}>
                <h1 className={classes.title}>What We Do</h1>
                <Arrow className={classes.swipe} onClick={swipeRender} />
                <div id="rightcont" className={classes.right}>
                    <div className={classes.tabs}>
                        <h2 className={classes.head}>Mechanical</h2>
                        <div className={classes.contenter}>
                            <p className={classes.content}>
                                A solid structure is vital for a rover to survive extreme terrains . The mechanical domain is responsible for designing, analyzing, simulating and manufacturing the rover.

                                If you think the gears running in your brain can transfer powerful ideas into reality, join us and try it for yourself.
                            <br /><br />
                            We are looking for utmost dedicated and creative thinkers, with basic engineering knowledge who can not only brainstorm good ideas, but also bring life to other's ideas.
                </p>
                        </div>
                    </div>
                    <div className={classes.tabs}>
                        <h2 className={classes.head}>Coding</h2>
                        <div className={classes.contenter}>
                            <p className={classes.content}>
                                Coding brings life to the rover using robust algorithms allowing it to perform various manoeuvres and tasks along with an Autonomous mode that enables the rover to perform tasks where human intervention is not feasible.
<br /><br />
                            Familiarity with basic C++ algorithms and Data structures are best fit for the domain. We expect you to quickly adapt to different platforms and device network protocols.
                </p>
                        </div>
                    </div>
                    <div className={classes.tabs}>
                        <h2 className={classes.head}>Electronics</h2>
                        <div className={classes.contenter}>
                            <p className={classes.content}>
                                Electronics is essential for the rover to perform all its tasks while being wirelessly controlled from the ground station.
<br />
                            Electronics domain is responsible for design and development of on board circuits and systems.
                            <br /><br />
                            We are looking for candidates with strong basics in electronics who are passionate about bringing ideas to life.
                </p>
                        </div>
                    </div>
                    <div className={classes.rbreak}></div>
                    <div className={classes.tabs}>
                        <h2 className={classes.head}>Science</h2>
                        <div className={classes.contenter}>
                            <p className={classes.content}>
                                The major aim of Mars mission is to look for the presence of life.
                                Science domain is responsible for making a payload that can perform assays to look for signs of life, biosignatures.
                        <br /><br />
                        The domain prefers candidates with strong understanding of basics of biology and chemistry along with a flair for multidisciplinary research.
                        <br /><br />
                            </p>
                        </div>
                    </div>
                    <div className={classes.tabs}>
                        <h2 className={classes.head}>Corporate</h2>
                        <div className={classes.contenter}>
                            <p className={classes.content}>A good team needs a good interface, and the corporate team makes or breaks the reputation of a team. We are responsible for the team’s outreach, resources, sponsors, documentation, and creatives.
                        <br /><br />
                        The Corporate team is also looking for graphic designers who can come up with innovative designs and ideas.
                        If you think you got what it takes, join the corporate domain of team Rudra, and experience it all, be the face of the team.
                </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={classes.container}>
                <h1 className={classes.title}>What We Do</h1>
                <Slider style={{width: '100%', filter: 'drop-shadow(10px 0 7px #000)'}} {...settings}>
                    <div className={classes.tabs}>
                        <h2 className={classes.head}>Mechanical</h2>
                        <div className={classes.contenter}>
                                <p className={classes.content}>
                                    A solid structure is vital for a rover to survive extreme terrains . The mechanical domain is responsible for designing, analyzing, simulating and manufacturing the rover.
    
                                    If you think the gears running in your brain can transfer powerful ideas into reality, join us and try it for yourself.
                                <br /><br />
                                We are looking for utmost dedicated and creative thinkers, with basic engineering knowledge who can not only brainstorm good ideas, but also bring life to other's ideas.
                    </p>
                    </div>
                    </div>
                    <div className={classes.tabs}>
                        <h2 className={classes.head}>Coding</h2>
                            <div className={classes.contenter}>
                                <p className={classes.content}>
                                    Coding brings life to the rover using robust algorithms allowing it to perform various manoeuvres and tasks along with an Autonomous mode that enables the rover to perform tasks where human intervention is not feasible.
    <br /><br />
                                Familiarity with basic C++ algorithms and Data structures are best fit for the domain. We expect you to quickly adapt to different platforms and device network protocols.
                    </p>
                            </div>
                    </div>
                    <div className={classes.tabs}>
                        <h2 className={classes.head}>Electronics</h2>
                            <div className={classes.contenter}>
                                <p className={classes.content}>
                                    Electronics is essential for the rover to perform all its tasks while being wirelessly controlled from the ground station.
    <br />
                                Electronics domain is responsible for design and development of on board circuits and systems.
                                <br /><br />
                                We are looking for candidates with strong basics in electronics who are passionate about bringing ideas to life.
                    </p>
                            </div>
                    </div>
                    <div className={classes.tabs}>
                        <h2 className={classes.head}>Science</h2>
                            <div className={classes.contenter}>
                                <p className={classes.content}>
                                    The major aim of Mars mission is to look for the presence of life.
                                    Science domain is responsible for making a payload that can perform assays to look for signs of life, biosignatures.
                            <br /><br />
                            The domain prefers candidates with strong understanding of basics of biology and chemistry along with a flair for multidisciplinary research.
                            <br /><br />
                                </p>
                            </div>
                    </div>
                    <div className={classes.tabs}>
                        <h2 className={classes.head}>Corporate</h2>
                                <div className={classes.contenter}>
                                    <p className={classes.content}>A good team needs a good interface, and the corporate team makes or breaks the reputation of a team. We are responsible for the team’s outreach, resources, sponsors, documentation, and creatives.
                            <br /><br />
                            The Corporate team is also looking for graphic designers who can come up with innovative designs and ideas.
                            If you think you got what it takes, join the corporate domain of team Rudra, and experience it all, be the face of the team.
                    </p>
                                </div>
                    </div>
                </Slider>
                <br /><br /><br />
            </div>
        );
    }
};