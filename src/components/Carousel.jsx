import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { makeStyles } from '@material-ui/core/styles';

const CustomCarousel = ({ images }) => {
  const useStyles = makeStyles(() => ({
    img: {
      padding: 30,
      height: 400,
      width: 300,
      objectFit: 'cover',
      borderRadius: 50,
      minHeight: 360,
      minWidth: 260,
      transition: 'all .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
  }));

  const classes = useStyles();
  return (
    <>
      {images.length > 0 && (
        <Carousel
          centered
          arrows
          slidesPerPage={3}
          slidesPerScroll={1}
          draggable
          arrowLeft={<ArrowBackIosIcon color="primary" />}
          arrowRight={<ArrowForwardIosIcon color="primary" />}
          addArrowClickHandler
          breakpoints={{
            640: {
              slidesPerPage: 1,
            },
            900: {
              slidesPerPage: 2,
            },
          }}
        >
          {images.map((img) => {
            return (
              <img
                key={img}
                className={classes.img}
                src={img}
                alt="rocket"
              />
            );
          })}
        </Carousel>
      )}
    </>
  );
};

export default CustomCarousel;
