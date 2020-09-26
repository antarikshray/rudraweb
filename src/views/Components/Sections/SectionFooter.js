import React, { useState, useEffect } from 'react';
import useReactFontLoader from 'react-font-loader';
import emailjs from 'emailjs-com';

import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import ArrowIcon from 'assets/icon/arrow';
import "assets/css/my.css";
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  '@media (min-width: 800px)': {
    container: {
      height: '50vh',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    emailBox: {
      width: '40vw',
      marginLeft: '5vw'
    },
    loginBtn: {
      flexGrow: 1
    },
    signupBtn: {
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#393A40',
      color: '#8896BF'
    },
    card: {
      borderRadius: '10px',
      filter: 'drop-shadow(10px 0 10px #000)',
      backgroundImage: 'linear-gradient(to right, #8896BF , #69728C)',
    },
    brandFooter: {
      fontFamily: 'nordi',
      fontSize: '6em',
      color: '#8896BF',
      marginLeft: '5vw'
    },
    Arrow: {
      transition: '400ms ease-in-out',
      '&:hover': {
        transform: 'rotate(270deg)'
      },
      marginLeft: '5vw'
    },
  },
  '@media (max-width: 800px)': {
    container: {
      height: '100vh',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    emailBox: {
      width: '80vw'
    },
    loginBtn: {
      flexGrow: 1
    },
    signupBtn: {
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#393A40',
      color: '#8896BF'
    },
    card: {
      backgroundImage: 'linear-gradient(to right, #8896BF , #69728C)',
      marginTop: '10vh',
      borderRadius: '10px',
      filter: 'drop-shadow(10px 0 10px #000)'
    },
    brandFooter: {
      width: '100%',
      fontFamily: 'nordi',
      fontSize: '6em',
      color: '#8896BF',
      margin: '60px 0 0 0',
      filter: 'drop-shadow(10px 0 10px #000)',
      textAlign: 'center'
    },
    Arrow: {
      display: 'flex',
      width: "100%",
      height: '8vh',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      transition: '400ms ease-in-out',
      transform: 'rotate(-90deg)',
    },
    Padding: {
      height: '10vh',
      width: '100%',
      alignContent: 'flex-end',
      backgroundImage: 'linear-gradient(to right, #4A4C59 , #8896BF)'
    },
  }
});


const SectionFooter = (props) => {
  useReactFontLoader({ fonts: [{ name: 'nordi' }] });

  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [query, setQuery] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (email.trim() && query.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, query]);

  const handleSend = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: email,
      message_html: query
    };
    emailjs.send('antariksh', 'template_JBeAR5ay', templateParams, 'user_v9yMiAHo9QegU7s9Bz3s8')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (err) {
        console.log('FAILED...', err);
      });
  };

  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || handleSend();
    }
  };

  const topArrow = () => {
    if (isMobile) {
      return (
        { width: "15vw", color: '#8896BF', filter: 'drop-shadow(5px 15px 10px #000)' }
      );
    } else {
      return (
        { width: "12vw", color: '#8896BF', filter: 'drop-shadow(5px 15px 10px #000)' }
      );
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.brandFooter}>
        rudra
      </div>
      <form className={classes.emailBox} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Mail Us Your Queries" />
          <CardContent>
            <div>
              <TextField
                error={error}
                fullWidth
                id="name"
                type="name"
                label="Name"
                placeholder="Full Name"
                margin="normal"
                onChange={(e) => setFullName(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
              <TextField
                error={error}
                fullWidth
                id="email"
                type="email"
                label="E Mail"
                placeholder="e mail"
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
              <TextField
                error={error}
                fullWidth
                id="query"
                type="text"
                label="Enter Query Here"
                placeholder="Enter Query Here"
                margin="normal"
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              color="#393A40"
              className={classes.loginBtn}
              onClick={handleSend}
              disabled={isButtonDisabled}>
              Send
            </Button>
          </CardActions>
        </Card>
      </form>
      <div className={classes.Arrow} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <ArrowIcon
          color="#393A40"
          styles={topArrow()}
        />
      </div>
      <div className={classes.Padding}>
      </div>
    </div>
  );
}

export default SectionFooter;