import React, { useState, useEffect, useRef } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Parallax, Background } from 'react-parallax';
import { Link, animateScroll as scroll } from "react-scroll";
import { makeStyles } from '@material-ui/core/styles';

import bgImage from 'assets/img/bg8.jpg';
import Arrowd from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles({
    '@media (max-width: 800px)': {
        container: {
            height: '250vh',
            zIndex: '10'
        },
        title: {
            position: 'absolute',
            marginLeft: '8vw',
            marginTop: '12vh',
            fontFamily: 'gotham',
            fontSize: '12vh',
            textStrokeWidth: '7px',
            textStrokeColor: '#fff',
            textFillColor: 'transparent',
        },
        outerInsta: {
            position: 'absolute',
            marginLeft: '5vw',
            marginTop: '25vh',
            width: '80vw',
            overflow: 'hidden',
            borderRadius: '2%',
            boxShadow: '3px 3px 7px 7px #888888',
            transition: '500ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
            }
        },
        instagram: {
            height: '65vh',
            width: '82vw',
            overflowY: 'scroll',
            paddingRight: '-10vw',
            transition: '500ms ease-in-out',
        },
        facebook: {
            position: 'absolute',
            marginLeft: '5vw',
            marginTop: '95vh',
            width: '80vw',
            zIndex: '1000',
            overflowX: 'hidden'
        },
        facebookback: {
            position: 'absolute',
            backgroundColor: 'white',
            marginLeft: '5vw',
            marginTop: '95vh',
            height: '66vh',
            width: '80vw',
            zIndex: '100',
            borderRadius: '2%',
            boxShadow: '3px 3px 7px 7px #888888',
        },
        blog: {
            position: 'absolute',
            marginLeft: '5vw',
            width: '80vw',
            height: '65vh',
            marginTop: '165vh',
            backgroundColor: 'white',
            borderRadius: '2%',
            boxShadow: '3px 3px 7px 7px #888888',
            transition: '500ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
            }
        },
        downvote: {
            position: 'absolute',
            marginLeft: '37vw',
            marginTop: '-7vh',
            height: '50px',
            width: '50px',
            zIndex: '10000',
        },
        arrow: {
            width: "50px",
            height: "50px",
            marginLeft: "8px",
            transition: '1s',
            color: '#ffffdd',
        },
    },
    '@media (min-width: 800px)': {
        container: {
            height: '100vh',
            zIndex: '10'
        },
        outerInsta: {
            position: 'absolute',
            marginLeft: '-50vw',
            marginTop: '20vh',
            width: '24vw',
            overflow: 'hidden',
            borderRadius: '2%',
            boxShadow: '3px 3px 7px 7px #888888',
            transition: '500ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
            }
        },
        instagram: {
            height: '65vh',
            width: '25vw',
            overflowY: 'scroll',
            paddingRight: '-10vw',
            transition: '500ms ease-in-out',
        },
        facebook: {
            position: 'absolute',
            marginLeft: '-50vw',
            marginTop: '22vh',
            width: '10vw',
            zIndex: '1000',
            transition: '500ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
            }
        },
        facebookback: {
            position: 'absolute',
            backgroundColor: 'white',
            marginLeft: '-50vw',
            marginTop: '20vh',
            height: '65vh',
            width: '26vw',
            zIndex: '100',
            borderRadius: '2%',
            boxShadow: '3px 3px 7px 7px #888888',
            transition: '500ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
            }
        },
        blog: {
            position: 'absolute',
            marginLeft: '-50vw',
            width: '25%',
            height: '65vh',
            marginTop: '20vh',
            backgroundColor: 'white',
            borderRadius: '2%',
            boxShadow: '3px 3px 7px 7px #888888',
            transition: '500ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
            }
        },
        title: {
            position: 'absolute',
            marginLeft: '35vw',
            marginTop: '10vh',
            fontFamily: 'gotham',
            fontSize: '15vh',
            textStrokeWidth: '10px',
            textStrokeColor: '#fff',
            textFillColor: 'transparent',
        },
        downvote: {
            position: 'absolute',
            marginLeft: '45.3vw',
            marginTop: '90vh',
            height: '50px',
            width: '50px',
            zIndex: '10000',
        },
        arrow: {
            width: "100px",
            height: "100px",
            transition: '1s',
            color: '#fff',
        },
    }
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

    const prevScrollY = useRef(0);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        ////////////////////////////resize event///////////////////////////
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
            console.log(windowDimensions.width);
        }
        window.addEventListener('resize', handleResize);

        ////////////////scroll event//////////////////////////
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            prevScrollY.current = currentScrollY;
            if (currentScrollY > 7867 && currentScrollY < 9000) {
                setTimeout(function(){
                    document.getElementById('instagram').style.marginLeft = "5vw";
                }, 100);
                setTimeout(function(){
                    document.getElementById('blog').style.marginLeft = "35vw";
                }, 700);
                setTimeout(function(){
                    document.getElementById('facebook').style.marginLeft = "65vw";
                    document.getElementById('faceback').style.marginLeft = "65vw";
                }, 1400);
            }else {
                setTimeout(function(){
                    document.getElementById('instagram').style.marginLeft = "-50vw";
                }, 100);
                setTimeout(function(){
                    document.getElementById('blog').style.marginLeft = "-50vw";
                }, 700);
                setTimeout(function(){
                    document.getElementById('facebook').style.marginLeft = "-50vw";
                    document.getElementById('faceback').style.marginLeft = "-50vw";
                }, 1400);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
        return () => window.removeEventListener('resize', handleResize);
    }, [prevScrollY]);



    return (
        <Parallax
            blur={{ min: -100, max: 100 }}
            bgImage={bgImage}
            bgImageAlt="the cat"
            strength={1300}
        >
            <div className={classes.container}>
                <Link className={classes.downvote}
                    to="aboutus"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000} >
                    <Arrowd id="pral" className={classes.arrow} />
                </Link>
                <div id="instagram" className={classes.outerInsta}>
                    <div className={classes.instagram}>
                        <InstagramEmbed
                            url='https://www.instagram.com/p/BtTMxnYhSlZ/'
                            maxWidth={480}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                    </div>
                </div>
                <div id="facebook" className={classes.facebook}>
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsrmteamrudra%2Fposts%2F2406254082726962%3A0&width=500"
                        width="500"
                        height="548"
                        style={{ overflow: "hidden", borderRadius: '2%' }}
                        scrolling="no"
                        frameborder="0"
                        allowTransparency="true"
                        allow="encrypted-media">
                    </iframe>
                </div>
                <div id="blog" className={classes.blog}>
                    <blockquote class="embedly-card"><h4><a href="https://medium.com/@srmmarsroverteam">Team Rudra - Medium</a></h4><p>Read writing from Team Rudra on Medium. RUDRA is an official robotics team of SRM Institute of Science and Technology that specializes in building mars rover prototypes.</p></blockquote>
                </div>
                <div id="faceback" className={classes.facebookback}></div>
                <div className={classes.title}>Social</div>
            </div>
        </Parallax>
    );
}