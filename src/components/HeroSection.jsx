import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Upcomigs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="breathe-animation">
      <Slider {...settings}>
        <div>
          <div
            className="slide"
            style={{
              backgroundImage: `url('https://yoga.ayush.gov.in/Yoga-History/images/15.jpg')`,
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div>
          <div
            className="slide"
            style={{
              backgroundImage: `url('https://www.mindbodyonline.com/sites/default/files/public/styles/scale_1172_width/public/2023-09/fitness-hero.png.webp?itok=iM-t0YvN')`,
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div>
          <div
            className="slide"
            style={{
              backgroundImage: `url('https://trimurtiyogabali.com/wp-content/uploads/2024/08/4059987_11zon-1536x1024.jpg')`,
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </Slider>

   
    </div>
  );
};

export default Upcomigs;
