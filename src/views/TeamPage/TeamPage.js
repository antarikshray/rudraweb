import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TeamContainer from "views/TeamPage/TeamContainer";

//team13
import akshat from "assets/img/image/teams/team13/akshat.jpg";
import alekhya from "assets/img/image/teams/team13/alekhya.jpg";
import jagadeesh from "assets/img/image/teams/team13/jagadeesh.jpg";
import rakesh from "assets/img/image/teams/team13/rakesh.jpg";
import mohit from "assets/img/image/teams/team13/mohit.jpg";

//team14
import karan from "assets/img/image/teams/team14/karan.jpg";
import dinesh from "assets/img/image/teams/team14/dinesh.jpg";
import karthik from "assets/img/image/teams/team14/karthik.jpg";
import mihir from "assets/img/image/teams/team14/Mihir.jpg";
import naren from "assets/img/image/teams/team14/naren.jpg";
import triyambak from "assets/img/image/teams/team14/triyambak.jpg";
import varunp from "assets/img/image/teams/team14/varun.jpg";

//team15
import raviteja from "assets/img/image/teams/team15/raviteja.jpg";
import romin from "assets/img/image/teams/team15/romin.jpg";
import nikunj from "assets/img/image/teams/team15/nikunj.jpg";
import armaan from "assets/img/image/teams/team15/armaan.jpg";
import ashish from "assets/img/image/teams/team15/ashish.jpg";
import sudhanshu from "assets/img/image/teams/team15/sudanshu.jpg";
import vinayak from "assets/img/image/teams/team15/vinayak.jpg";
import shubham from "assets/img/image/teams/team15/subham.jpg";
import sorabh from "assets/img/image/teams/team15/sorabh.jpg";

//team16
import balavivek from "assets/img/image/teams/team16/balavivek.jpg";
import kapil from "assets/img/image/teams/team16/kapil.jpg";
import manav from "assets/img/image/teams/team16/manav.jpg";
import siddharth from "assets/img/image/teams/team16/siddharth.jpg";
import arjun from "assets/img/image/teams/team16/arjun.jpg";
import chinmay from "assets/img/image/teams/team16/chinmay.jpg";
import ishaan from "assets/img/image/teams/team16/ishan.jpg";
import mahendra from "assets/img/image/teams/team16/mahendra.jpg";
import vasudev from "assets/img/image/teams/team16/vasu.jpg";

//team17
import anshuman from "assets/img/image/teams/team17/anshu.jpg";
import rishabh from "assets/img/image/teams/team17/rishabh.jpg";
import sanjeet from "assets/img/image/teams/team17/sanjeet.jpg";
import yashasvi from "assets/img/image/teams/team17/yashasvi.jpg";
import tadeesha from "assets/img/image/teams/team17/tadeesha.jpg";
import vijansh from "assets/img/image/teams/team17/vijansh.jpg";
import saawan from "assets/img/image/teams/team17/sawan.jpg";
import arun from "assets/img/faces/user.png";

//team18
import abhishekp from "assets/img/image/teams/team18/abhishek.jpg";
import bhavansh from "assets/img/image/teams/team18/bhavansh.jpeg";
import aakash from "assets/img/image/teams/team18/akash.jpg";
import varun from "assets/img/image/teams/team18/varun.jpg";
import sonali from "assets/img/image/teams/team18/sonali.jpg";
import vaibhav from "assets/img/image/teams/team18/vaibhav.jpeg";
import uthvag from "assets/img/image/teams/team18/uthvag.jpeg";
import chirag from "assets/img/image/teams/team18/chirag.jpeg";

