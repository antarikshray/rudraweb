import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax, Background } from 'react-parallax';
import { isMobile } from 'react-device-detect';
import { Link, animateScroll as scroll } from "react-scroll";

import Avatar from '@material-ui/core/Avatar';
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/teamStyle.js";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import rahul from 'assets/img/image/teams/team19/Rahul Aggarwal.webp';
import renish from 'assets/img/image/teams/team18/Renish.JPG';
import david from 'assets/img/image/teams/team19/David Chaudhary.webp';
import chaitanya from 'assets/img/image/teams/team19/Chaitanya Joshi.webp';
import abhishek from 'assets/img/image/teams/team18/AbhishekReddy.jpeg';
import farhad from 'assets/img/image/teams/team19/Farhad Bharucha.webp';
import sri from 'assets/img/image/teams/team19/shri pic.webp';
import bgImage from 'assets/img/sign.jpg';
import bgImageMob from 'assets/img/walle.jpg';
import Arrowd from "@material-ui/icons/ArrowDropDown";


const useStyles = makeStyles(styles);
const images = [rahul, renish, david, abhishek, farhad, sri, chaitanya];

var bgImageRender = () => {
  if (isMobile)
    return bgImageMob;
  else
    return bgImage;
}
var coverPicRender = (point) => {
  if (isMobile)
    return <img style={{
      position: 'absolute',
      height: '33vh',
      width: '70vw',
      filter: 'blur(10px)',
      clipPath: 'polygon(0 0, 100% 0%, 100% 43%, 0 64%)'
    }} src={images[point]}></img>;
  else
    return;
}

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <Parallax
      blur={{ min: -100, max: 100 }}
      bgImage={bgImageRender()}
      bgImageAlt="the cat"
      strength={1000}
      className={classes.forMob}
    >
       <Link className={classes.downvote}
        to="social"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000} >
        <Arrowd id="pral" className={classes.arrow} />
      </Link>
      <div className={classes.root}>
        <div className={classes.title}>
          <h1 style={{ fontSize: '10vh', color: 'white' }}>TEAM</h1>
        </div>
        <Grid container spacing={3}>
          <Grid className={classes.box} item xs={10} sm={2}>
            {coverPicRender(0)}
            <Avatar className={classes.imag} alt="Rahul Agarwal" src={images[0]} />
            <h2 className={classes.Name} > Rahul Agarwal</h2>
            <h4 className={classes.Design} > Team Lead</h4>
          </Grid>
          <Grid className={classes.box} item xs={10} sm={2}>
            {coverPicRender(1)}
            <Avatar className={classes.imag} alt="Renish Kumar" src={images[1]} />
            <h2 className={classes.Name}> Renish Kumar</h2>
            <h4 className={classes.Design}> Team Manager</h4>
          </Grid>
          <Grid className={classes.box} item xs={10} sm={2}>
            {coverPicRender(2)}
            <Avatar className={classes.imag} alt="David Chaudhary" src={images[2]} />
            <h2 className={classes.Name}> David Chaudhary</h2>
            <h4 className={classes.Design}> Technical Director</h4>
          </Grid>
          <Button className={classes.btnclass} color="primary" size="lg" round>
            TEAM HISTORY
        </Button>
        </Grid>
        <Grid container spacing={3}>
          <Grid className={classes.box} item xs={10} sm={2}>
            {coverPicRender(3)}
            <Avatar className={classes.imag} alt="Abhishek Reddy" src={images[3]} />
            <h2 className={classes.Name}> Abhishek Reddy</h2>
            <h4 className={classes.Design}> Head Of Corporate</h4>
          </Grid>
          <Grid className={classes.box} item xs={10} sm={2}>
            {coverPicRender(4)}
            <Avatar className={classes.imag} alt="Farhad Bharucha" src={images[4]} />
            <h2 className={classes.Name}> Farhad Bharucha</h2>
            <h4 className={classes.Design}> Coding Lead</h4>
          </Grid>
          <Grid className={classes.box} item xs={10} sm={2}>
            {coverPicRender(5)}
            <Avatar className={classes.imag} alt="Shri" src={images[5]} />
            <h2 className={classes.Name}> Shri Venkatesh</h2>
            <h4 className={classes.Design}> Science Lead</h4>
          </Grid>
          <Grid className={classes.box} item xs={10} sm={2}>
            {coverPicRender(6)}
            <Avatar className={classes.imag} alt="Chaitanya Joshi" src={images[6]} />
            <h2 className={classes.Name}> Chaitanya Joshi</h2>
            <h4 className={classes.Design}> Mechanical Lead</h4>
          </Grid>
        </Grid>
      </div>
    </Parallax>
  );
}