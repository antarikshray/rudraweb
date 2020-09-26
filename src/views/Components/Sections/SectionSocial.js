import React, { useState, useEffect, useRef } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Parallax, Background } from 'react-parallax';
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';

import bgImage from 'assets/img/bg8.jpg';
import Arrowd from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles({

    container: {
        height: '105vh',
        zIndex: '10',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'gotham',
        fontSize: '6vw',
        textStrokeWidth: '5px',
        textStrokeColor: '#fff',
        textFillColor: 'transparent',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    instagram: {
        height: '65vh',
        width: '25vw',
        overflowY: 'scroll',
        paddingBottom: '-10vh',
        boxShadow: '0 10px 15px #000',
        transition: '250ms ease-in-out',
        backgroundColor: '#e3e3e3',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent'
        },
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    facebook: {
        height: '65vh',
        width: '25vw',
        zIndex: '1000',
        backgroundColor: 'white',
        boxShadow: '0 10px 15px #000',
        backgroundColor: '#e3e3e3',
        transition: '250ms ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    blog: {
        width: '25vw',
        height: '65vh',
        backgroundColor: 'white',
        boxShadow: '0 10px 15px #000',
        backgroundColor: '#e3e3e3',
        transition: '250ms ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },

    downvote: {
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

    '@media (max-width: 1024px)': {
        container: {
            height: '60vh',
        },
        title: {
            paddingTop: '50px',
            fontSize: '12vw',
            textStrokeWidth: '5px',
        },
        instagram: {
            height: '35vh',
            width: '30vw',
        },
        facebook: {
            height: '35vh',
            width: '30vw',
        },
        blog: {
            height: '35vh',
            width: '30vw',
        },
        downvote: {
            height: '3vh',
            opacity: '0.7'
        }
    },

    '@media (max-width: 800px)': {
        container: {
            height: '240vh',
            zIndex: '10'
        },
        title: {
            fontSize: '17vw',
            textStrokeWidth: '2px',
        },
        // content: {
        //     flexDirection: 'column',
        //     justifyContent: 'space-around',
        //     alignItems: 'center'
        // },
        instagram: {
            margin: '20px 0 20px 0',
            width: '80vw', 
            height: '65vh'
        },
        facebook: {
            margin: '20px 0 20px 0',
            width: '80vw',
            height: '65vh'
        },
        blog: {
            margin: '20px 0 20px 0',
            width: '80vw',
            height: '65vh'
        },
    },
});

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


export default function SectionSocial(props) {
    const classes = useStyles();

    return (
        <Parallax
            blur={{ min: -100, max: 100 }}
            bgImage={bgImage}
            bgImageAlt="the cat"
            strength={1300}
        >
            <div className={classes.container}>
                <div className={classes.title}>Social</div>
                <div className={classes.content}>
                    <Box className={classes.instagram}>
                        <InstagramEmbed
                            url='https://www.instagram.com/p/BtTMxnYhSlZ/'
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                    </Box>
                    <Box className={classes.facebook}>
                        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsrmteamrudra%2Fposts%2F2406254082726962%3A0&width=500"
                            style={{ overflow: "hidden", height: '100%', width: '100%' }}
                            scrolling="no"
                            frameborder="0"
                            allowtransparency="false"
                            allow="encrypted-media">
                        </iframe>
                    </Box>
                    <Box className={classes.blog}>
                        <blockquote class="embedly-card"><h4><a href="https://medium.com/@srmmarsroverteam">Team Rudra - Medium</a></h4><p>Read writing from Team Rudra on Medium. RUDRA is an official robotics team of SRM Institute of Science and Technology that specializes in building mars rover prototypes.</p></blockquote>
                    </Box>
                </div>
                <Link className={classes.downvote}
                    to="sponsorship"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000} >
                    <Arrowd id="pral" className={classes.arrow} />
                </Link>
            </div>
        </Parallax>
    );
}