//team19
import hari from "assets/img/image/teams/team19/hari.webp";
import maanik from "assets/img/image/teams/team19/maanik.webp";
import krishanu from "assets/img/image/teams/team19/krishanu.webp";
import gauravjit from "assets/img/image/teams/team19/gauravjit.jpg";
import rahul from "assets/img/image/teams/team19/rahul.webp";
import lochan from "assets/img/image/teams/team19/lochan.webp";
import niket from "assets/img/image/teams/team19/niket.webp";
import kriti from "assets/img/image/teams/team19/kriti.webp";
import nikhil from "assets/img/image/teams/team19/nikil.webp";
import nikita from "assets/img/image/teams/team19/nikita.webp";
import harry from "assets/img/image/teams/team19/harry.webp";

//team20
import rahulag from "assets/img/image/teams/team20/rahul.webp";
import renish from "assets/img/image/teams/team20/renish.JPG";
import farhad from "assets/img/image/teams/team20/farhad.webp";
import david from "assets/img/image/teams/team20/david.webp";
import chaitanya from "assets/img/image/teams/team20/chaitanya.webp";
import shri from "assets/img/image/teams/team20/shri.webp";
import abhishekr from "assets/img/image/teams/team20/abhishek.jpeg";
import saksham from "assets/img/image/teams/team20/saksham.webp";
import ayush from "assets/img/image/teams/team20/ayush.webp";
import fenil from "assets/img/image/teams/team20/fenil.jpg";
import nitesh from "assets/img/image/teams/team20/nitesh.webp";
import hemangi from "assets/img/image/teams/team20/hemangi.webp";
import lekha from "assets/img/image/teams/team20/lekha.webp";
import aravind from "assets/img/image/teams/team20/aravind.webp";
import ali from "assets/img/image/teams/team20/ali.webp";
import tuhin from "assets/img/image/teams/team20/tuhin.webp";
import antariksh from "assets/img/image/teams/team20/antariksh.webp";
import prateek from "assets/img/image/teams/team20/prateek.webp";
import aishanya from "assets/img/image/teams/team20/aishanya.webp";
import pawan from "assets/img/image/teams/team20/pawan.webp";
import anurup from "assets/img/image/teams/team20/anurup.webp";
import vishal from "assets/img/image/teams/team20/vishal.webp";
import anirudh from "assets/img/image/teams/team20/anirudh.webp";
import jordan from "assets/img/image/teams/team20/jordan.webp";
import reshesh from "assets/img/image/teams/team20/reshesh.webp";
import oishwarya from "assets/img/faces/user.png";
import mayur from "assets/img/faces/user.png";
import lokesh from "assets/img/image/teams/team20/lokesh.webp";

//rovers
import rover2020 from "assets/img/image/rovers/2020-irc.webp";
import rover2019 from "assets/img/image/rovers/2019.webp";
import rover2018 from "assets/img/image/rovers/2018.webp";
import rover2017 from "assets/img/image/rovers/2017.webp";
import rover2016 from "assets/img/image/rovers/2016.webp";
import rover2015 from "assets/img/image/rovers/2015.webp";
import rover2014 from "assets/img/image/rovers/2014.webp";
import rover2013 from "assets/img/image/rovers/2013.webp";

const useStyles = makeStyles({
  container: {
    // height: '100vh',
    backgroundColor: "#536473",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    color: "#BFCFD9",
  },
  "@media (min-width: 800px)": {
    rover: {
      height: "45vh",
      border: "3px solid #BFCFD9",
      transition: "300ms ease-in-out",
      "&:hover": {
        transform: "translate(10px)",
      },
      filter: "drop-shadow(5px 0 5px #323a42)",
    },
  },
  "@media (max-width: 800px)": {
    rover: {
      height: "20vh",
      border: "3px solid #BFCFD9",
      filter: "drop-shadow(5px 0 5px #323a42)",
    },
  }
});

