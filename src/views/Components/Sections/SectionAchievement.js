import React, { useState } from "react";
import HorizontalTimeline from 'react-horizontal-timeline';
import { makeStyles } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";

import SectionTimeline from "./SectionTimeline.js";
import Arrowd from "@material-ui/icons/ArrowDropDown";

import "assets/css/my.css";

const VALUES = ['May 28 2013', 'May 31 2014', 'May 31 2015', 'May 30 2016', 'May 30 2017', 'May 31 2019', 'Jan 17 2020'];
const pallete = [];

const useStyles = makeStyles(() => ({


  '@media (min-width: 1024px)': {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '100vh',
      backgroundColor: '#d6d6d6',
      zIndex: '10'
    },

    card:{
      width: '60vw', 
      height: '75vh',  
    },
    downvote: {
      height: '50px',
      width: '50px',
      zIndex: '10000',
  },
  arrow: {
      width: "100px",
      height: "100px",
      transition: '1s',
      color: '#737373',
  },
  },

  '@media (max-width: 1024px)': {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '75vh',
      backgroundColor: '#d6d6d6',
      zIndex: '10'
    },
    card:{
      paddingTop: '5vh',
      width: '90vw',   
      height: '55vh', 
    },
    downvote: {
      height: '10vh',
      zIndex: '10000',
    },
    arrow: {
        transition: '1s',
        color: '#737373',
    },
  },

  '@media (max-width: 800px)': {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '90vh',
      backgroundColor: '#d6d6d6',
      zIndex: '10'
    },
    card:{
      paddingTop: '5vh',
      width: '90vw',   
      height: '63vh', 
    },
    downvote: {
      height: '15vw',
      zIndex: '10000',
    },
    arrow: {
        fontSize: '6em',
        transition: '1s',
        color: '#737373',
    },
  },

}));

export default function SectionAchievement() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);
      return(
        <div className={classes.container}>
          <div className={classes.card}>
              <HorizontalTimeline
                index={value}
                indexClick={(index) => {
                    setValue(index); 
                    setPrevious(value);
                }}
                values={ VALUES } 
                labelWidth={100}
                />
                <SectionTimeline index={value}/>
          </div>      
          <Link className={classes.downvote}
                      to="gallery"
                      spy={true}
                      smooth={true}
                      offset={60}
                      duration= {1000} >
              <Arrowd id='achi' className={classes.arrow} />
          </Link>
      </div>);
}