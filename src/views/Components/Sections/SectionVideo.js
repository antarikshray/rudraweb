import React from "react";
import ReactPlayer from 'react-player';
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/components/vidplayerStyle.js";

const useStyles = makeStyles(styles);

export default function SectionVideo(){
    const classes = useStyles();
    
    return (<div>
        <div className={classes.vidCard}>
            <div className={classes.hori1}></div>
            <div className={classes.hori2}></div>
            <div className={classes.hori3}></div>
            <div className={classes.hori4}></div>
            <div className={classes.ver2}></div>
            <div className={classes.ver1}></div> 
            <div className={classes.ver3}></div> 
            <div className={classes.ver4}></div>   
            <div className={classes.mobplaya1}> 
                <ReactPlayer  url='https://youtu.be/2gt8fW8TD7c' controls='true' volume='1' muted='true' height='100%' width='100%' loop='true' playing />
            </div>    
            <div className={classes.mobplaya2}>
                <ReactPlayer url='https://youtu.be/B3iRm-0kSSY' controls='true' volume='1' muted='true' height='100%' width= '100%' loop='true' playing />
            </div>
            <div className={classes.title}>
                SAR-2020
            </div>
            <div className={classes.title2}>
                IRC-2020-After Movie
            </div> 
        </div>
    </div>
    );
}