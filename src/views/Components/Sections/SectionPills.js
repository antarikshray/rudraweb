import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
import Info from "@material-ui/icons/Info";
import List from "@material-ui/icons/List";
import Arrowd from "@material-ui/icons/ArrowDropDown";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import Quote from "components/Typography/Quote.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function SectionPills() {
  
  const classes = useStyles();
  const prevScrollY = useRef(0);

    const [goingUp, setGoingUp] = useState(false);    
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
              // if(goingUp===false&&currentScrollY>1389&&currentScrollY<2668){
              //     let dif = 2668-1389;
              //     dif = (currentScrollY-1389)/dif;
              //     const disp = String(dif.map(0,1,-35,25));              
              //     document.getElementById("overachi").style.transform="translateX("+ disp +"%)";
              //     document.getElementById("underachi").style.transform="translateX("+ disp +"%)";
              // }
              // else if(goingUp===true&&currentScrollY>1389&&currentScrollY<2668){
              //   let dif = 2668-1389;
              //     dif = (currentScrollY-1389)/dif;
              //     const disp = String(dif.map(0,1,-35,25));
              //   document.getElementById("overachi").style.transform="translateX("+ (disp) +"%)";
              //   document.getElementById("underachi").style.transform="translateX("+ (disp) +"%)";
              //   }
          } 

          else{
              if(goingUp===false&&currentScrollY>0&&currentScrollY<801){
                let dif = 801-0;
                  dif = (currentScrollY-0)/dif;
                  const disp = String(dif.map(0,1,50,105));     
                  console.log(disp); 
                  if(disp<100){        
                    document.getElementById("pillsbg").style.background='linear-gradient(90deg, #D9D9D9'+ (100-disp) +'%, #4a4a4a '+ (disp) +'%)';
                  }
                  else{
                    // document.getElementById("pillsbg").style.background='#D9D9D9';  
                  }
              }
              else if(goingUp===true&&currentScrollY>0&&currentScrollY<801){
                let dif = 801-0;
                dif = (currentScrollY-0)/dif;
                const disp = String(dif.map(0,1,50, 105));
                document.getElementById("pillsbg").style.background='linear-gradient(90deg, #D9D9D9'+ (100-disp) +'%, #4a4a4a '+ (disp) +'%)';
              }
          }   
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
        
        return () => window.removeEventListener("scroll", handleScroll);
        return () => window.removeEventListener('resize', handleResize);
      }, [goingUp]);


  return (<div>
    <div id="pillsbg" className={classes.section}>
      <Link className={classes.downvote}
                    to="news"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1000} >
            <Arrowd id="abts" className={classes.arrow} color="primary" />
      </Link>
      <div className={classes.border1}></div>
      <div className={classes.border2}></div>
      <div className={classes.border3}></div>
      <div className={classes.main}>
        <div id="navigation-pills">
          <GridContainer>
             <GridItem style={{padding: '20px'}} xs={12} sm={15} md={13} lg={10}>
              <NavPills
                color="primary"
                horizontal={{
                  tabsGrid: { xs: 10, sm: 4, md: 3 },
                  contentGrid: { xs: 12, sm: 8, md: 9 }
                }}
                tabs={[
                  {
                    tabButton: "About Us",
                    tabIcon: Info,
                    tabContent:( <div className={classes.text}>
                          
                          RUDRA is the official team of SRM IST taking part in University Rover Challenge organised by Mars Society since 2013. 
                          The annual competition is held at the Mars Desert Research Station (MDRS), Martian Analog Site, near Hanksville, Utah, USA. 
                          The team has been successfully operational for the last 7 years and has maintained its consistency in the competition.<br></br> 
                          Our Team consists of 25-30 undergraduate students of every year from various engineering streams, working in different domains. 
                          The fun part - R&D, is the soul and essence of Team Rudra. Brainstorming discussions are always welcome for giving birth to new ideas.
                          
                              <Quote text="-The core of Team Rudra believes in giving an opportunity to everyone."/>
                          <br></br>   
                      </div>    
                    )
                  },
                  {
                    tabButton: "Indian Rover Challenge",
                      tabIcon: List,  
                    tabContent: (
                      <div className={classes.text}>
                          Indian Rover Challenge is the only robotics and space exploration competition of
                          its kind in Asia-Pacific which challenges student teams to design and build next-
                          generation Mars rovers. It is part of the 'Rover Challenge Series' of 
                          'The Mars Society', USA.<br></br> <b>Team RUDRA achieved 3rd global and 1st rank among the Asian teams in
                            IRC2020.</b>
                          
                        </div>
                    )
                  },
                  {
                    tabButton: "University Rover Challenge",
                    tabIcon: List, 
                    tabContent: (
                      <div className={classes.text}>
                          The University Rover Challenge (URC) is the world's premier robotics competition for college students.  Held annually in the
                           desert of southern Utah in the United States, URC challenges student teams to design and build the next generation of Mars
                            rovers that will one day work alongside astronauts explorin the Red Planet.
                            <br></br>
                            URC was launched in 2006, with competitions being held every summer since 2007. URC consistently draws an international 
                            field of the most talented an promising students around. 
                              <br></br>
                              <b>Team RUDRA achieved 11th global and 2nd rank among the Asian teams in URC2019</b>
                              
                        </div>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
    </div>
  );
}
