import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

import "assets/css/my.css"; 
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div style={{backgroundColor: "#787276"}} className={classes.section}>
      <div id="navbar" className={classes.navbar}>
        <div className={classes.navigation}>
          <Header
            brand="rudra"
            color="secondary"
            rightLinks={
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Link 
                    to="News"
                    spy={true}
                    smooth={true}
                    duration= {500} >
                  <Button
                    className={classes.registerNavLink}
                    color="rose"
                    round
                  >
                   <Icon className={classes.icons}>pages</Icon>NEWS
                  </Button>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                <Link 
                    to="achievement"
                    spy={true}
                    smooth={true}
                    offset={-15}
                    duration= {500}
                    style={{color: "#595959"}} >
                  <Button
                    className={classes.navLink + " " + classes.navLinkActive}
                    color="transparent"
                  >
                    <Explore className={classes.icons} /> ACHIEVEMENTS
                  </Button>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                <Link   
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={120}
                    duration= {500} 
                    style={{color: "#595959"}}>
                  <Button
                    className={classes.navLink}
                    color="transparent"
                  >
                    <Icon className={classes.icons}>image</Icon> GALLERY
                  </Button>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                <Link   
                    to="team"
                    spy={true}
                    smooth={true}
                    duration= {500} 
                    offset={80}
                    style={{color: "#595959"}}>
                    <Button
                      className={classes.navLink}
                      color="transparent"
                    >    
                      <Icon className={classes.icons}>people</Icon> TEAM
                    </Button>
                  </Link>  
                </ListItem>
                <ListItem className={classes.listItem}>
                <Link   
                    to="sponsors"
                    spy={true}
                    smooth={true}
                    duration= {500} 
                    style={{color: "#595959"}}>
                    <Button
                      className={classes.navLink}
                      color="transparent"
                    >
                      <Icon className={classes.icons}>settings</Icon> SPONSORSHIP
                    </Button>
                  </Link>  
                </ListItem>
                <ListItem className={classes.listItem}>
                <Link   
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration= {500} 
                    style={{color: "#595959"}}>
                    <Button
                      className={classes.navLink}
                      color="transparent"
                    >
                      <Icon className={classes.icons}>phone</Icon> CONTACTS US
                    </Button>
                  </Link>    
                </ListItem>
              </List>
            }
          />
        </div>
      </div>
    </div>
  );
}
