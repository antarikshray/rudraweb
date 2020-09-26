import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";

import Arrowd from "@material-ui/icons/ArrowDropDown";
import image from "assets/img/twohand.gif";

const useStyles = makeStyles({
  imageWrapper: {
    position: 'absolute',
    margin: '10vw 0 10vw 0',
    height: '70vh',
    width: '100%',
    zIndex: '15',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imag: {
    width: '34.5vw'
  },
  downvote: {
    position: 'absolute',
    marginTop: '90vh',
    height: '10vh',
    width: '100%',
    zIndex: '10000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  arrow: {
    fontSize: '100px',
    transition: '1s',
    color: '#787276',
  },
  section: {
    backgroundColor: "#d6d6d6",
    height: '100vh'
  },
  achieve: {
    position: 'absolute',
    margin: '25vw 0 0 5vw',
    fontSize: '12vw',
    fontWeight: "600",
    textStrokeWidth: '3px',
    textStrokeColor: '#787276',
    textFillColor: 'transparent',
    zIndex: '20',
  },
  achieveb: {
    position: 'absolute',
    margin: '25vw 0 0 5vw',
    fontSize: '12vw',
    fontWeight: "600",
    textStrokeWidth: '3px',
    textStrokeColor: '#787276',
    textFillColor: '#787276',
    zIndex: '10',
  },
  '@media (max-width: 1024px)': {
    section: {
      backgroundColor: "#d6d6d6",
      height: '30vh'
    },
    achieve: {
      margin: '18vw 1vw 0 2vw',
      textStrokeWidth: '2px'
    },
    achieveb: {
      margin: '18vw 1vw 0 1vw',
      textStrokeWidth: '2px',
    },
    imageWrapper: {
      position: 'absolute',
      marginTop: '-1vh',
      // margin: '10vw 0 10vw 0',
      height: '30vh',
      width: '100%',
      zIndex: '15',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    downvote: {
      position: 'absolute',
      marginTop: '25vh',
      height: '10vh',
      width: '100%',
      zIndex: '10000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  '@media (max-width: 800px)': {
    section: {
      backgroundColor: "#d6d6d6",
      height: '30vh'
    },
    achieve: {
      margin: '25vw 1vw 0 1vw',
      textStrokeWidth: '1px'
    },
    achieveb: {
      margin: '25vw 0 0 1vw',
      textStrokeWidth: '2px',
    },
    imageWrapper: {
      position: 'absolute',
      marginTop: '-1vh',
      // margin: '10vw 0 10vw 0',
      height: '30vh',
      width: '100%',
      zIndex: '15',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    downvote: {
      position: 'absolute',
      marginTop: '25vh',
      height: '10vh',
      width: '100%',
      zIndex: '10000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
});

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function AchieveTitle(props) {
  const classes = useStyles();
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    ////////////////////////////resize event///////////////////////////
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      // console.log(windowDimensions.width);
    }
    window.addEventListener('resize', handleResize);

    ////////////////scroll event//////////////////////////
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      Number.prototype.map = function (in_min, in_max, out_min, out_max) {
        return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }
      if (windowDimensions.width > 1024) {
        if (goingUp === false && currentScrollY > 2332 && currentScrollY < 3445) {
          let dif = 3445 - 2332;
          dif = (currentScrollY - 2332) / dif;
          const disp = String(dif.map(0, 1, -25, 35));
          document.getElementById("overachi").style.transform = "translateX(" + disp + "%)";
          document.getElementById("underachi").style.transform = "translateX(" + disp + "%)";
        }
        else if (goingUp === true && currentScrollY > 2332 && currentScrollY < 3445) {
          let dif = 3445 - 2332;
          dif = (currentScrollY - 2332) / dif;
          const disp = String(dif.map(0, 1, -25, 35));
          document.getElementById("overachi").style.transform = "translateX(" + (disp) + "%)";
          document.getElementById("underachi").style.transform = "translateX(" + (disp) + "%)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
    return () => window.removeEventListener('resize', handleResize);
  }, [goingUp]);

  return (
    <div className={classes.section}>
      <div className={classes.imageWrapper}>
        <img className={classes.imag} src={image} />
      </div>
      <div id="overachi" className={classes.achieve}>ACHIEVEMENTS</div>
      <div id="underachi" className={classes.achieveb}>ACHIEVEMENTS</div>
      <Link className={classes.downvote}
        to="achievement"
        spy={true}
        smooth={true}
        offset={0}
        duration={500} >
        <Arrowd id="achitit" className={classes.arrow} />
      </Link>
    </div>
  );
}