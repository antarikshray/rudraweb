import React, {useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";

import GridContainer from "components/Grid/GridContainer.js";
import Arrowd from "@material-ui/icons/ArrowDropDown";
import styles from "assets/jss/material-kit-react/views/componentsSections/achieveTitStyle.js";
import image from "assets/img/twohand.gif";

const useStyles = makeStyles(styles);

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
          if(windowDimensions.width<620){
              if(goingUp===false&&currentScrollY>1389&&currentScrollY<2668){
                  let dif = 2668-1389;
                  dif = (currentScrollY-1389)/dif;
                  const disp = String(dif.map(0,1,-35,25));              
                  document.getElementById("overachi").style.transform="translateX("+ disp +"%)";
                  document.getElementById("underachi").style.transform="translateX("+ disp +"%)";
              }
              else if(goingUp===true&&currentScrollY>1389&&currentScrollY<2668){
                let dif = 2668-1389;
                  dif = (currentScrollY-1389)/dif;
                  const disp = String(dif.map(0,1,-35,25));
                document.getElementById("overachi").style.transform="translateX("+ (disp) +"%)";
                document.getElementById("underachi").style.transform="translateX("+ (disp) +"%)";
                }
          } 

          else{
              if(goingUp===false&&currentScrollY>2332&&currentScrollY<3445){
                let dif = 3445-2332;
                  dif = (currentScrollY-2332)/dif;
                  const disp = String(dif.map(0,1,-25,35));              
                document.getElementById("overachi").style.transform="translateX("+ disp +"%)";
                document.getElementById("underachi").style.transform="translateX("+ disp +"%)";
              }
              else if(goingUp===true&&currentScrollY>2332&&currentScrollY<3445){
                let dif = 3445-2332;
                dif = (currentScrollY-2332)/dif;
                const disp = String(dif.map(0,1,-25,35));
                document.getElementById("overachi").style.transform="translateX("+ (disp) +"%)";
                document.getElementById("underachi").style.transform="translateX("+ (disp) +"%)";
              }
          }   
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
        
        return () => window.removeEventListener("scroll", handleScroll);
        return () => window.removeEventListener('resize', handleResize);
      }, [goingUp]);

    return (
      <div className={classes.section}>
        <GridContainer>
          <Link className={classes.downvote}
                    to="achievement"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {500} >
            <Arrowd id="achitit" className={classes.arrow} />
          </Link>
              <img className={classes.imag} src={image} />
              <h1 id="overachi" className={classes.achieve}>ACHIEVEMENTS</h1>
              <h1 id="underachi" className={classes.achieveb}>ACHIEVEMENTS</h1>
        </GridContainer>
    </div>
    );
}