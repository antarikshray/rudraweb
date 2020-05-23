
const teamStyle = {
  Name: {
    color: '#f5f3f0'
  },
  Design: {
    color: '#f5f3f0'
  },

  '@media (min-width: 800px)': {
    root: {
      flexGrow: 1,
      height: '100vh',
    },
    box: {
      marginLeft: '6vw',
      marginTop: '5vh',
      boxShadow: '0px 5px 7px 7px #888888',
      height: '35vh',
    },
    bacg: {
      position: 'absolute',
      height: '30vh',
      width: '15vw',
      filter: 'blur(10px)',
      clipPath: 'polygon(0 0, 100% 0%, 100% 43%, 0 64%)'
    },
    imag: {
      margin: 'auto',
      marginTop: '10px',
      height: '18vh',
      width: '9vw',
    },
    title: {
      marginLeft: '42vw'
    },
    downvote: {
      position: 'absolute',
      marginLeft: '44vw',
      marginTop: '90vh',
      height: '50px',
      width: '50px',
      zIndex: '10000',
    },
    arrow: {
      width: "100px",
      height: "100px",
      transition: '1s',
      color: '#fff',
    },
    btn: {
      position: 'absolute',
      marginLeft: '77vw',
      marginTop: '20vh',
      width: '0vh',
      overflow: 'hidden',
      transition: '2s ease-in-out'
    }
  },
  '@media (max-width: 800px)': {
    root: {
      flexGrow: 1,
      marginBottom: '50px',
    },
    box: {
      marginLeft: '6vw',
      marginTop: '4vh',
      boxShadow: '0px 5px 7px 7px #888888',
      height: '38vh',
    },
    bacg: {
      position: 'absolute',
      height: '33vh',
      width: '70vw',
      filter: 'blur(10px)',
      clipPath: 'polygon(0 0, 100% 0%, 100% 43%, 0 64%)'
    },
    imag: {
      margin: 'auto',
      marginTop: '12px',
      height: '20vh',
      width: '38vw',
    },
    btnclass: {
      position: 'absolute',
      marginLeft: '25vw',
      marginTop: '300vh',
      backgroundColor: '#deae1f'
    },
    forMob: {
      paddingBottom: '40vh'
    },
    title: {
      marginLeft: '15vw',
    },
    downvote: {
      position: 'absolute',
      marginLeft: '37vw',
      marginTop: '340vh',
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
}

export default teamStyle;