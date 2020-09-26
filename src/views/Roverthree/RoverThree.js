import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'aframe';
import 'aframe-particle-system-component';
import 'aframe-look-at-component';
import bgImage from '../../assets/img/bg5.jpg';
import { Entity, Scene } from 'aframe-react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

const useStyles = makeStyles({
    container: {
        height: '100vh',
        backgroundImage: 'url('+ bgImage +')',
        backgroundSize: 'cover'
    }
});

const RoverThree = props => {

    const classes = useStyles();

    const downHandler = e => {
        if (e.key == "w") {
            let rotationX = document.getElementById('myRover').object3D.rotation.x
            document.getElementById('myRover').object3D.rotation.x = rotationX - 0.05;
        } else if (e.key == "s") {
            let rotationX = document.getElementById('myRover').object3D.rotation.x
            document.getElementById('myRover').object3D.rotation.x = rotationX + 0.05;
        } else if (e.key == "a") {
            let rotationY = document.getElementById('myRover').object3D.rotation.y
            document.getElementById('myRover').object3D.rotation.y = rotationY + 0.05;
        } else if (e.key == "d") {
            let rotationY = document.getElementById('myRover').object3D.rotation.y
            document.getElementById('myRover').object3D.rotation.y = rotationY - 0.05;
        } else if (e.key == "q") {
            let scale = document.getElementById('myRover').object3D.position.y;
            document.getElementById('myRover').object3D.position.y = scale + 0.01;
        } else if (e.key == "e") {
            let scale = document.getElementById('myRover').object3D.position.y;
            document.getElementById('myRover').object3D.position.y = scale - 0.01;
        } else if (e.key == "j") {
            let rotationZ = document.getElementById('myRover').object3D.rotation.z;
            document.getElementById('myRover').object3D.rotation.z = rotationZ + 0.05;
        } else if (e.key == "l") {
            let rotationZ = document.getElementById('myRover').object3D.rotation.z;
            document.getElementById('myRover').object3D.rotation.z = rotationZ - 0.05;
        }
    }

    const upHandler = e => {
        // console.log(e);
        // console.log(animation)
    }
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    });

    return (
        <div>
        <BrowserView>
        <div className={classes.container}>
            <Scene vr-mode-ui={true}>
                <Entity
                    id="camera"
                    look-at="#myRover"
                    primitive="a-camera"
                    wasd-controls="true"
                />
                <a-assets>
                    <a-asset-item id="rover" src="untitled.glb"></a-asset-item>
                </a-assets>
                <a-light color="red" position="-1 1 0"></a-light>
                <Entity particle-system={{ preset: 'snow', particleCount: 5000 }} />
                <Entity
                    id="myRover"
                    gltf-model="#rover"
                    rotation="180 0 0"
                    position={{ x: 0, y: 0.01, z: 0 }}
                />
            </Scene>
        </div>
        </BrowserView>
        <MobileView>
        <Scene vr-mode-ui={true}>
                {/* <Entity
                    id="camera"
                    look-at="#myRover"
                    primitive="a-camera"
                    wasd-controls="true"
                /> */}
                <a-assets>
                    <a-asset-item id="rover" src="untitled.glb"></a-asset-item>
                </a-assets>
                <a-light color="red" position="-1 1 0"></a-light>
                <Entity particle-system={{ preset: 'snow', particleCount: 5000 }} />
                <Entity
                    id="myRover"
                    gltf-model="#rover"
                    rotation="270 0 0"
                    position={{ x: 0, y: 1, z: -2 }}
                />
            </Scene>
        </MobileView>
        </div>
    );
}

export default RoverThree;
