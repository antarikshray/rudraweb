import React from "react";
import ReactPlayer from 'react-player';
import { makeStyles } from "@material-ui/core/styles";

import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    vidCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        height: '140vh',
        width: '95vw',
    },
    player1: {
        height: '57vh',
        width: '50vw',
        boxShadow: '0 10px 15px #000',
    },
    player2: {
        height: '57vh',
        width: '50vw',
        boxShadow: '0 10px 15px #000',
    },
    title: {
        fontFamily: "army",
        fontSize: "7em",
        fontWeight: "600",
        color: "#7900db",
        textShadow: '2px 2px 4px #240638'
    },
    irc: {
        width: '35vw',
        height: '20vh',
    },
   
    '@media (max-width: 1030px)': {
        vidCard:{
            height: '60vh',
            marginBottom: '10vh'
        },
        player1: {
            height: '23.5vh',
            width: '55vw',
        },
        player2: {
            height: '23.5vh',
            width: '55vw',
        },
        title:{
            fontSize: '4em',
            textShadow: '2px 2px 6px #240638'
        }
    },

    '@media (max-width: 800px)': {
        vidCard:{
            flexDirection: 'column',
            height: '85vh',
        },
        player1: {
            order: '2',
            height: '23vh',
            width: '80vw',
        },
        player2: {
            order: '4',
            height: '23vh',
            width: '80vw',
        },
        title:{
            order: '1',
            fontSize: '3em'
        },
        irc:{
            order: '3',
            width: '80vw',
            height: '10vh',
        }
    }
});

export default function SectionVideo() {
    const classes = useStyles();

    return (
        <div className={classes.vidCard}>
            <Box className={classes.player1}>
                <ReactPlayer url='https://youtu.be/2gt8fW8TD7c' controls='true' volume='1' muted='true' height='100%' width='100%' loop='true' playing />
            </Box>
            <div className={classes.title}>
                SAR-2020
            </div>
            <div className={classes.irc}>
                <h1 className={classes.title}>IRC-2020-After Movie</h1>
            </div>
            <Box className={classes.player2}>
                <ReactPlayer url='https://youtu.be/B3iRm-0kSSY' controls='true' volume='1' muted='true' height='100%' width='100%' loop='true' playing />
            </Box>
        </div>
    );
}