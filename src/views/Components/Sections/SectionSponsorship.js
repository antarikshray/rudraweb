import React, { useState, useEffect, useRef } from 'react';

import { Link, animateScroll as scroll } from "react-scroll";
import { Parallax, Background } from 'react-parallax';
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import 'assets/css/sponsor.css';
import Arrowd from "@material-ui/icons/ArrowDropDown";
import wheeleez from 'assets/img/image/sponsors/wheeleez.webp';
import nvidia from 'assets/img/image/sponsors/Nvidia_logo.webp';
import anet from 'assets/img/image/sponsors/anet.webp';
import vectorInk from 'assets/img/image/sponsors/vectorink.webp';
import incwave from 'assets/img/image/sponsors/inception_wave.webp';
import monster from 'assets/img/image/sponsors/monster.webp';
import parall from "assets/img/rover.png";


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function SectionSponsorship(props) {
    // const classes = useStyles();

    const prevScrollY = useRef(0);
    useEffect(() => {

        ////////////////scroll event//////////////////////////
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            prevScrollY.current = currentScrollY;
            console.log(currentScrollY);
            if(currentScrollY>=6780 && currentScrollY<=7731){
                document.getElementById('teambutton').style.width = '15vw';
            }
            else{
                document.getElementById('teambutton').style.width = '0vw';
            }
            let element = document.getElementById('sponsortitle');
            let element2 = document.getElementById('partnerstitle');
            if (currentScrollY > 8914 && currentScrollY < 9803) {
                element.className = 'titleDuring';
                document.getElementById('sponsorcontainer').style.backgroundColor = '#6C44D2';
            } else if (currentScrollY >= 9803) {
                element.className = 'titleAfter';
                document.getElementById('sponsorcontainer').style.backgroundColor = '#009BB3';
            }
            else if (currentScrollY <= 8913) {
                element.className = 'title';
            }

            if (currentScrollY > 10770 && currentScrollY < 12003) {
                element2.className = 'titlePDuring';
            } else if (currentScrollY >= 12003) {
                element2.className = 'titlePAfter';
            }
            else {
                element2.className = 'title2';
            }
            if (currentScrollY >= 11830){
                document.getElementById('button').style.width= '20vw';
            }
            else{
                document.getElementById('button').style.width = '0px';
            }
            if(currentScrollY >= 13644){
                document.getElementById('patreonnote').style.width = '0%';
                document.getElementById('patreondot').style.backgroundColor = '#D98471';
                document.getElementById('patreondot').style.position = 'absolute';
                document.getElementById('patreondot').style.top = '150vh';
                document.getElementById('patreondot').style.right = '8vw'; 
            }
            else{
                document.getElementById('patreonnote').style.width = '100%';
                document.getElementById('patreonnote').style.backgroundColor = '#634C73';
                document.getElementById('patreondot').style.backgroundColor = '#634C73';
                document.getElementById('patreondot').style.position = 'fixed';
                document.getElementById('patreondot').style.top = '80vh';
                document.getElementById('patreondot').style.right = '8vw'; 
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY]);


    return (
        <div id='sponsorcontainer' className='container'>
            <div id="sponsortitle" className='title'>
                <h1 className='titleFont' style={{ fontSize: '10vh', fontWeight: '100px' }}>SPONSORS</h1>
            </div>
            <div className='wheeleez'>
                <img height='100%' className='wheeleezimag' src={wheeleez} />
                <hr className='horisponsor'></hr>
            </div>
            <div className='nvidia'>
                <img height='100%' className='nvidiaimag' src={nvidia} />
                <hr className='horisponsor'></hr>
            </div>

            <div className='anet'>
                <img height='100%' className='anetimag' src={anet} />
                <hr className='horisponsor'></hr>
            </div>
            <Parallax
                blur={{ min: -100, max: 100 }}
                bgImage={parall}
                style={{ overflow: 'visible' }}
                bgImageStyle={{ position: 'absolute', marginTop: '150vh', height: '70vh', width: '70vw' }}
                bgImageAlt="the cat"
                strength={700}
            >
                <div style={{ height: '200vh' }}>
                </div>
            </Parallax>
            <div id="partnerstitle" className='title2'>
                <h1 className='titleFont'>PARTNERS</h1>
            </div>
            <div className='vectorInk'>
                <img height='100%' className='vectorimag' src={vectorInk} />
                <h2 className='vectortitle'>DESIGN PARTNER</h2>
                <hr className='horipartner'></hr>
            </div>
            <div className='inceptionwave'>
                <img height='100%' className='vectorimag' src={incwave} />
                <h2 className='vectortitle'>MEDIA PARTNER</h2>
                <hr className='horipartner'></hr>
            </div>
            <div className='monster'>
                <img height='100%' className='monsterimag' src={monster} />
                <h2 className='vectortitle'>ENERGY PARTNER</h2>
                <hr className='horipartner'></hr>
            </div>
            <div id='button' className='button'>
                <Button style={{backgroundColor: '#005A82'}} size="lg" round>
                    Find out all sponsors
                </Button>
            </div>
        </div>
    );
}