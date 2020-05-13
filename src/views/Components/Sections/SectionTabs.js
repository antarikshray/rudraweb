import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Info from "@material-ui/icons/Info";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
//fonts
import Quote from "components/Typography/Quote.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles(styles);



export default function SectionTabs() {
  const classes = useStyles();
  var checked = [true, false, false];
  function rendSwitch(){
    console.log("hello");
  }
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <GridContainer>
            <GridItem xs={12} sm={12} md={40}>
              <CustomTabs style={{height: "50px"}}
                headerColor="primary"
                tabs={[
                  { id: "aboutus",
                    tabName: "About Us",
                    tabIcon: Info,
                    tabContent: (
                      <p className={classes.textCenter}>
                        <br></br>
                        RUDRA is the official team of SRM IST taking part in University Rover Challenge <br></br><br></br>organised by Mars Society since 2013. 
                        The annual competition is held at the<br></br><br></br> Mars Desert Research Station (MDRS), Martian Analog Site, near Hanksville,<br></br><br></br> Utah, USA. 
                        The team has been successfully operational for the last 7 years and<br></br><br></br> has maintained its consistency in the competition. 
                        Our Team consists of 25-30<br></br><br></br> undergraduate students of every year from various engineering streams,<br></br><br></br> working in different domains. 
                        The fun part - R&D, is the soul and essence of<br></br><br></br> Team Rudra. Brainstorming discussions are always welcome for giving birth to<br></br><br></br> new ideas.
                        <br></br><br></br><br></br>
                            <Quote text="-The core of Team Rudra believes in giving an opportunity to everyone."/>
                        <br></br>    
                      </p>
                    )
                  },
                  { 
                    id: "irc",
                    tabName: "Indian Rover Challenge",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                        <br></br>
                        Indian Rover Challenge is the only robotics and space exploration competition of<br></br><br></br>
                         its kind in Asia-Pacific which challenges student teams to design and build next-<br></br><br></br>
                         generation Mars rovers. It is part of the 'Rover Challenge Series' of <br></br><br></br>
                         'The Mars Society',USA.<br></br><br></br> Team RUDRA achieved 3rd global and 1st rank among the Asian teams in
                         <br></br><br></br> IRC2020.
                         <br></br><br></br>
                      </p>
                    )
                  },
                  {
                    id: "urc",
                    tabName: "University Rover Challenge",
                    tabIcon: Chat,
                    tabContent: (
                      <p className={classes.textCenter}>
                        <br></br>
                        The University Rover Challenge (URC) is the world's premier robotics<br></br><br></br> 
                        competition for college students.  Held annually in the desert of southern Utah in<br></br><br></br>
                         the United States, URC challenges student teams to design and build the next<br></br><br></br>
                          generation of Mars rovers that will one day work alongside astronauts exploring<br></br><br></br>
                           the Red Planet.
                           <br></br><br></br><br></br>
                          URC was launched in 2006, with competitions being held every summer since<br></br><br></br>
                           2007. URC consistently draws an international field of the most talented and<br></br><br></br>
                            promising students around. 
                            <br></br><br></br>
                      </p>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
