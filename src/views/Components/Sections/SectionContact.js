import React, { useState, useRef, useEffect } from 'react';
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Home from "assets/icon/home.svg";
import Phone from "assets/icon/phone.png";
import Twitter from "assets/icon/Twitter";
import Facebook from "assets/icon/Facebook";
import Instagram from "assets/icon/Instagram";
import Youtube from "assets/icon/Youtube";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { isMobile } from 'react-device-detect';


const useStyles = makeStyles({

    '@media (min-width: 800px)': {
        container: {
            height: '100vh',
            backgroundColor: '#1E6F79'
        },
        titleContainer: {
            display: 'flex',
            paddingTop: '5vh',
            height: '10vh',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFAC62',
            filter: 'drop-shadow(7px 0 7px #000)'
        },
        homeIcon: {
            height: '100px',
            color: '#FFAC62',
            padding: '10px',
            fontSize: '80px',
        },
        Icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid #FFAC62',
            borderRadius: '50%',
            height: '15vh',
            width: '7vw',
            margin: '0 0 2vh 3vw',
        },
        homeText: {
            color: '#FFAC62',
            flex: '1',
            alignItems: 'center',
            justifyContent: 'center',
            width: '15vw',
            fontSize: '2vh'
        },
        address: {
            position: 'absolute',
            marginTop: '20vh',
            marginLeft: '15vw',
            height: '10vh',
            flex: '1',
            flexDirection: 'vertical',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(10px 0 7px #000)'
        },
        phone: {
            position: 'absolute',
            marginTop: '20vh',
            marginLeft: '40vw',
            height: '10vh',
            flex: '1',
            flexDirection: 'vertical',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(10px 0 7px #000)'
        },
        email: {
            position: 'absolute',
            marginTop: '20vh',
            marginLeft: '65vw',
            height: '10vh',
            flex: '1',
            flexDirection: 'vertical',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(10px 0 7px #000)'
        },
        social: {
            position: 'absolute',
            marginTop: '60vh',
            marginLeft: '12vw',
            height: '20vh',
            width: '10vw',
            backgroundColor: 'tarnsparent',
            border: '4px solid #FFAC62',
            borderRadius: '50%',
            transition: '200ms ease-out',
            zIndex: '1000',
            '&:hover': {
                border: '4px solid #1E6F79',
                filter: 'none'
            },
            filter: 'drop-shadow(10px 0 10px #000)'
        },
        socialOver: {
            position: 'absolute',
            marginTop: '60vh',
            marginLeft: '12vw',
            height: '20vh',
            width: '10vw',
            backgroundColor: '#FFAC62',
            border: '5px solid #FFAC62',
            borderRadius: '50%',
            transform: 'scale(0)',
            transition: '200ms ease-in-out',
            zIndex: '100',
            filter: 'drop-shadow(10px 0 10px #000)'
        },
        facebook: {
            marginLeft: '32vw',
        },
        instagram: {
            marginLeft: '52vw'
        },
        youtube: {
            marginLeft: '72vw'
        },
        outline: {
            position: 'absolute',
            width: '70vw',
            height: '35vh',
            marginTop: '25vh',
            marginLeft: '12vw',
            border: '5px solid #FFAC62',
            borderRadius: '2px',
            // backgroundColor: '#FFAC62',
            transition: '500ms ease-in-out',
            filter: 'drop-shadow(10px 0 10px #000)'
        }
    },

    '@media (max-width: 800px)': {
        container: {
            height: '100vh',
            backgroundColor: '#393A40',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
        },
        Title: {
            height: '5vh',
            width: '100%',
            marginTop: '50px',
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
            textAlign: 'center',
            filter: 'drop-shadow(10px 0 10px #000)'
        },
        break: {
            flexBasis: '100%',
            width: '100%'
        },
        contact: {
            height: '70vh',
            width: '50vw',
            backgroundColor: '#393A40',
            border: '5px solid #8896BF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            filter: 'drop-shadow(10px 0 10px #000)'
        },
        handles: {
            height: '50vh',
            width: '30vw',
            display: 'flex',
            flexDirection: 'column',
            alignitems: 'center',
            justifyContent: 'space-around'
        },
        icon: {
            color: '#8896BF',
            fontSize: '3em',
        },
        socialIcons: {
            color: '#8896BF',
            fontSize: '4em',
            margin: 'auto',
            filter: 'drop-shadow(10px 0 10px #000)'
        },
        Text: {
            textAlign: 'center',
            padding: '0 10px 0 10px',
            color: '#8896BF',
            fontSize: '1em',
            width: '100%',
            wordWrap: 'break-word'
        }
    }
});

export default function SectionPatreon(props) {
    const classes = useStyles();
    const [Color, setColor] = useState(["#FFAC62", "#FFAC62", "#FFAC62", "#FFAC62"]);
    if (!isMobile) {
        return (
            <div className={classes.container}>
                <div id="contactOutline" className={classes.outline}></div>
                <div className={classes.titleContainer}>
                    <h1 style={{ fontWeight: 'bold', fontSize: '12vh', paddingTop: '5vh' }}>YOU CAN CONTACT US AT</h1>
                </div>
                <div className={classes.address}>
                    <div className={classes.Icon}>
                        <img className={classes.homeIcon} src={Home} />
                    </div>
                    <div className={classes.homeText}>
                        C-404/405 - Placement Cell, SRM IST, Kattankulathur, Chennai - 603203
                </div>
                </div>
                <div className={classes.phone}>
                    <div className={classes.Icon}>
                        <img className={classes.homeIcon} src={Phone} />
                    </div>
                    <div className={classes.homeText}>
                        +91 78606 77244,
                        +91 83403 97548
                </div>
                </div>
                <div className={classes.email}>
                    <div className={classes.Icon}>
                        <div className={classes.homeIcon} style={{ marginTop: '30px' }}> @ </div>
                    </div>
                    <div className={classes.homeText}>
                        srmmarsroverteam@gmail.com
                </div>
                </div>
                <a href="https://twitter.com/srmrudra">
                    <div id="twitter" className={classes.socialOver}></div>
                    <div onMouseEnter={() => {
                        document.getElementById("twitter").style.transform = "scale(1.1)";
                        setTimeout(() => {
                            setColor(["#1E6F79", "#FFAC62", "#FFAC62", "#FFAC62"]);
                        }, 100);
                    }}
                        onMouseLeave={() => {
                            document.getElementById("twitter").style.transform = "scale(0)";
                            setTimeout(() => {
                                setColor(["#FFAC62", "#FFAC62", "#FFAC62", "#FFAC62"]);
                            }, 100);
                        }}
                        className={classes.social}>
                        <Twitter color={Color[0]} height="15vh" width="7vw" />
                    </div>
                </a>

                <a href="https://www.facebook.com/srmteamrudra">
                    <div id="facebookContact" className={classNames(classes.socialOver, classes.facebook)} ></div>
                    <div onMouseEnter={() => {
                        document.getElementById("facebookContact").style.transform = "scale(1.1)";
                        setTimeout(() => {
                            setColor(["#FFAC62", "#1E6F79", "#FFAC62", "#FFAC62"]);
                        }, 100);
                    }}
                        onMouseLeave={() => {
                            document.getElementById("facebookContact").style.transform = "scale(0)";
                            setTimeout(() => {
                                setColor(["#FFAC62", "#FFAC62", "#FFAC62", "#FFAC62"]);
                            }, 100);
                        }}
                        className={classNames(classes.social, classes.facebook)}>
                        <Facebook color={Color[1]} height="15vh" width="7vw" />
                    </div>
                </a>

                <a href="https://www.instagram.com/team_rudra/">
                    <div id="instagramContact" className={classNames(classes.socialOver, classes.instagram)} ></div>
                    <div onMouseEnter={() => {
                        document.getElementById("instagramContact").style.transform = "scale(1.1)";
                        setTimeout(() => {
                            setColor(["#FFAC62", "#FFAC62", "#1E6F79", "#FFAC62"]);
                        }, 100);
                    }}
                        onMouseLeave={() => {
                            document.getElementById("instagramContact").style.transform = "scale(0)";
                            setTimeout(() => {
                                setColor(["#FFAC62", "#FFAC62", "#FFAC62", "#FFAC62"]);
                            }, 100);
                        }}
                        className={classNames(classes.social, classes.instagram)}>
                        <Instagram color={Color[2]} height="15vh" width="7vw" />
                    </div>
                </a>

                <a href="https://www.youtube.com/channel/UC2Lu4ABOxd43mizJGFATF_w">
                    <div id="youtubeContact" className={classNames(classes.socialOver, classes.youtube)} ></div>
                    <div onMouseEnter={() => {
                        document.getElementById("youtubeContact").style.transform = "scale(1.1)";
                        setTimeout(() => {
                            setColor(["#FFAC62", "#FFAC62", "#FFAC62", "#1E6F79"]);
                        }, 100);
                    }}
                        onMouseLeave={() => {
                            document.getElementById("youtubeContact").style.transform = "scale(0)";
                            setTimeout(() => {
                                setColor(["#FFAC62", "#FFAC62", "#FFAC62", "#FFAC62"]);
                            }, 100);
                        }}
                        className={classNames(classes.social, classes.youtube)}>
                        <Youtube color={Color[3]} height="15vh" width="7vw" />
                    </div>
                </a>
            </div>
        );
    }
    return (
        <div className={classes.container}>
            <div className={classes.Title}>
                <h1 className={classes.h1}>Contact Us At!</h1>
            </div>
            <div className={classes.break}></div>
            <Paper className={classes.contact}>
                <br />
                <HomeIcon className={classes.icon} />
                <div className={classes.Text}>
                    C-404/405 - Placement Cell, SRM IST, Kattankulathur, Chennai - 603203
                </div>
                <br />
                <PhoneIcon className={classes.icon} />
                <div className={classes.Text}>
                    +91 78606 77244,
                    +91 83403 97548
                </div>
                <br />
                <EmailIcon className={classes.icon} />
                <div className={classes.Text}>
                    srmmarsroverteam@gmail.com
                </div>
                <br />
            </Paper>
            <div className={classes.handles}>
                <a href="https://twitter.com/srmrudra">
                    <TwitterIcon className={classes.socialIcons} />
                </a>
                <a href="https://www.facebook.com/srmteamrudra">
                    <FacebookIcon className={classes.socialIcons} />
                </a>
                <a href="https://www.instagram.com/team_rudra/">
                    <InstagramIcon className={classes.socialIcons} />
                </a>
                <a href="https://www.youtube.com/channel/UC2Lu4ABOxd43mizJGFATF_w">
                    <YouTubeIcon className={classes.socialIcons} />
                </a>
            </div>
        </div>
    );

}