const profile = [
  [
    {
      name: "Rahul Agarwal",
      designation: "Team Lead",
      image: rahulag,
    },
    {
      name: "Renish Kumar",
      designation: "Team Manager",
      image: renish,
    },
    {
      name: "David Chaudhary",
      designation: "Technical Director",
      image: david,
    },
    {
      name: "Chaitanya Joshi",
      designation: "Mechanical Lead",
      image: chaitanya,
    },
    {
      name: "Farhad Bharucha",
      designation: "Developers Lead",
      image: farhad,
    },
    {
      name: "Shri Venkatesh",
      designation: "Science Lead",
      image: shri,
    },
    {
      name: "Abhishek Reddy",
      designation: "Head Of Corporate",
      image: abhishekr,
    },
    {
      name: "Saksham Bhadani",
      designation: "Senior Mechanical Dev",
      image: saksham,
    },
    {
      name: "Fenil Bamnoliya",
      designation: "Senior Mechanical Dev",
      image: fenil,
    },
    {
      name: "Hemangi Dudani",
      designation: "Senior Mechanical Dev",
      image: hemangi,
    },
    {
      name: "Ayush Sagar",
      designation: "Senior Power Electronics Dev",
      image: ayush,
    },
    {
      name: "Rahamath Ali",
      designation: "Senior Embedded Dev",
      image: ali,
    },
    {
      name: "Nitesh Thota",
      designation: "Senior Communications Dev",
      image: nitesh,
    },
    {
      name: "Lekha K",
      designation: "Senior Autonomous Dev",
      image: lekha,
    },
    {
      name: "Anguluri Aravind",
      designation: "Senior Systems Dev",
      image: aravind,
    },
    {
      name: "Tuhin Sengupta",
      designation: "Senior Researcher",
      image: tuhin,
    },
    {
      name: "Antariksh Ray",
      designation: "Controller Dev",
      image: antariksh,
    },
    {
      name: "Aishnya Shanvi",
      designation: "Embedded Dev",
      image: aishanya,
    },
    {
      name: "Prateek",
      designation: "Core Systems Dev",
      image: prateek,
    },
    {
      name: "Pawan Wadhwani",
      designation: "AI and Systems Dev",
      image: pawan,
    },
    {
      name: "Anurup Mohanty",
      designation: "Astrobiologist",
      image: anurup,
    },
    {
      name: "Vishal",
      designation: "Geologist",
      image: vishal,
    },
    {
      name: "Anirudh",
      designation: "Machine Vision Dev",
      image: anirudh,
    },
    {
      name: "Jordan Fernandez",
      designation: "Astrobiologist",
      image: jordan,
    },
    {
      name: "Mayur Bhosale",
      designation: "Mechanical Dev",
      image: mayur,
    },
    {
      name: "Reshesh Pathak",
      designation: "Embedded Dev",
      image: reshesh,
    },
    {
      name: "Lokesh Khadim",
      designation: "Embedded Dev",
      image: lokesh,
    },
    {
      name: "Oishwarya Banerjee",
      designation: "Corporate Manager",
      image: oishwarya,
    },
  ],
  [
    {
      name: "Hari Krishna",
      designation: "Team Lead",
      image: hari,
    },
    {
      name: "Maanik Narayan",
      designation: "Team Manager",
      image: maanik,
    },
    {
      name: "Krishanu Kumar",
      designation: "Technical Director",
      image: krishanu,
    },
    {
      name: "Gauravjit Singh Gill",
      designation: "Mechanical Lead",
      image: gauravjit,
    },
    {
      name: "Rahul R",
      designation: "Research Lead",
      image: rahul,
    },
    {
      name: "Lochan RN",
      designation: "Developer's Lead",
      image: lochan,
    },
    {
      name: "Niket Kumar",
      designation: "Electronics Lead",
      image: niket,
    },
    {
      name: "Kriti Pratap",
      designation: "Vision & Autonomous Lead",
      image: kriti,
    },
    {
      name: "Nikil Datta",
      designation: "Corporate Lead",
      image: nikhil,
    },
    {
      name: "Shri Venkatesh",
      designation: "Science Lead",
      image: shri,
    },
    {
      name: "Rahul Agarwal",
      designation: "Analysis Lead",
      image: rahulag,
    },
    {
      name: "David Chaudhary",
      designation: "Simulation Lead",
      image: david,
    },
    {
      name: "Chaitanya Joshi",
      designation: "Design Lead",
      image: chaitanya,
    },
    {
      name: "Renish Kumar",
      designation: "Senior Developer",
      image: renish,
    },
    {
      name: "Farhad Bharucha",
      designation: "Senior Developer",
      image: farhad,
    },
    {
      name: "Abhishek Reddy",
      designation: "Senior Developer",
      image: abhishekr,
    },
    {
      name: "Saksham Bhadani",
      designation: "Mechatroniks",
      image: saksham,
    },
    {
      name: "Fenil Bamnoliya",
      designation: "Mechanical Dev",
      image: fenil,
    },
    {
      name: "Hemangi Dudani",
      designation: "Mechanical Dev",
      image: hemangi,
    },
    {
      name: "Ayush Sagar",
      designation: "Power Electronics Dev",
      image: ayush,
    },
    {
      name: "Rahamath Ali",
      designation: "Embedded Dev",
      image: ali,
    },
    {
      name: "Nitesh Thota",
      designation: "Communications Dev",
      image: nitesh,
    },
    {
      name: "Lekha K",
      designation: "Developer",
      image: lekha,
    },
    {
      name: "Anguluri Aravind",
      designation: "Developer",
      image: aravind,
    },
    {
      name: "Nikita Gupta",
      designation: "Developer",
      image: nikita,
    },
    {
      name: "Tuhin Sengupta",
      designation: "Bio-Science Researcher",
      image: tuhin,
    },
    {
      name: "Aishnya Shanvi",
      designation: "Embedded Developer",
      image: aishanya,
    },
    {
      name: "Antariksh Ray",
      designation: "Developer",
      image: antariksh,
    },
    {
      name: "Prateek",
      designation: "Developer",
      image: prateek,
    },
    {
      name: "Pawan Wadhwani",
      designation: "Developer",
      image: pawan,
    },
    {
      name: "Harry Lal",
      designation: "Developer",
      image: harry,
    },
    {
      name: "Anurup Mohanty",
      designation: "Astrobiologist",
      image: anurup,
    },
    {
      name: "Vishal",
      designation: "Geologist",
      image: vishal,
    },
  ],
  [
    {
      name: "Abhishek Patel",
      designation: "Team Lead",
      image: abhishekp,
    },
    {
      name: "Bhavansh Tandon",
      designation: "Team Manager & Electronics Lead",
      image: bhavansh,
    },
    {
      name: "Varun Ramesh",
      designation: "Technical Director",
      image: varun,
    },
    {
      name: "Sonali Sinha Roy",
      designation: "Mechanical Lead",
      image: sonali,
    },
    {
      name: "Vaibhav Shelke",
      designation: "Coding Lead",
      image: vaibhav,
    },
    {
      name: "Uthvag",
      designation: "Science Lead",
      image: uthvag,
    },
    {
      name: "Chirag Bharani",
      designation: "Sponsorship Lead",
      image: chirag,
    },
    {
      name: "Akash Sehgal",
      designation: "Marketing Lead",
      image: aakash,
    },
    {
      name: "Hari Krishna",
      designation: "Electronics Team",
      image: hari,
    },
    {
      name: "Maanik Narayan",
      designation: "Electronics Team",
      image: maanik,
    },
    {
      name: "Krishanu Kumar",
      designation: "Mechanical Team",
      image: krishanu,
    },
    {
      name: "Gauravjit Singh Gill",
      designation: "Mechanical Team",
      image: gauravjit,
    },
    {
      name: "Rahul R",
      designation: "Mechanical Team",
      image: rahul,
    },
    {
      name: "Lochan RN",
      designation: "Coding Team",
      image: lochan,
    },
    {
      name: "Kriti Pratap",
      designation: "Coding Team",
      image: kriti,
    },
    {
      name: "Nikil Datta",
      designation: "Corporate Team",
      image: nikhil,
    },
    {
      name: "Shri Venkatesh",
      designation: "Science Team",
      image: shri,
    },
    {
      name: "Rahul Agarwal",
      designation: "Mechanical Team",
      image: rahulag,
    },
    {
      name: "David Chaudhary",
      designation: "Mechanical Team",
      image: david,
    },
    {
      name: "Chaitanya Joshi",
      designation: "Mechanical Team",
      image: chaitanya,
    },
    {
      name: "Renish Kumar",
      designation: "Developer",
      image: renish,
    },
    {
      name: "Abhishek Reddy",
      designation: "Developer",
      image: abhishekr,
    },
  ],
  [
    {
      name: "Anshuman Dikshit",
      designation: "Team Lead",
      image: anshuman,
    },
    {
      name: "Rishabh Nahata",
      designation: "Team Manager",
      image: rishabh,
    },
    {
      name: "Sanjeet Ray",
      designation: "Mechanical Lead",
      image: sanjeet,
    },
    {
      name: "Yashasvi Pathak",
      designation: "Electronics Lead",
      image: yashasvi,
    },
    {
      name: "Tadeesha Roy",
      designation: "Coding Lead",
      image: tadeesha,
    },
    {
      name: "Vijansh Khanna",
      designation: "Science Lead",
      image: vijansh,
    },
    {
      name: "Chirag Bharani",
      designation: "Sponsorship Lead",
      image: chirag,
    },
    {
      name: "Akash Sehgal",
      designation: "Marketing & PR Lead",
      image: aakash,
    },
    {
      name: "Abhishek Patel",
      designation: "Mechanical Team",
      image: abhishekp,
    },
    {
      name: "Bhavansh Tandon",
      designation: "Electronics Team",
      image: bhavansh,
    },
    {
      name: "Varun Ramesh",
      designation: "Mechanical Team",
      image: varun,
    },
    {
      name: "Sonali Sinha Roy",
      designation: "Mechanical Team",
      image: sonali,
    },
    {
      name: "Vaibhav Shelke",
      designation: "Coding Team",
      image: vaibhav,
    },
    {
      name: "Uthvag",
      designation: "Science Team",
      image: uthvag,
    },
    {
      name: "Hari Krishna",
      designation: "Electronics Team",
      image: hari,
    },
    {
      name: "Maanik Narayan",
      designation: "Electronics Team",
      image: maanik,
    },
    {
      name: "Saawan Saurabh",
      designation: "Electronics Team",
      image: saawan,
    },
    {
      name: "Niket Kumar",
      designation: "Electronics Team",
      image: niket,
    },
    {
      name: "Krishanu Kumar",
      designation: "Mechanical Team",
      image: krishanu,
    },
    {
      name: "Gauravjit Singh Gill",
      designation: "Mechanical Team",
      image: gauravjit,
    },
    {
      name: "Rahul R",
      designation: "Mechanical Team",
      image: rahul,
    },
    {
      name: "Lochan RN",
      designation: "Coding Team",
      image: lochan,
    },
    {
      name: "Kriti Pratap",
      designation: "Coding Team",
      image: kriti,
    },
    {
      name: "Arun Baalaaji",
      designation: "Electronics Team",
      image: arun,
    },
  ],
  [
    {
      name: "Balavivek",
      designation: "Team Lead",
      image: balavivek,
    },
    {
      name: "Kapil DK",
      designation: "Team Manager",
      image: kapil,
    },
    {
      name: "Manav Wadhwan",
      designation: "Mechanical Lead",
      image: manav,
    },
    {
      name: "Siddharth Deore",
      designation: "Coding Lead",
      image: siddharth,
    },
    {
      name: "Arjun M",
      designation: "Science Lead",
      image: arjun,
    },
    {
      name: "Anshuman Dikshit",
      designation: "Mechanical Team",
      image: anshuman,
    },
    {
      name: "Rishabh Nahata",
      designation: "Mechanical Team",
      image: rishabh,
    },
    {
      name: "Sanjeet Ray",
      designation: "Mechanical Team",
      image: sanjeet,
    },
    {
      name: "Yashasvi Pathak",
      designation: "Electronics Team",
      image: yashasvi,
    },
    {
      name: "Tadeesha Roy",
      designation: "Coding Team",
      image: tadeesha,
    },
    {
      name: "Vijansh Khanna",
      designation: "Science Team",
      image: vijansh,
    },
    {
      name: "Abhishek Patel",
      designation: "Mechanical Team",
      image: abhishekp,
    },
    {
      name: "Chinmay Burugul",
      designation: "Mechanical Team",
      image: chinmay,
    },
    {
      name: "Ishan Mortarwar",
      designation: "Mechanical Team",
      image: ishaan,
    },
    {
      name: "Bhavansh Tandon",
      designation: "Electronics Team",
      image: bhavansh,
    },
    {
      name: "Varun Ramesh",
      designation: "Mechanical Team",
      image: varun,
    },
    {
      name: "Sonali Sinha Roy",
      designation: "Mechanical Team",
      image: sonali,
    },
    {
      name: "Saawan Saurabh",
      designation: "Electronics Team",
      image: saawan,
    },
    {
      name: "Krishanu Kumar",
      designation: "Mechanical Team",
      image: krishanu,
    },
    {
      name: "Mahendra Kumar",
      designation: "Mechanical Team",
      image: mahendra,
    },
    {
      name: "Vasudev Panday",
      designation: "Mechanical Team",
      image: vasudev,
    },
  ],
  [
    {
      name: "Burugu Raviteja",
      designation: "Team Lead",
      image: raviteja,
    },
    {
      name: "Romin Gajjar",
      designation: "Electronics Team",
      image: romin,
    },
    {
      name: "Nikunj Panchal",
      designation: "Mechanical Lead",
      image: nikunj,
    },
    {
      name: "Anshuman Dikshit",
      designation: "Mechanical Team",
      image: anshuman,
    },
    {
      name: "Rishabh Nahata",
      designation: "Mechanical Team",
      image: rishabh,
    },
    {
      name: "Manav Wadhwan",
      designation: "Mechanical Team",
      image: manav,
    },
    {
      name: "Balavivek",
      designation: "Electronics Team",
      image: balavivek,
    },
    {
      name: "Kapil DK",
      designation: "Mechanical Team",
      image: kapil,
    },
    {
      name: "Armaan Arora",
      designation: "Mechanical Team",
      image: armaan,
    },
    {
      name: "Arjun M",
      designation: "Science Team",
      image: arjun,
    },
    {
      name: "Ashish Sinha",
      designation: "Electronics Team",
      image: ashish,
    },
    {
      name: "Chinmay Burugul",
      designation: "Mechanical Team",
      image: chinmay,
    },
    {
      name: "Sanjeet Ray",
      designation: "Mechanical Team",
      image: sanjeet,
    },
    {
      name: "Siddharth Deore",
      designation: "Coding Team",
      image: siddharth,
    },
    {
      name: "Sudhanshu Shekhar",
      designation: "Science Team",
      image: sudhanshu,
    },
    {
      name: "Sorabh Gandhi",
      designation: "Electronics Team",
      image: sorabh,
    },
    {
      name: "Yashasvi Pathak",
      designation: "Electronics Team",
      image: yashasvi,
    },
    {
      name: "Tadeesha Roy",
      designation: "Coding Team",
      image: tadeesha,
    },
    {
      name: "Vinayak Soni",
      designation: "Coding Team",
      image: vinayak,
    },
    {
      name: "Mahendra Kumar",
      designation: "Mechanical Team",
      image: mahendra,
    },
    {
      name: "Subham Biswas",
      designation: "Coding Team",
      image: shubham,
    },
  ],
  [
    {
      name: "Karan Vaish",
      designation: "Team Lead",
      image: karan,
    },
    {
      name: "Karthik Pasupatheeshwaran",
      designation: "Mechanical Team",
      image: karthik,
    },
    {
      name: "Naren GK",
      designation: "Science Team",
      image: naren,
    },
    {
      name: "Dinesh Sutar",
      designation: "Mechanical Team",
      image: dinesh,
    },
    {
      name: "Triyambak Tripathy",
      designation: "Coding Team",
      image: triyambak,
    },
    {
      name: "Burugu Raviteja",
      designation: "Team Lead",
      image: raviteja,
    },
    {
      name: "Nikunj Panchal",
      designation: "Mechanical Lead",
      image: nikunj,
    },
    {
      name: "Sudhanshu Shekhar",
      designation: "Science Team",
      image: sudhanshu,
    },
    {
      name: "Mihir Shah",
      designation: "Electronics Team",
      image: mihir,
    },
    {
      name: "Varun Pant",
      designation: "Mechanical Team",
      image: varunp,
    },
  ],
  [
    {
      name: "Karan Vaish",
      designation: "Head",
      image: karan,
    },
    {
      name: "Akshat Agarwal",
      designation: "Mechanical Team",
      image: akshat,
    },
    {
      name: "Naren GK",
      designation: "Science Team",
      image: naren,
    },
    {
      name: "Jagadeesh RB",
      designation: "Electronics Team",
      image: jagadeesh,
    },
    {
      name: "Alekhya Gumidelli",
      designation: "Coding Team",
      image: alekhya,
    },
    {
      name: "Varun Pant",
      designation: "Mechanical Team",
      image: varunp,
    },
    {
      name: "Karthik Pasupatheeshwaran",
      designation: "Mechanical Team",
      image: karthik,
    },
    {
      name: "Rakesh Vasireddy",
      designation: "Electronics Team",
      image: rakesh,
    },
    {
      name: "Mohit Agarwal",
      designation: "",
      image: mohit,
    },
  ],
];

