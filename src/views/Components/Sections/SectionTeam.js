import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax, Background } from 'react-parallax';
import { isMobile } from 'react-device-detect';
import { Link, animateScroll as scroll } from "react-scroll";
import DelayLink from 'react-delay-link';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Paper from '@material-ui/core/Paper';


import saksham from 'assets/img/image/teams/team20/saksham.webp';
import ayush from 'assets/img/image/teams/team20/ayush.webp';
import nitesh from 'assets/img/image/teams/team20/nitesh.webp';
import Ali from 'assets/img/image/teams/team20/ali.webp';
import Fenil from 'assets/img/image/teams/team20/fenil.jpg';
import hemangi from 'assets/img/image/teams/team20/hemangi.webp';
import Lekha from 'assets/img/image/teams/team20/lekha.webp';
import Aravind from 'assets/img/image/teams/team20/aravind.webp';
import Tuhin from 'assets/img/image/teams/team20/tuhin.webp';
import bgImage from 'assets/img/sign.jpg';
import bgImageMob from 'assets/img/Team.jpg';
import Arrowd from "@material-ui/icons/ArrowDropDown";
import { Button } from '@material-ui/core';


const useStyles = makeStyles({

  container: {
    zIndex: '10',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    // fontFamily: 'gotham',
    fontWeight: '600',
    textStrokeColor: '#fff',
    textFillColor: 'transparent',
  },
  content: {
    display: 'flex',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imag: {
    borderRadius: '50%',
    objectFit: 'cover',
    zIndex: '100'
  },
  Status: {
    color: '#f5f3f0',
    zIndex: '100'
  },
  iconTray: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: '100'
  },
  icon: {
    color: 'white',
    opacity: '0.5'
  },
  cover: {
    position: 'absolute',
    zIndex: '10'
  },

  downvote: {
    height: '5vh',
    width: '100%',
    zIndex: '10000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: '0.4',
    transition: '250ms ease-in-out',
    '&:hover': {
      opacity: '0.7'
    }
  },
  arrow: {
    width: "100px",
    height: "100px",
    transition: '1s',
    color: '#fff',
    opacity: '0.3'
  },

  '@media (min-width: 800px)': {
    container: {
      height: '120vh',
    },
    title: {
      fontSize: '6vw',
      textStrokeWidth: '3px',
      marginTop: '2vh'
    },
    content: {
      flexWrap: 'wrap',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    box: {
      height: '42vh',
      width: '17vw',
    },
    break: {
      flexBasis: '100%',
      height: '5vh'
    },
    imag: {
      marginTop: '25px',
      height: '20vh',
      width: '10vw',
    },
    cover: {
      height: '40vh',
      width: '16vw',
      filter: 'blur(5px)',
      clipPath: 'polygon(0 0, 100% 0%, 100% 64%, 50% 40%, 0 64%)',
    },
    Button: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      width: '15vw',
      height: '5em',
      color: 'white',
      transition: '200ms ease-in-out',
      '&:hover': {
        backgroundColor: '#fff',
        opacity: '0.5',
        color: 'black'
      }
    },
  },

  '@media (max-width: 800px)': {
    container: {
      height: '540vh',
      flexDirection: 'column'
    },
    title: {
      fontSize: '20vw',
      textStrokeWidth: '2px',
      margin: '5vh 0 5vh 0'
    },
    // content: {
    //   flexWrap: 'wrap',
    //   height: '100%',
    //   flexDirection: 'column',
    //   alignItems: 'space-around',
    //   justifyContent: 'center'
    // },
    box: {
      height: '50vh',
      width: '80vw',
    },
    imag: {
      marginTop: '25px',
      height: '30vh',
      width: '65vw',
    },
    cover: {
      height: '50vh',
      width: '80vw',
      filter: 'blur(3px)',
      clipPath: 'polygon(0 0, 100% 0%, 100% 64%, 50% 40%, 0 64%)',
    },
    Button: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      width: '70vw',
      height: '5em',
      color: 'white',
      transition: '200ms ease-in-out',
      '&:hover': {
        backgroundColor: '#fff',
        opacity: '0.5',
        color: 'black'
      }
    }
  }
});

