import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { GrUserManager } from 'react-icons/gr';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from './Listings.js'
import { IoStatsChart } from "react-icons/io5";
import Container from './Listings.js'
import InfoRow from './Listings.js'
import InfoWrap from './Listings.js'
import ImageEight from './Listings.js'
import SliderData, { SliderDataThree } from '../data/SliderData'




import InfoLink from './Listings.js'
import Arrow from './Listings.js'

import ImageSeven from '../images/ImageSeven.jpg';
import ImageNine from '../images/ImageNine.jpg';
import Quote from '../images/quote.jpg';
import Spoon from '../images/spoon.jpg';
import Hero2 from './Hero2';


const Content = styled.div`
  position: relative;
  z-index: 10;
  bottom:510px;
  left: 60px;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  text-align: center;

  h1 {
    font-size: clamp(0.6rem, 5vw, 1rem);
    font-weight: 400;
    text-shadow: 1px 1px 0 black, 
    5px 13px 15px black;
    text-align: center;
    margin-bottom: 0.8rem;
    @media screen and (max-width: 780px) {
        font-size: clamp(0.2rem, 2.3vw, 1rem);

    }
  }
  p {
    
    font-weight: 600;
    text-shadow: 1px 1px 0 black,  5px 13px 15px black;
    margin-right:300px;
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    @media screen and (max-width: 780px) {
        font-size: clamp(0.5rem, 2.5vw, 1rem);
        text-align: center;

        margin-right:0;

    }
  }
  h2 {
  font-family: 'Rock Salt', cursive;
font-weight: 800;
margin-left:350px;

font-size: 1.2em;
color: #B49E77;
 @media screen and (max-width: 780px) {
        font-size: clamp(0.6rem, 2.3vw, 1rem);
        text-align: center;

        margin-left:70px;

  }
  }
`;
const EarningsCard = styled.div`
  height: 40vh;
  width: 14rem;

  position: absolute;
  background-color: #B49E77;

  bottom: 200px;
  right: 400px;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
  @media screen and (max-width: 780px) {
        font-size: clamp(0.6rem, 2.3vw, 1rem);
        text-align: center;

        margin-left:70px;

  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;


const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const EarningsText = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;

const Earning = styled.h2`
  text-align: center;
`;

const EarningsIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;


const Section = styled.section`
  height: 100%;
  max-height: 2000px;
  position: relative;
  overflow: hidden;
  
  background-color: #231F20;
`;

const Image = styled.img`
height: 15px;
width: 15px;
position: relative;


`; 

const Testimony = () => {
 

  return (
    <Section>
    <div css = {' width: 100vw; height: 100vh;'} className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img css = {' width: 100vw; height: 100vh;'}src={ImageSeven} alt="chef_image" />
    </div>
    <div className="app__wrapper_info"> 
    
    {/* <Image src={Quote} alt="quote_image" /> */}
      <Content>
      <p> A word From The General Manager <br /></p> 
      <br />
     
      <h1>We help our customers to<br /> create their dream place, < br /></h1>
      <h1 css = {'color: #B49E77; '}>WHERE PRECUOUS MOMENTS <br /> WILL HAPPEN<br /></h1>
      <h1>It is not about the walls, gates, buildings<br /> or any solid object; < br /></h1>
      <h1 css = {'color: #B49E77; '}>it’s about how to make the surroundings<br /> warm and friendly <br /> to fit every moment</h1>
      <h2> Wessam Fayed</h2>
      
      </Content>
    </div>
    
    
  </div>
  
<Hero2 slides={SliderDataThree}></Hero2>


</Section>
  
);

  
};

export default Testimony;
