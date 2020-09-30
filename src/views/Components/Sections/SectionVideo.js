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
    title1: {
        fontSize: "7em",
        fontWeight: "600",
        color: "#737373",
        textShadow: '4px 4px 5px #0D0D0D'
    },
    title2: {
        fontSize: "7em",
        fontWeight: "600",
        color: "#737373",
        textShadow: '4px 4px 5px #0D0D0D'
    },

    '@media (max-width: 1030px)': {
        vidCard: {
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
        title1: {
            fontSize: '4em',
            textShadow: '4px 4px 5px #0D0D0D'
        },
        title2: {
            fontSize: '4em',
            textShadow: '4px 4px 5px #0D0D0D'
        }
    },

    '@media (max-width: 800px)': {
        vidCard: {
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
        title1: {
            order: '1',
            fontSize: '3em'
        },
        title2: {
            order: '3',
            fontSize: '3em'
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
            <div className={classes.title1}>
                SAR-2020
            </div>
            <div className={classes.title2}>
                IRC-2020
            </div>

            <Box className={classes.player2}>
                <ReactPlayer url='https://youtu.be/B3iRm-0kSSY' controls='true' volume='1' muted='true' height='100%' width='100%' loop='true' playing />
            </Box>
        </div>
    );
}