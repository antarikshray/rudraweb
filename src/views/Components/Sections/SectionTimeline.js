import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//load the medias
import img1 from "assets/img/image/rovers/2013.webp";
import img2 from "assets/img/image/rovers/2014.webp";
import img3 from "assets/img/image/rovers/2015.webp";
import img4 from "assets/img/image/rovers/2016.webp";
import img5 from "assets/img/image/rovers/2017.webp";
import img6 from "assets/img/image/rovers/2019.webp";
import img7 from "assets/img/image/rovers/2020-irc.webp";


const useStyles = makeStyles({
  root: {
    marginTop: '10vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#D4D7DC',
    width: '40vw',
    height: '67vh',
  },
  media: {
    height: '50vh',
    width: '37vw',
    margin: 'auto'
  },
  title: {
    margin: '10px',
    fontFamily: 'nordi',
    color: '#737373',
    marginLeft: '16vw',
    fontSize: '2.5rem'
  },
  content: {
    fontSize: '1.5rem'
  },

  '@media (max-width: 1024px)': {
    root: {
      backgroundColor: '#D4D7DC',
      marginLeft: '10vw',
      marginTop: '8vh',
      width: '70vw',
    },
    media: {
      height: '30vh',
      width: '70vw',
      margin: 'auto'
    },
    title: {
      color: '#737373',
      marginLeft: '25vw',
      fontSize: '2.5rem'
    },
    content: {
      fontSize: '1.5rem'
    }
  },
  '@media (max-width: 800px)': {
    root: {
      backgroundColor: '#D4D7DC',
      marginLeft: '10vw',
      marginTop: '8vh',
      width: '70vw',
    },
    media: {
      height: '20vh',
      width: '70vw',
      margin: 'auto'
    },
    title: {
      color: '#737373',
      marginLeft: '15vw',
      fontSize: '2.5rem'
    },
    content: {
      fontSize: '1.5rem'
    }
  }
    
});



const img = [img1, img2, img3, img4, img5, img6, img7];
const text = ['Team Rudra achieved 5th world rank and 1st Asia rank.', 'Team Rudra bagged 5th position in world and 1st in Asia.',
  'Team Rudra achieved 12th world rank and 2nd rank in Asia.', 'Team Rudra stood at 9th position in world and 1st among the Asian Teams.',
  'Team Rudra stood at 20th position in world and 4th among the Asian Teams.', 'Team Rudra stood at 11th position in world and 2nd among the Asian Teams.',
  'Team Rudra stood at 3rd position globally and 1st among the Asian teams'];
const title = ['URC-2013', 'URC-2014', 'URC-2015', 'URC-2016', 'URC-2017', 'URC-2019', 'IRC-2020'];

export default function SectionTimeline(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
            <h1 className={classes.title}>
              {title[props.index]}
            </h1>
            <CardMedia
              className={classes.media}
              component="img"
              image={img[props.index]}
            />
            <CardContent>
              <Typography className={classes.content} variant="body2" color="textSecondary" component="p">
                {text[props.index]}
              </Typography>
            </CardContent>
      </div>
    </div>
  );
}