import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  "@media (min-width: 800px)": {
    card: {
      backgroundColor: "#BFCFD9",
      height: "32vh",
      width: "13vw",
      alignItems: "center",
      justifyContent: "space-around",
      transition: "300ms ease-in-out",
      "&:hover": {
        transform: "translate(10px)",
      },
      filter: "drop-shadow(7px 0 7px #323a42)",
    },
    image: {
      height: "19vh",
      width: "11vw",
      objectFit: "cover",
      filter: "drop-shadow(3px 0 3px #000)",
    },
    name: {
      color: "#536473",
    },
    desig: {
      color: "#536473",
    },
  },
  "@media (max-width: 800px)": {
    card: {
      backgroundColor: "#BFCFD9",
      height: "28vh",
      width: "43vw",
      alignItems: "center",
      justifyContent: "space-around",
      filter: "drop-shadow(7px 0 7px #323a42)",
    },
    image: {
      height: "15vh",
      width: "35vw",
      objectFit: "cover",
      filter: "drop-shadow(3px 0 3px #000)",
    },
    name: {
      color: "#536473",
      fontSize: "1.3em",
      fontWeight: "bolder",
    },
    desig: {
      color: "#536473",
      fontSize: "1em",
    //   fontWeight: "bold",
    },
  },
});

export default function TeamContainer(props) {
  const classes = useStyles();

  return (
    <GridContainer justify="center" align="center">
      {props.profiles.map((profile, idx) => (
        <GridItem xs={6} sm={2}>
          <Card elevation={24} className={classes.card}>
            <img src={profile.image} className={classes.image} />
            <h3 className={classes.name}>{profile.name}</h3>
            <h4 className={classes.desig}>{profile.designation}</h4>
          </Card>
        </GridItem>
      ))}
    </GridContainer>
  );
}