const images = [{
  name: 'Saksham Bhadani',
  designation: 'Team Lead',
  image: saksham,
  instagram: "https://www.instagram.com/saksham_bhadani/",
  linkedIn: "https://www.linkedin.com/in/saksham-bhadani/",
  twitter: "",
  facebook: "https://www.facebook.com/saksham.bhadani"
}, {
  name: 'Ayush Sagar',
  designation: 'Team Manager',
  image: ayush,
  instagram: "https://www.instagram.com/a_s_3_11/",
  linkedIn: "https://www.linkedin.com/in/ayush-sagar-5b7125155/",
  twitter: "https://twitter.com/AyushSa65725676",
  facebook: "https://www.facebook.com/profile.php?id=100007954330087"
}, {
  name: 'Fenil Bamnoliya',
  designation: 'Mechanical Lead',
  image: Fenil,
  instagram: "https://www.instagram.com/_felix007_/",
  linkedIn: "https://www.linkedin.com/in/fenil-bamnoliya-2b1abb163/",
  twitter: "",
  facebook: "https://www.facebook.com/profile.php?id=100007582218521"
}, {
  name: 'Nitesh Thota',
  designation: 'Head Of Corporate',
  image: nitesh,
  instagram: "https://www.instagram.com/call_me_chintz/",
  linkedIn: "https://www.linkedin.com/in/nitesh1012/",
  twitter: "https://twitter.com/Chintz0101",
  facebook: ""
}, {
  name: 'Hemangi Dudani',
  designation: 'Research Lead',
  image: hemangi,
  instagram: "https://www.instagram.com/hemangi2112/",
  linkedIn: "https://www.linkedin.com/in/hemangi-dudani-102735191/",
  twitter: "",
  facebook: "https://www.facebook.com/profile.php?id=100006370309478"
}, {
  name: 'Lekha K',
  designation: 'Autonomous Lead',
  image: Lekha,
  instagram: "https://www.instagram.com/_this_machine_is_learning_/",
  linkedIn: "https://www.linkedin.com/in/lekha-k-87822914b/",
  twitter: "https://twitter.com/LekhaKarthikey1",
  facebook: ""
}, {
  name: 'Anguluri Aravind',
  designation: 'Developers Lead',
  image: Aravind,
  instagram: "https://www.instagram.com/aravindkumar_99/",
  linkedIn: "https://www.linkedin.com/in/anguluri-aravind-kumar-084748173/",
  twitter: "",
  facebook: "https://www.facebook.com/profile.php?id=100009218214814"
}, {
  name: 'Rahamath Ali',
  designation: 'Embedded Systems Lead',
  image: Ali,
  instagram: "https://www.instagram.com/meer_rahamath_ali/",
  linkedIn: "https://www.linkedin.com/in/rahamath-ali-9530a8b7/",
  twitter: "",
  facebook: ""
}, {
  name: 'Tuhin Sengupta',
  designation: 'Science Lead',
  image: Tuhin,
  instagram: "https://www.instagram.com/tuhin0208/",
  linkedIn: "https://www.linkedin.com/in/tuhin-sengupta-5058a1179/",
  twitter: "https://twitter.com/TuhinSengupta14",
  facebook: "https://www.facebook.com/profile.php?id=100004152036765"
}
];

var bgImageRender = () => {
  if (isMobile)
    return bgImageMob;

  return bgImage;
}

export default function FullWidthGrid() {
  const classes = useStyles();

  const breakRender = (index) => {
    if (!isMobile) {
      if (index == 4) {
        return <div className={classes.break}></div>;
      }
    }
  }

  const instaLink = (profile) => {
    if (profile.instagram) {
      return <a href={profile.instagram}>
        <InstagramIcon className={classes.icon} fontSize="large" />
      </a>;
    }
  }
  const twitterLink = (profile) => {
    if (profile.twitter) {
      return <a href={profile.twitter}>
        <TwitterIcon className={classes.icon} fontSize="large" />
      </a>;
    }
  }
  const facebookLink = (profile) => {
    if (profile.facebook) {
      return <a href={profile.facebook}>
        <FacebookIcon className={classes.icon} fontSize="large" />
      </a>;
    }
  }
  const linkedInLink = (profile) => {
    if (profile.linkedIn) {
      return <a href={profile.linkedIn}>
        <LinkedInIcon className={classes.icon} fontSize="large" />
      </a>;
    }
  }

  const contentRender = () => {
    return (images.map((profile, index) =>
      <React.Fragment>
        <Paper elevation={24} className={classes.box} >
          <img className={classes.cover} src={profile.image}></img>
          <img className={classes.imag} alt={profile.name} src={profile.image} />
          <h3 className={classes.Status} > {profile.name}</h3>
          <div className={classes.iconTray}>
            {instaLink(profile)}
            {linkedInLink(profile)}
            {facebookLink(profile)}
            {twitterLink(profile)}
          </div>
          <h5 className={classes.Status} > {profile.designation}</h5>
        </Paper>
        {breakRender(index)}
      </React.Fragment>
    )
    );
  }

  const renderMain = () => {
    if (isMobile) {
      return (
        <React.Fragment>
          {contentRender()}
          <DelayLink delay={1800} to="/landing-page" clickAction={() => {
          document.getElementById('load1').style.width = '50vw';
          document.getElementById('load2').style.height = '120vh';
          setTimeout(function () {
            document.getElementById('load3').style.height = '120vh';
          }, 500);
        }}>
          <Button className={classes.Button} size='large'>
            What Do We Do?
     </Button>
     </DelayLink>
        </React.Fragment>
      );
    }
    return (
      <div className={classes.content}>
        {contentRender()}
        <DelayLink delay={1800} to='/team-page' clickAction={() => {
          document.getElementById('load1').style.width = '50vw';
          document.getElementById('load2').style.height = '120vh';
          setTimeout(function () {
            document.getElementById('load3').style.height = '120vh';
          }, 500);
        }}>
          <Button className={classes.Button} size='large'>
            TEAM HISTORY
     </Button>
        </DelayLink>
      </div>
    );
  }

  return (
    <Parallax
      blur={{ min: -70, max: 50 }}
      bgImage={bgImageRender()}
      bgImageAlt="the cat"
      strength={1000}
      className={classes.forMob}
    >
      <div className={classes.container}>
        <div className={classes.title}>Team</div>
        {renderMain()}
        <Link className={classes.downvote}
          to="social"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000} >
          <Arrowd id="pral" className={classes.arrow} />
        </Link>
      </div>
    </Parallax >
  );
}