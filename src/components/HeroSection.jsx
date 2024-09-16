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

    body {
      background-color: #101013;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      
      font-family: "Poppins", sans-serif;
      font-weight: 200;
    }
    
    
    .key {
      font-size: 15vw;
      display: inline-block;
      letter-spacing: -1vw;
      transition: transform 0.2s;
    }
    
    
    
    @keyframes pressDown1 {
      30%,
      40%,
      100% {
        transform: translateY(0);
      }
      35% {
        transform: translateY(10px);
      }
    }
    
    @keyframes pressDown2 {
      70%,
      80%,
      100% {
        transform: translateY(0);
      }
      75% {
        transform: translateY(10px);
      }
    }
    
    @keyframes pressDown3 {
      30%,
      40%,
      100% {
        transform: translateY(0);
      }
      35% {
        transform: translateY(10px);
      }
    }
    
    @keyframes pressDown4 {
      40%,
      50%,
      100% {
        transform: translateY(0);
      }
      45% {
        transform: translateY(10px);
      }
    }
    
    @keyframes pressDown5 {
      20%,
      30%,
      100% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(10px);
      }
    }
    
    @keyframes pressDown6 {
      60%,
      70%,
      100% {
        transform: translateY(0);
      }
      65% {
        transform: translateY(10px);
      }
    }
    
    @keyframes pressDown7 {
      10%,
      20%,
      100% {
        transform: translateY(0);
      }
      15% {
        transform: translateY(10px);
      }
    }
    
    @keyframes pressDown8 {
      35%,
      45%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(10px);
      }
    }
    
    
    
    .key:nth-child(1) {
      animation: pressDown1 2s infinite;
    }
    
    .key:nth-child(2) {
      animation: pressDown2 3s infinite;
    }
    
    .key:nth-child(3) {
      animation: pressDown3 4s infinite;
    }
    
    .key:nth-child(4) {
      animation: pressDown4 2.5s infinite;
    }
    
    .key:nth-child(5) {
      animation: pressDown5 2.5s infinite;
    }
    
    .key:nth-child(6) {
      animation: pressDown6 3.5s infinite;
    }
    
    .key:nth-child(7) {
      animation: pressDown7 2.2s infinite;
    }
    
    .key:nth-child(8) {
      animation: pressDown8 3.2s infinite;
    }
    
    
    
    
    /* extra stuff */
    .jux-linx {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 10px;
      position: absolute;
      left: 20px;
      bottom: 20px;
    }
    a {
      text-decoration: none;
      font-family: "IBM Plex Sans", sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: white;
      background-color: black;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 2px;
      padding: 5px 10px;
      transition: 0.1s all ease-in;
    }
    
    a:nth-child(1):hover {
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0px 2px 0 #349eff;
    }
    
    a:nth-child(2):hover {
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0px 2px 0 #ff5757;
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
            <span class="key">ALL फिट</span>
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
            <span class="key">ALL फिट</span>
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
            <span class="key">ALL फिट</span>
              <p>आरोग्य परंभ भाग्यं स्वास्थ्य सर्वार्थसाधनम् ॥</p>
            </div>
          </div>
        </div>
      </Slider>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
