import rudrawin from "assets/img/image/news/rudrawin2.webp";
import urcupdate from "assets/img/image/news/urc2020.webp";
import anet from "assets/img/image/news/anet.webp";
import sparkfun from "assets/img/image/news/sparkfun.webp";
import { isParenthesizedExpression } from "typescript";

const newsStyle = {
    container: {
        display: "flex",
        flexDirectiob: 'column',
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: 'wrap',
        height: '100vh',
        width: '96vw'
    },
    vidBG: {
        position: 'absolute',
        height: '100vh'
    },
    video: {
        height: '100%',
        zIndex: '-1'
    },
    first: {
       position: 'absolute'
    },
    second: {
        position: 'absolute'
    },
    third: {
        position: 'absolute'
    },
    title: {
        order: '2',
        fontFamily: 'cairoBlack',
        color: '#fff',
        fontSize: '10vw',
        fontWeight: '400',
        textStrokeWidth: '5px',
        textStrokeColor: '#fff',
        textFillColor: 'transparent',
        zIndex: '20'
    },
    news1: {
        order: '1',
        width: '25vw',
        backgroundColor: '#000',
        zIndex: '100',
        color: 'transparent',
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: '250ms ease-in-out',
        transformOrigin: 'top',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.72))',
            zIndex: '200',
            color: 'white',
        },
    },
    news2: {
        order: '3',
        width: '25vw',
        backgroundColor: '#000',
        zIndex: '100',
        color: 'transparent',
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: '250ms ease-in-out',
        transformOrigin: 'top',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.72))',
            zIndex: '200',
            color: 'white',
        },
    },
    news3: {
        order: '4',
        width: '25vw',
        backgroundColor: '#000',
        zIndex: '100',
        color: 'transparent',
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: '250ms ease-in-out',
        transformOrigin: 'top',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.72))',
            zIndex: '200',
            color: 'white',
        },
    },
    news4: {
        order: '5',
        width: '25vw',
        backgroundColor: '#000',
        zIndex: '100',
        color: 'transparent',
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: '250ms ease-in-out',
        transformOrigin: 'top',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.72))',
            zIndex: '200',
            color: 'white',
        },
    },
    news5: {
        order: '6',
        width: '25vw',
        backgroundColor: '#000',
        zIndex: '100',
        color: 'transparent',
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: '250ms ease-in-out',
        transformOrigin: 'top',
        '&:hover': {
            transform: 'scale(1.2)',
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.72))',
            zIndex: '200',
            color: 'white',
        },
    },
    '@media (max-width: 1024px) and (min-width: 800px)': {
        title: {
            order: '1',
            textStrokeWidth: '2px'
        },
        news1:{
            order: '3',
            width: '38vw'
        },
        news2: {
            order: '5',
            width: '38vw'
        },
        news3: {
            order: '6',
            width: '38vw'
        },
        news4: {
            order: '8',
            width: '38vw'
        },
        news5: {
            order: '9',
            width: '38vw'
        },
        first: {
            position: 'relative',
            order: '2',
            flexBasis: '100%'
        },
        second: {
            position: 'relative',
            order: '4',
            flexBasis: '100%'
        },
        third: {
            position: 'relative',
            order: '7',
            flexBasis: '100%'
        }
    },
    '@media (max-width: 800px)': {
        container: {
            height: '80vh'
        },
        vidBG: {
            height: '80vh'
        },
        title: {
            textStrokeWidth: '2px'
        },
        news1:{
            order: '3',
            width: '35vw'
        },
        news2: {
            order: '5',
            width: '35vw'
        },
        news3: {
            order: '6',
            width: '35vw'
        },
        news4: {
            order: '8',
            width: '35vw'
        },
        news5: {
            order: '9',
            width: '35vw'
        },
    }

}

export default newsStyle;