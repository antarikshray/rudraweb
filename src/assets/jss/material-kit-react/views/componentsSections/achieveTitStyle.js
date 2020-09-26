
const achieveTitStyle = {
    imageWrapper: {
        position: 'absolute',
        margin: '10vw 0 10vw 0',
        height: '70vh',
        width: '100%',
        zIndex: '15',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imag: {
        width: '34.5vw'
    },
    downvote: {
        position: 'absolute',
        marginTop: '90vh',
        height: '10vh',
        width: '100%',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrow: {
        fontSize: '10vw',
        transition: '1s',
        color: '#787276',
    },
    section:{
        backgroundColor: "#d6d6d6",
        height: '100vh'
    },
    achieve: {
        position: 'absolute',
        margin: '25vw 0 0 5vw',
        fontSize: '12vw',
        fontWeight: "600",
        textStrokeWidth: '3px',
        textStrokeColor: '#787276',
        textFillColor: 'transparent',
        zIndex: '20',
    },
    achieveb: {
        position: 'absolute',
        margin: '25vw 0 0 5vw',
        fontSize: '12vw',
        fontWeight: "600",
        textStrokeWidth: '3px',
        textStrokeColor: '#787276',
        textFillColor: '#787276',
        zIndex: '10',
    },
    '@media (max-width: 1024px)': {
        section:{
            backgroundColor: "#d6d6d6",
            height: '30vh'
        },
        achieve: {
            margin: '18vw 1vw 0 2vw',
            textStrokeWidth: '2px'
        },
        achieveb: {
            margin: '18vw 1vw 0 1vw',
            textStrokeWidth: '2px',
        },
        imageWrapper: {
            position: 'absolute',
            marginTop: '-1vh',
            // margin: '10vw 0 10vw 0',
            height: '30vh',
            width: '100%',
            zIndex: '15',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        downvote: {
            position: 'absolute',
            marginTop: '25vh',
            height: '10vh',
            width: '100%',
            zIndex: '10000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    '@media (max-width: 800px)': {
        section:{
            backgroundColor: "#d6d6d6",
            height: '30vh'
        },
        achieve: {
            margin: '25vw 1vw 0 1vw',
            textStrokeWidth: '2px'
        },
        achieveb: {
            margin: '25vw 0 0 0',
            textStrokeWidth: '2px',
        },
        imageWrapper: {
            position: 'absolute',
            marginTop: '-1vh',
            // margin: '10vw 0 10vw 0',
            height: '30vh',
            width: '100%',
            zIndex: '15',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        downvote: {
            position: 'absolute',
            marginTop: '25vh',
            height: '10vh',
            width: '100%',
            zIndex: '10000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
};

export default achieveTitStyle;