import React, { Component, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link, animateScroll as scroll } from "react-scroll";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// import { Parallax, Background } from 'react-parallax';
import Arrowd from "@material-ui/icons/ArrowDropDown";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionTimeline from "./Sections/SectionTimeline.js";
import SectionVideo from "./Sections/SectionVideo.js";
import SectionTeam from "./Sections/SectionTeam.js";
import AchieveTitle from "./Sections/SectionAchievetitle.js";
import SectionNews from "./Sections/SectionNews.js";
import SectionSocial from "./Sections/SectionSocial.js";

import parall from "assets/img/2k20Team.webp";
import image from "assets/img/mkbhd1.gif";

//my css
import "assets/css/my.css";
import styles from "assets/jss/material-kit-react/views/homeScreen.js";
import { createClassExpression } from "typescript";
// import { render } from "node-sass";

const useStyles = makeStyles(styles);

const GALLERY = "GALLERY";
const ACHIEVEMENTS = "ACHIEVEMENTS";
const TEAM = "TEAM";
const titgl = '30vw';
const tital = '20vw';

var ctr = 0;
const IDs = ['pral', 'abts', 'achi', 'gal', 'achitit'];


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

export default function Homepage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    setTimeout(function () {
      document.getElementById('load1').style.width = '0px';
      document.getElementById('load2').style.height = '0px';
    }, 2500);
    setTimeout(function () {
      document.getElementById('load3').style.height = '0px';
    }, 3500);
  });

  return (
    <div style={{cursor: 'alias'}}>
      <div id="load1" className={classes.load1}>
      </div>
      <div id="load2" className={classes.load2}>
      </div>
      <div id="load3" className={classes.load3}>
      </div>
      <SectionNavbars />
      <Link className={classes.downvote}
        to="aboutus"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000} >
        <Arrowd id="pral" className={classes.arrow1} />
      </Link>
      <div className={classes.brand}>
                  <h1 className={classes.title}>SRM TEAM RUDRA</h1>
                  {/* <h3 className={classes.subtitle}>
                  - Design Build Innovate
                  </h3> */}
        </div>
      <Parallax className={classes.mainimg} image={parall}></Parallax>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////UPRAISED ELEMENT//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


      <div className={classNames(classes.main, classes.mainRaised)}>
        <section id='aboutus'>
          <SectionPills />
        </section>
        <section id="news">
          <SectionNews />
        </section>
        <section style={{ backgroundColor: '#ffffdd' }} id="achievetitle">
          <AchieveTitle />
        </section>
        <section id='achievement' >
          <SectionTimeline />
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
        {/* <SectionLogin /> */}
        {/* <SectionBasics /> */}
        {/* <SectionNavbars />
          <SectionNotifications />
          <SectionJavascript />
          <SectionCompletedExamples />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );

}