export default function TeamPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>Team 2020</h1>
      </div>
      <div>
        <img className={classes.rover} src={rover2020} />
      </div>
      <TeamContainer profiles={profile[0]} />
      <br />
      <br />
      <div>
        <h1 className={classes.title}>Team 2019</h1>
      </div>
      <div>
        <img className={classes.rover} src={rover2019} />
      </div>
      <TeamContainer profiles={profile[1]} />
      <br />
      <br />
      <div>
        <h1 className={classes.title}>Team 2018</h1>
      </div>
      <div>
        <img className={classes.rover} src={rover2018} />
      </div>
      <TeamContainer profiles={profile[2]} />
      <br />
      <br />
      <div>
        <h1 className={classes.title}>Team 2017</h1>
      </div>
      <div>
        <img className={classes.rover} src={rover2017} />
      </div>
      <TeamContainer profiles={profile[3]} />
      <br />
      <br />
      <div>
        <h1 className={classes.title}>Team 2016</h1>
      </div>
      <div>
        <img className={classes.rover} src={rover2016} />
      </div>
      <TeamContainer profiles={profile[4]} />
      <br />
      <br />
      <div>
        <h1 className={classes.title}>Team 2015</h1>
      </div>
      <div>
        <img className={classes.rover} src={rover2015} />
      </div>
      <TeamContainer profiles={profile[5]} />
      <br />
      <br />
      <div>
        <h1 className={classes.title}>Team 2014</h1>
      </div>
      <div>
        <img className={classes.rover} src={rover2014} />
      </div>
      <TeamContainer profiles={profile[6]} />
      <br />
      <br />
      <div>
        <h1 className={classes.title}>Team 2013</h1>
      </div>
      <div>
        <img className={classes.rover} src={rover2013} />
      </div>
      <TeamContainer profiles={profile[7]} />
    </div>
  );
}
