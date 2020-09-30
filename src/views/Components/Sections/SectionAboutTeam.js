import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundImage: 'linear-gradient(to bottom-right, #fff, #D5E5F2)'
    },
    title:{
        textStrokeColor: '#fff',
        textFillColor: 'transparent',
        fontWeight: '600',
    },
    tabs: {
        backgroundColor: '#54728C',
        height: '40vh',
        width: '17vw'
    },

    '@media (min-width: 800px)': {
        container: {
            height: '100vh',
            width: '100%',
        },
        title: {
            fontSize: '10vw',
            textStrokeWidth: '3px',
        },
        tabs: {

        }

    },
    '@media (max-width: 800px)': {
        container: {
            height: '100vh',
            width: '100%',
        },
        title: {
            fontSize: '10vw',
            textStrokeWidth: '3px',
        },
        tabs: {

        }
    }
});


export default function SectionAboutTeam() {
    return(
        <div className={classes.container}>
            <h1 className={classes.title}>What We Do</h1>
        </div>
    );
};