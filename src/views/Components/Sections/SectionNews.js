import React, {useState, useRef, useEffect} from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";

import Arrowd from "@material-ui/icons/ArrowDropDown";
import styles from "assets/jss/material-kit-react/views/componentsSections/newsStyle.js";

import Bgvideo from "assets/videos/warrovervidf.mp4";

const useStyles = makeStyles(styles);


export default function SectionNews() {
    const classes = useStyles();

    return(<div>
        <div className={classes.container}>
            <h1 className={classes.title}>
                NEWS
            </h1>
            <video autoPlay loop muted className={classes.video}>
                <source src={Bgvideo} type="video/mp4" />
            </video>
            <div className={classes.section1}>
                <h2 className={classNames(classes.wrapper, classes.wrapper2)} >Indian Rover Challenge 2020</h2>
            </div>
            <div className={classes.section2}>
                <h2 className={classes.wrapper}>Update on URC 2020 due to COVID-19</h2>
            </div>   
            <div className={classes.section3}>
                <h2 className={classes.wrapper}>Sponsored for 3D printers by ANET</h2>
            </div>
            <div className={classes.section4}>
                <h2 className={classes.wrapper}>Sponsored for electronic components by Sparkfun</h2>
            </div>
            <div className={classes.section5}>
                <h2 className={classes.wrapper}>New Blog Post on Medium</h2>
            </div>
            <Link className={classes.downvote}
                    to="achievetitle"
                    spy={true}
                    smooth={true}
                    offset={120}
                    duration= {1000} >
            <Arrowd id='newar' className={classes.arrow} />
        </Link>
        </div>
    </div>
    );
}
