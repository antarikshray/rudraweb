import { container } from "assets/jss/material-kit-react.js";
import { ChildCare } from "@material-ui/icons";

const componentsStyle = {

  container,
  brand: {
    position: 'absolute',
    color: "#ffffff",
    zIndex: "5",
    marginLeft: "30vw",
    marginTop: "2vh",
    height: "20vh",
    overflowY: "hidden",
  },
  load1: {
    position: 'fixed',
    height: '120vh',
    width: '50vw',
    backgroundColor: '#bababa',
    zIndex: '1000000',
    transition: '2s ease-in-out',
  },
  load2: {
    position: 'fixed',
    height: '120vh',
    width: '50vw',
    backgroundColor: '#bababa',
    zIndex: '1000000',
    transition: '2s ease-in-out',
  },
  load3: {
    position: 'fixed',
    height: '120vh',
    marginLeft: '50vw',
    width: '50vw',
    backgroundColor: '#454545',
    zIndex: '1000000',
    transition: '2s ease-in-out',
  },
  
  '@media (max-width: 800px)': {
    mainimg: {
      clipPath: 'circle(74.2% at 50% 26%)',
      height: '30vh',
    },
    title: {
      fontFamily: "army",
      fontSize: "6vw",
      fontWeight: "600",
      display: "inline-block",
      position: "relative"
    },
    subtitle: {
      fontSize: "1.313rem",
      maxWidth: "500px",
      marginLeft: "17vw",
    },
    mainRaised: {
      margin: "-30px 20px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    downvote: {
      position: 'absolute',
      marginLeft: '43vw',
      marginTop: '22vh',
      height: '50px',
      width: '50px',
      zIndex: '10000',
    },

    arrow1: {
      width: "50px",
      height: "50px",
      transition: '1s',
      color: '#ffffff',
    },
  },



  '@media (min-width: 800px)': {

    mainimg: {
      clipPath: 'circle(74.2% at 50% 26%)',
    },

    title: {
      fontFamily: "army",
      fontSize: "6vw",
      fontWeight: "600",
      display: "inline-block",
      position: "relative",
      transition: "1500ms ease-in-out",
      textStrokeWidth: '3px',
      textStrokeColor: 'white',
      textFillColor: 'transparent',
      marginTop: '50vh'
    },
    subtitle: {
      fontSize: "1vw",
      maxWidth: "500px",
      marginLeft: "5vw"
    },
    mainRaised: {
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    downvote: {
      position: 'absolute',
      marginLeft: '40vw',
      marginTop: '72vh',
      height: '50px',
      width: '50px',
      zIndex: '10000',
    },

    arrow1: {
      width: "100px",
      height: "100px",
      marginLeft: "135px",
      transition: '1s',
      color: '#ffffff',
    },
  },

  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },

  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },

};

export default componentsStyle;
