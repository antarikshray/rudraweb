import React, { useState, useCallback, useEffect } from "react";
import DelayLink from 'react-delay-link';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import photos from "../GalleryPage/components/photo";

import Home from "@material-ui/icons/Home";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navBar: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    height: '6vh',
    width: '100vw',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  mainCard: {
    marginTop: '8vh',
    width: '92vw'
  },
  title: {
    fontSize: '2em',
    color: '#fc4267'
  },
  brand: {
    fontFamily: 'nordi',
    fontSize: '2em',
    color: '#fc4267',
  },
  load1: {
    position: 'fixed',
    height: '120vh',
    width: '50vw',
    backgroundColor: '#bababa',
    zIndex: '1000000',
    transition: '2s ease-in-out',
  },
  load2: {
    position: 'fixed',
    height: '120vh',
    width: '50vw',
    backgroundColor: '#bababa',
    zIndex: '1000000',
    transition: '2s ease-in-out',
  },
  load3: {
    position: 'fixed',
    height: '120vh',
    marginLeft: '50vw',
    width: '50vw',
    backgroundColor: '#454545',
    zIndex: '1000000',
    transition: '2s ease-in-out',
  },
});

export default function GalleryPage(props) {
  const classes = useStyles();

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    setTimeout(function () {
      document.getElementById('load1').style.width = '0px';
      document.getElementById('load2').style.height = '0px';
    }, 2000);
    setTimeout(function () {
      document.getElementById('load3').style.height = '0px';
    }, 3000);
  });

  return (
    <div>
      <div id="load1" className={classes.load1}>
      </div>
      <div id="load2" className={classes.load2}>
      </div>
      <div id="load3" className={classes.load3}>
      </div>
      <div className={classes.navBar}>
        <DelayLink delay={1800} to="/" clickAction={() => {
          document.getElementById('load1').style.width = '50vw';
          document.getElementById('load2').style.height = '120vh';
          setTimeout(function () {
            document.getElementById('load3').style.height = '120vh';
          }, 500);
        }}>
          <Home style={{ fontSize: '2em', color: "#fc4267" }} />
        </DelayLink>
        <div className={classes.title}>
          Gallery
        </div>
        <DelayLink delay={1800} to="/" clickAction={() => {
          document.getElementById('load1').style.width = '50vw';
          document.getElementById('load2').style.height = '120vh';
          setTimeout(function () {
            document.getElementById('load3').style.height = '120vh';
          }, 500);
        }}>
          <div className={classes.brand}>
            rudra
        </div>
        </DelayLink>
      </div>
      <div className={classes.container}>
        <div className={classes.mainCard}>
          <Gallery margin={7} photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </div>
    </div >
  );
}
