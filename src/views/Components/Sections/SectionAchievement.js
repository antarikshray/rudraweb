import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import { makeStyles } from "@material-ui/core/styles";
import { isMobile } from "react-device-detect";
// import { Link, animateScroll as scroll } from "react-scroll";

import SectionTimeline from "./SectionTimeline.js";
import Arrowd from "@material-ui/icons/ArrowDropDown";

import "assets/css/my.css";

const VALUES = [
  "May 28 2013",
  "May 31 2014",
  "May 31 2015",
  "May 30 2016",
  "May 30 2017",
  "May 31 2019",
  "Jan 17 2020",
];
const pallete = [];

const useStyles = makeStyles(() => ({
  "@media (min-width: 1024px)": {
    container: {
      display: "flex",
      flexDirectrion: "column",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "#d6d6d6",
      height: "100vh",
    },

    timeline: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      zIndex: "10",
    },

    card: {
      width: "60vw",
      height: "75vh",
    },
    arrow: {
      transition: "300ms",
      "&:hover": {
        transform: "scale(1.4)",
      },
    },
    larrow: {
      width: "100px",
      height: "100px",
      color: "#737373",
      transform: "rotate(90deg)",
    },
    rarrow: {
      width: "100px",
      height: "100px",
      color: "#737373",
      transform: "rotate(-90deg)",
    },
  },

  "@media (max-width: 1024px)": {
    timeline: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      height: "75vh",
      backgroundColor: "#d6d6d6",
      zIndex: "10",
    },
    card: {
      paddingTop: "5vh",
      width: "90vw",
      height: "55vh",
    },
  },

  "@media (max-width: 800px)": {
    timeline: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      height: "80vh",
      backgroundColor: "#d6d6d6",
      zIndex: "10",
    },
    card: {
      paddingTop: "5vh",
      width: "90vw",
      height: "63vh",
    },
    arrow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    larrow: {
      width: "100px",
      height: "100px",
      color: "#737373",
      transform: "rotate(90deg)",
    },
    rarrow: {
      width: "100px",
      height: "100px",
      color: "#737373",
      transform: "rotate(-90deg)",
    },
  },
}));

export default function SectionAchievement() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  if (!isMobile) {
    return (
      <div className={classes.container}>
        <div className={classes.timeline}>
          <div className={classes.arrow}>
            <Arrowd
              className={classes.larrow}
              onClick={() => {
                if (value - 1 >= 0) {
                  setValue(value - 1);
                  setPrevious(value + 1);
                }
              }}
            />
          </div>
          <div className={classes.card}>
            <HorizontalTimeline
              index={value}
              indexClick={(index) => {
                setValue(index);
                setPrevious(value);
              }}
              values={VALUES}
              labelWidth={100}
            />
            <SectionTimeline index={value} />
          </div>
          <div className={classes.arrow}>
            <Arrowd
              className={classes.rarrow}
              onClick={() => {
                if (value + 1 < VALUES.length) {
                  setValue(value + 1);
                  setPrevious(value - 1);
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <div className={classes.timeline}>
        <div className={classes.card}>
          <HorizontalTimeline
            index={value}
            indexClick={(index) => {
              setValue(index);
              setPrevious(value);
            }}
            values={VALUES}
            labelWidth={100}
          />
          <SectionTimeline index={value} />
        </div>
        <div className={classes.arrow}>
          <Arrowd
            className={classes.larrow}
            onClick={() => {
              if (value - 1 >= 0) {
                setValue(value - 1);
                setPrevious(value + 1);
              }
            }}
          />
          <Arrowd
            className={classes.rarrow}
            onClick={() => {
              if (value + 1 < VALUES.length) {
                setValue(value + 1);
                setPrevious(value - 1);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
