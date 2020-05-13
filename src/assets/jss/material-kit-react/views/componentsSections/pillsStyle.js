import { container, title } from "assets/jss/material-kit-react.js";

const pillsStyle = {
  
  '@media (max-width: 800px)': { 
    section: {
      display: "flex",
      height: "130vh",
      background: 'linear-gradient(90deg, #D9D9D9 50%, #8C8C8C 50%)'
    },
    container,
    main:{
      marginTop: '5vh',
      marginLeft: '10vw',
      height: '100%'
    },
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none"
    },
    border1:{
      position: 'absolute',
      
    },
    border2:{
      position: 'absolute',
    },
    border3:{
      position: 'absolute',
    },
    text:{
      lineHeight: '30px'
    },
    downvote: {
      position: 'absolute',
      marginLeft: '37vw',
      marginTop: '122vh',
      height: '50px',
      width: '50px',
      zIndex: '10000',
    },
    arrow: {
        width: "50px",
        height: "50px",
        marginLeft: "8px",
        transition: '1s',
        color: '#ffffdd',
    },
  },

'@media (min-width: 800px)': {
  section: {
    display: 'flex',
    padding: "70px 0px",
    height: "100vh",
    zIndex: '10',
    transition: '1s ease-in-out',
    background: 'linear-gradient(90deg, #D9D9D9 50%, #4a4a4a 50%)'
  },
  container,
  main:{
    marginTop: '20vh',
    marginLeft: '20vw',
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  border1:{
    position: 'absolute',
    marginTop: '14vh',
    marginLeft: '15vw',
    height: '60vh',
    width: '70vw',
    border: 'thick solid #404040',
    borderWidth: '30px'
  },
  border2:{
    position: 'absolute',
    marginTop: '10vh',
    marginLeft: '15vw',
    height: '67vh',
    width: '71vw',
    border: 'thick solid #262626',
    borderWidth: '0 30px 30px 0',
    borderRadius: '0 0 5% 0'
  },
  border3:{
    position: 'absolute',
    marginTop: '11vh',
    marginLeft: '14vw',
    height: '20vh',
    width: '20vw',
    border: 'thick solid #262626',
    borderWidth: '40px 0 0 40px',
    borderRadius: '5% 0 0 0'
  },
  text:{
    lineHeight: '40px'
  },
  downvote: {
    position: 'absolute',
    marginLeft: '45vw',
    marginTop: '80vh',
    height: '50px',
    width: '50px',
    zIndex: '10000',
  },
  arrow: {
      width: "100px",
      height: "100px",
      marginLeft: "8px",
      transition: '1s',
      color: '#ffffdd',
  },
}
};

export default pillsStyle;
