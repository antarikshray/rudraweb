import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Arrowd from "@material-ui/icons/ArrowDropDown";
import { isMobile } from 'react-device-detect';
import { Link, animateScroll as scroll } from "react-scroll";

import director from 'assets/img/image/directoret.png';
import advisor from 'assets/img/image/rathinamf.png';

const useStyles = makeStyles({

    /* Color Theme Swatches in Hex */
    // .alp-impressions-XXV-1-hex { color: #634C73; }
    // .alp-impressions-XXV-2-hex { color: #59518C; }
    // .alp-impressions-XXV-3-hex { color: #F2A679; }
    // .alp-impressions-XXV-4-hex { color: #D98471; }
    // .alp-impressions-XXV-5-hex { color: #8C544F; }
    '@keyframes mymove': {
        '0%': { marginLeft: '-10vw' },
        '100%': { marginLeft: '150vw' },
    },
    '@media (min-width: 800px)': {
        container: {
            marginTop: '-30vh',
            height: '200vh',
            backgroundColor: '#F2A679',
            clipPath: 'polygon(0% 4%, 0% 100%, 100% 100%, 100% 6%, 99% 6%, 99% 6%, 99% 8%, 99% 8%, 98% 8%, 97% 7%, 97% 6%, 96% 9%, 96% 8%, 96% 9%, 95% 9%, 94% 8%, 94% 8%, 94% 9%, 92% 10%, 92% 9%, 92% 9%, 91% 8%, 92% 10%, 91% 9%, 90% 9%, 90% 9%, 90% 8%, 89% 8%, 88% 10%, 87% 8%, 87% 8%, 87% 8%, 86% 10%, 86% 10%, 86% 9%, 85% 9%, 84% 8%, 83% 11%, 83% 11%, 83% 10%, 82% 9%, 82% 9%, 81% 10%, 81% 11%, 81% 11%, 80% 11%, 78% 11%, 78% 11%, 78% 10%, 78% 10%, 77% 10%, 77% 9%, 76% 9%, 76% 9%, 76% 8%, 75% 8%, 75% 11%, 74% 12%, 74% 11%, 74% 10%, 74% 10%, 73% 9%, 73% 9%, 73% 9%, 73% 9%, 73% 9%, 73% 7%, 72% 9%, 72% 10%, 72% 9%, 72% 9%, 72% 10%, 71% 9%, 71% 8%, 71% 10%, 70% 13%, 70% 12%, 70% 11%, 70% 10%, 69% 11%, 68% 10%, 68% 10%, 68% 10%, 68% 9%, 68% 9%, 68% 9%, 68% 9%, 67% 9%, 67% 9%, 67% 7%, 66% 9%, 66% 9%, 66% 9%, 66% 9%, 65% 11%, 65% 11%, 65% 10%, 64% 9%, 64% 9%, 64% 10%, 64% 10%, 63% 8%, 63% 8%, 63% 9%, 63% 9%, 63% 9%, 63% 9%, 62% 9%, 62% 8%, 62% 8%, 62% 8%, 62% 10%, 62% 10%, 61% 12%, 61% 11%, 61% 11%, 61% 10%, 61% 9%, 60% 9%, 59% 9%, 59% 9%, 59% 9%, 59% 9%, 58% 6%, 58% 6%, 58% 8%, 58% 8%, 58% 8%, 58% 8%, 57% 8%, 57% 8%, 57% 8%, 57% 8%, 56% 8%, 56% 8%, 56% 8%, 56% 8%, 56% 8%, 55% 8%, 52% 8%, 52% 8%, 52% 7%, 53% 7%, 53% 8%, 51% 9%, 51% 8%, 50% 8%, 50% 8%, 50% 8%, 48% 8%, 48% 8%, 48% 7%, 48% 7%, 48% 8%, 48% 8%, 47% 8%, 47% 8%, 46% 7%, 46% 7%, 46% 8%, 46% 8%, 46% 8%, 46% 6%, 45% 7%, 45% 7%, 45% 7%, 45% 7%, 44% 7%, 44% 7%, 44% 7%, 43% 8%, 42% 9%, 42% 9%, 42% 8%, 42% 8%, 42% 8%, 40% 7%, 40% 7%, 40% 7%, 40% 8%, 40% 8%, 40% 8%, 40% 7%, 40% 7%, 39% 7%, 39% 7%, 39% 8%, 39% 8%, 39% 8%, 39% 8%, 38% 7%, 38% 7%, 38% 7%, 37% 8%, 37% 8%, 37% 8%, 37% 7%, 37% 7%, 36% 8%, 36% 8%, 36% 7%, 36% 7%, 35% 8%, 33% 8%, 33% 7%, 33% 6%, 33% 7%, 33% 7%, 32% 7%, 32% 6%, 31% 7%, 31% 7%, 31% 6%, 30% 9%, 30% 9%, 30% 9%, 29% 9%, 29% 9%, 29% 9%, 29% 9%, 29% 9%, 28% 10%, 28% 10%, 27% 7%, 27% 7%, 27% 8%, 27% 8%, 27% 9%, 27% 9%, 26% 9%, 25% 10%, 25% 10%, 25% 9%, 24% 10%, 24% 10%, 24% 10%, 24% 10%, 24% 10%, 24% 9%, 24% 9%, 23% 10%, 23% 10%, 23% 10%, 22% 10%, 22% 10%, 22% 10%, 22% 10%, 22% 10%, 22% 10%, 22% 10%, 22% 10%, 22% 9%, 22% 9%, 21% 9%, 21% 9%, 21% 8%, 21% 8%, 21% 8%, 20% 8%, 20% 8%, 19% 8%, 19% 8%, 19% 8%, 18% 5%, 18% 5%, 18% 6%, 18% 6%, 17% 6%, 17% 6%, 17% 5%, 16% 5%, 16% 6%, 16% 6%, 16% 6%, 14% 5%, 14% 5%, 14% 5%, 12% 6%, 12% 6%, 12% 6%, 12% 6%, 12% 7%, 12% 7%, 12% 7%, 12% 6%, 12% 6%, 11% 6%, 11% 6%, 11% 6%, 9% 5%, 9% 5%, 9% 5%, 9% 5%, 9% 6%, 9% 6%, 9% 6%, 9% 6%, 9% 5%, 8% 5%, 8% 5%, 8% 6%, 8% 6%, 8% 6%, 8% 5%, 8% 5%, 8% 5%, 7% 5%, 7% 5%, 6% 5%, 6% 5%, 6% 5%, 6% 5%, 6% 5%, 6% 5%, 5% 5%, 5% 4%, 5% 4%, 5% 5%, 4% 5%, 4% 5%, 4% 5%, 4% 5%, 4% 5%, 4% 5%, 4% 6%, 4% 6%, 4% 5%, 4% 5%, 3% 5%, 3% 5%, 3% 5%, 3% 5%, 3% 5%, 3% 5%, 3% 5%, 3% 5%, 3% 5%, 3% 5%, 3% 5%, 3% 5%, 3% 5%, 2% 5%, 2% 5%, 2% 5%, 2% 5%, 1% 5%, 1% 5%, 1% 5%, 0% 5%, 0% 5%, 0% 5%, 0% 5%)',
        },
        title: {
            position: 'absolute',
            width: '130vw',
            height: '10vh',
            marginTop: '40vh',
            borderTop: '3px solid white',
            borderBottom: '3px solid white',
            backgroundColor: '#59518C'
        },
        h1: {
            color: 'white',
            marginLeft: '-28vw',
            animation: '$mymove 10s infinite linear',
        },
        note: {
            position: 'absolute',
            marginTop: '152vh',
            height: '40vh',
            width: '88vw',
            backgroundColor: '#D98471',
            zIndex: '100',
            border: '7px solid white',
            clipPath: 'polygon(50% 0, 50% 75%, 100% 75%, 100% 100%, 0 100%, 0 0)',
        },
        nover: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: '#F2A679',
            zIndex: '1000',
            transition: '2s ease-in-out'
        }
    },
    '@media (max-width: 800px)': {
        container: {
            height: '180vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: '#394447'
        },
        title: {
            width: '210vw',
            height: '6vh',
            backgroundColor: '#9FBDC7',
            borderTop: '3px solid white',
            borderBottom: '3px solid white',
        },
        h1: {
            color: 'white',
            marginLeft: '-10vw',
            transform: 'translateY(-40%)',
            animation: '$mymove 10s infinite linear',
        },
        box: {
            height: '42.5vh',
            width: '80vw',
            backgroundColor: '#9FBDC7',
            border: '6px solid white'
        },
        imag: {
            width: '100%'
        },
        subTitle: {
            color: '#768D94'
        },
        content: {
            textAlign: 'center',
            filter: 'drop-shadow(10px 0 10px #000)'
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

export default function SectionPatreon(props) {
    const classes = useStyles();

    if (!isMobile) {
        return (
            <div className={classes.container}>
                <div className={classes.title}>
                    <h1 className={classes.h1}>MEET OUR PATRONS</h1>
                </div>
                <Parallax
                    style={{ position: 'absolute', overflow: 'visible' }}
                    bgImageStyle={{ backgroundColor: '#59518C', position: 'absolute', left: '20vw', marginTop: '80vh', height: '60vh', width: '30vw', border: '7px solid white' }}
                    bgImage={director}
                    strength={300}
                >
                    <div style={{ height: '155vh', width: '40vw' }}>
                        <h1 style={{ position: 'absolute', left: '5vw', bottom: '10vh', color: '#634C73', fontWeight: 'bold' }}>Dr. C. Muthamizhchelvan</h1>
                        <h4 style={{ position: 'absolute', left: '5vw', bottom: '7vh', color: '#634C73', fontWeight: 'bold' }}>DIRECTOR, E&T</h4>
                    </div>
                </Parallax>
                <Parallax
                    style={{ position: 'absolute', left: '40vw', overflow: 'visible' }}
                    bgImageStyle={{ backgroundColor: '#59518C', position: 'absolute', left: '20vw', marginTop: '100vh', height: '60vh', width: '30vw', border: '7px solid white' }}
                    bgImage={advisor}
                    strength={300}
                >
                    <div style={{ height: '170vh', width: '40vw' }}>
                        <h1 style={{ position: 'absolute', left: '5vw', bottom: '8vh', color: '#634C73', fontWeight: 'bold' }}>Dr. A. Rathinam</h1>
                        <h4 style={{ position: 'absolute', left: '5vw', bottom: '5vh', color: '#634C73', fontWeight: 'bold' }}>TEAM FACULTY ADVISOR</h4>
                    </div>
                </Parallax>
                {/* animations done in SectionSponsorship */}
                <span id="patreondot" style={{ position: 'fixed', top: '80vh', right: '7vw', height: '100px', width: '100px', backgroundColor: '#634C73', borderRadius: '50%', display: 'inline-block' }} class="dot"></span>
                <div className={classes.note}>
                    <div id="patreonnote" className={classes.nover}>
                    </div>
                    <h1 style={{ color: '#634C73', zIndex: '500', marginLeft: '3vw' }}>Thank you</h1>
                    <h3 style={{ color: '#634C73', zIndex: '500', width: '37vw', marginLeft: '3vw' }}>
                        The entire team is highly grateful and thankful to the Director,
                        Engineering & Technology, Dr. C.Muthamizhchelvan, SRM Management and also
                        for the guidance of the faculty Mentor/advisor Dr .A. Rathinam. As these
                        developments and achievements of the team became reality only by the unstinted
                            support of these patrons.</h3>
                </div>
            </div>
        );
    }
    return (
        <div className={classes.container}>
            <br />
            <div className={classes.title}>
                <h3 className={classes.h1}>MEET OUR PATRONS</h3>
            </div>
            <Paper elevation={24} className={classes.box}>
                <img className={classes.image} src={director} width="100%" ></img>
            </Paper>
            <h3 className={classes.subTitle}>
                Dr. C. Muthamizhchelvan
            </h3>
            <h4 className={classes.subTitle}>
                Director, E&T
            </h4>
            <Paper elevation={24} className={classes.box}>
                <img className={classes.image} src={advisor} width="100%" ></img>
            </Paper>
            <h3 className={classes.subTitle}>
                Dr. A. Rathinam
            </h3>
            <h4 className={classes.subTitle}>
                Team Faculty Advisor
            </h4>
            <div className={classes.content}>
                <mark style={{backgroundColor: '#9FBDC7', color: '#394447', fontSize: '1.4em'}}>
                        The entire team is highly grateful and thankful to the Director,
                        Engineering & Technology, Dr. C.Muthamizhchelvan, SRM Management and also
                        for the guidance of the faculty Mentor/advisor Dr .A. Rathinam. As these
                        developments and achievements of the team became reality only by the unstinted
                            support of these patrons.</mark>
            </div>
            <Link className={classes.downvote}
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000} >
                <Arrowd id="pral" className={classes.arrow} />
            </Link>
        </div>
    );
};