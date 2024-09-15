import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { keyframes } from 'styled-components';

// Keyframes for pop animation
const popAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled component for HeroSection
const HeroSectionWrapper = styled.div`
  .slide-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    font-family: Arial, sans-serif;

    h1, p {
      animation: ${popAnimation} 0.5s ease-in-out; /* Apply pop animation */
    }
  }

  h1 {
    font-size: 4rem;
    font-weight: 900;
    animation: ${popAnimation} 0.8s ease-in-out;

    @media (max-width: 768px) {
      font-size: 2.5rem; /* Mobile view */
    }

    @media (min-width: 1024px) {
      font-size: 5rem; /* Laptop view */
    }
  }

  p {
    font-size: 1.5rem;
    animation: ${popAnimation} 1s ease-in-out;

    @media (max-width: 768px) {
      font-size: 1.2rem; /* Mobile view */
    }

    @media (min-width: 1024px) {
      font-size: 2rem; /* Laptop view */
    }
  }
`;

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
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
    <HeroSectionWrapper className="breathe-animation">
      <Slider {...settings}>
        <div>
          <div
            className="slide"
            style={{
              backgroundImage: `url('https://yoga.ayush.gov.in/Yoga-History/images/15.jpg')`,
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <div className="slide-content">
              <h1>all फिट</h1>
              <p>आरोग्य परंभ भाग्यं स्वास्थ्य सर्वार्थसाधनम् ॥</p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="slide"
            style={{
              backgroundImage: `url('https://www.mindbodyonline.com/sites/default/files/public/styles/scale_1172_width/public/2023-09/fitness-hero.png.webp?itok=iM-t0YvN')`,
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <div className="slide-content">
              <h1>all फिट</h1>
              <p>आरोग्य परंभ भाग्यं स्वास्थ्य सर्वार्थसाधनम् ॥</p>
            </div>
          </div>
        </div>
        <div>
          <div
            className="slide"
            style={{
              backgroundImage: `url('https://trimurtiyogabali.com/wp-content/uploads/2024/08/4059987_11zon-1536x1024.jpg')`,
              height: '100vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
            }}
          >
            <div className="slide-content">
              <h1>all फिट</h1>
              <p>आरोग्य परंभ भाग्यं स्वास्थ्य सर्वार्थसाधनम् ॥</p>
            </div>
          </div>
        </div>
      </Slider>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
