import React, { useState } from "react";
import HorizontalTimeline from 'react-horizontal-timeline';
import { makeStyles } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";

import SectionMediaCard from "./SectionAchievement.js";
import Arrowd from "@material-ui/icons/ArrowDropDown";

import "assets/css/my.css";

const VALUES = ['May 28 2013', 'May 31 2014', 'May 31 2015', 'May 30 2016', 'May 30 2017', 'May 31 2019', 'Jan 17 2020'];
const pallete = [];

const useStyles = makeStyles(() => ({
  '@media (max-width: 800px)': {
    container: {
      height: '95vh',
      backgroundColor: '#EFEFED',
      zIndex: '10'
    },
    card:{
      paddingTop: '5vh',
      width: '90vw',   
      height: '73vh', 
    },
    downvote: {
      position: 'absolute',
      marginLeft: '37vw',
      marginTop: '90vh',
      height: '50px',
      width: '50px',
      zIndex: '10000',
    },
    arrow: {
        width: "50px",
        height: "50px",
        marginLeft: "8px",
        transition: '1s',
        color: '#737373',
    },
  },

  '@media (min-width: 800px)': {
    container: {
      height: '110vh',
      backgroundColor: '#EFEFED',
      zIndex: '10'
    },

    card:{
      position: 'absolute',
      marginTop: '15vh',
      width: '60vw', 
      height: '75vh',  
      marginLeft: '20vw', 
    },
    downvote: {
      position: 'absolute',
      marginLeft: '45.5vw',
      marginTop: '90vh',
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
  }

}));

export default function SectionTimeline() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);
    return(<div>
      <div className={classes.container}>
        <Link className={classes.downvote}
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration= {1000} >
            <Arrowd id='achi' className={classes.arrow} />
        </Link>
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
              <SectionMediaCard index={value}/>
        </div>      
      </div>
      </div>);
}