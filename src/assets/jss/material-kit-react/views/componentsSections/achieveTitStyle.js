
const achieveTitStyle = {
    '@media (max-width: 800px)': {
        section:{
            display: "flex",
            height: "85vh"
        },
        achieve: {
            margin: '35vh 0 5vh 12vw',
            fontSize: '10vw',
            textStrokeWidth: '1px',
            fontWeight: "600",
            textStrokeColor: '#787276',
            textFillColor: 'transparent',
            zIndex: '20',
        },
        achieveb: {
            position: 'absolute',
            margin: '35vh 0 5vh 12vw',
            fontSize: '10vw',
            fontWeight: "600",
            textStrokeWidth: '1px',
            textStrokeColor: '#787276',
            textFillColor: '#787276',
            zIndex: '10'
        },
          imag: {
            position: 'absolute',
            margin: '30vh 0 0 28vw',
            width: '20vh',
            zIndex: '15',
        },
        downvote: {
            position: 'absolute',
            marginLeft: '43vw',
            marginTop: '80vh',
            height: '50px',
            width: '50px',
            zIndex: '10000',
          },
      
          arrow: {
            width: "50px",
            height: "50px",
            transition: '1s',
            color: '#787276',
          },
    },
    '@media (min-width: 800px)': {
        imag: {
            position: 'absolute',
            margin: '20vh 0 40vh 30vw',
            height: '70vh',
            zIndex: '15',
        },
        achieve: {
            margin: '40vh 0 40vh 5vw',
            fontSize: '20vh',
            fontWeight: "600",
            textStrokeWidth: '3px',
            textStrokeColor: '#787276',
            textFillColor: 'transparent',
            zIndex: '20',
        },
        achieveb: {
            position: 'absolute',
            margin: '40vh 0 40vh 5vw',
            fontSize: '20vh',
            fontWeight: "600",
            textStrokeWidth: '3px',
            textStrokeColor: '#787276',
            textFillColor: '#787276',
            zIndex: '10'
        },
        downvote: {
            position: 'absolute',
            marginLeft: '49vw',
            marginTop: '90vh',
            height: '50px',
            width: '50px',
            zIndex: '10000',
        },
        arrow: {
            width: "100px",
            height: "100px",
            transition: '1s',
            color: '#787276',
        },
    }
};

export default achieveTitStyle;