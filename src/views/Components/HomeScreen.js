import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link, animateScroll as scroll } from "react-scroll";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Parallax from "components/Parallax/Parallax.js";
// import { Parallax, Background } from 'react-parallax';
// sections for this page
import SectionNavbars from "./Sections/SectionNavbars";
import SectionPills from "./Sections/SectionPills";
import SectionCarousel from "./Sections/SectionCarousel";
import SectionAchievement from "./Sections/SectionAchievement";
import SectionVideo from "./Sections/SectionVideo";
import SectionTeam from "./Sections/SectionTeam";
import AchieveTitle from "./Sections/SectionAchievetitle";
import SectionNews from "./Sections/SectionNews";
import SectionSocial from "./Sections/SectionSocial";
import SectionSponsorship from "./Sections/SectionSponsorship";
import SectionPatreons from "./Sections/SectionPatreons";
import SectionContact from "./Sections/SectionContact";
import Footer from "./Sections/SectionFooter";

//images and icons
import parall from "assets/img/2k20Team.webp";
import Arrowd from "@material-ui/icons/ArrowDropDown";


//my css
import "assets/css/my.css";
// import styles from "assets/jss/material-kit-react/views/homeScreen.js";

// const useStyles = makeStyles(styles);

const GALLERY = "GALLERY";
const ACHIEVEMENTS = "ACHIEVEMENTS";
const TEAM = "TEAM";
const titgl = '30vw';
const tital = '20vw';

var ctr = 0;
// const IDs = ['pral', 'abts', 'achi', 'gal', 'achitit'];


// setInterval(function(){
//   ctr++;
//   if(ctr==1){
//     for(let i=0;i<IDs.length;i++){
//       document.getElementById(IDs[i]).style.height="50px";
//     }
//   }
//     else if(ctr==2){
//       for(let i=0;i<IDs.length;i++){
//         document.getElementById(IDs[i]).style.height="100px";
//       }    
//     ctr=0;
//   }
// },1000);

const useStyles = makeStyles({

  brand: {
    position: 'absolute',
    color: "#ffffff",
    zIndex: "5",
    marginLeft: "30vw",
    marginTop: "2vh",
    height: "20vh",
    overflowY: "hidden",
  },
  load1: {
    position: 'fixed',
    height: '120vh',
    width: '50vw',
    backgroundColor: '#bababa',
    zIndex: '1000000',
    transition: '2s ease-in-out',
  },
  load2: {
    position: 'fixed',
    height: '120vh',
    width: '50vw',
    backgroundColor: '#bababa',
    zIndex: '1000000',
    transition: '2s ease-in-out',
  },
  load3: {
    position: 'fixed',
    height: '120vh',
    marginLeft: '50vw',
    width: '50vw',
    backgroundColor: '#454545',
    zIndex: '1000000',
    transition: '2s ease-in-out',
  },
  
  '@media (max-width: 800px)': {
    mainimg: {
      // clipPath: 'circle(74.2% at 50% 26%)',
      height: '30vh',
    },
    title: {
      fontFamily: "army",
      fontSize: "2em",
      fontWeight: "600",
      display: "inline-block",
      position: "relative",
      top: "-4vh"
    },
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      marginLeft: "17vw",
    },
    mainRaised: {
      margin: "-38px 20px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    downvote: {
      position: 'absolute',
      marginLeft: '43vw',
      marginTop: '21vh',
      height: '50px',
      width: '50px',
      zIndex: '10000',
    },

    arrow1: {
      width: "50px",
      height: "50px",
      transition: '1s',
      color: '#fff',
    },
  },

  '@media (min-width: 800px)': {

    mainimg: {
      clipPath: 'circle(74.2% at 50% 26%)',
    },

    title: {
      fontFamily: "army",
      fontSize: "6vw",
      fontWeight: "600",
      display: "inline-block",
      position: "relative",
      transition: "1500ms ease-in-out",
      textStrokeWidth: '3px',
      textStrokeColor: 'white',
      textFillColor: 'transparent',
      marginTop: '50vh'
    },
    subtitle: {
      fontSize: "1vw",
      maxWidth: "500px",
      marginLeft: "5vw"
    },
    mainRaised: {
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    downvote: {
      position: 'absolute',
      marginLeft: '40vw',
      marginTop: '72vh',
      height: '50px',
      width: '50px',
      zIndex: '10000',
    },

    arrow1: {
      width: "100px",
      height: "100px",
      marginLeft: "135px",
      transition: '1s',
      color: '#fff',
    },
  },

  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },

  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },

});

export default function Homepage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    setTimeout(function () {
      document.getElementById('load1').style.width = '0px';
      document.getElementById('load2').style.height = '0px';
    }, 2000);
    setTimeout(function () {
      document.getElementById('load3').style.height = '0px';
    }, 3000);
    setTimeout(function () {
      document.getElementById('mainbrand').style.marginTop = '5vh';
    }, 4000);
  });

  return (
    <div>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////Loading Animation /////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div id="load1" className={classes.load1}>
      </div>
      <div id="load2" className={classes.load2}>
      </div>
      <div id="load3" className={classes.load3}>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////// Navigation Bar ///////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <SectionNavbars />

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////// Title, Team Image //////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <Link className={classes.downvote}
        to="aboutus"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000} >
        <Arrowd id="pral" className={classes.arrow1} />
      </Link>

      <div className={classes.brand}>
        <h1 id="mainbrand" className={classes.title}>SRM TEAM RUDRA</h1>
      </div>

      <Parallax className={classes.mainimg} image={parall}></Parallax>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          /////////////////////////////////////////////UPRAISED ELEMENT//////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


      <div className={classNames(classes.main, classes.mainRaised)} style={{overflowX: 'hidden'}}>
        <section id='aboutus'>
          <SectionPills />
        </section>
        <section id="news">
          <SectionNews />
        </section>
        <section id="achievetitle">
          <AchieveTitle />
        </section>
        <section id='achievement' >
          <SectionAchievement />
        </section>
        <section id='gallery'>
          <SectionCarousel />
        </section>
        <section id='video'>
          <SectionVideo />
        </section>
        <section id='team'>
          <SectionTeam />
        </section>
        <section id='social'>
          <SectionSocial />
        </section>
        <section id='sponsorship'>
          <SectionSponsorship />
        </section>
        <section id='patron'>
          <SectionPatreons />
        </section>
        <section id='contact'>
          <SectionContact />
        </section>
      </div>
      <Footer />
    </div >
  );

}
