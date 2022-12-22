import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { GrUserManager } from 'react-icons/gr';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

import ImageSeven from '../images/ImageSeven.jpg';
import Quote from '../images/quote.jpg';
import Spoon from '../images/spoon.jpg';



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
    margin-left:220px;
    margin-bottom: 1.2rem;
    text-align: left;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    @media screen and (max-width: 780px) {
        font-size: clamp(0.5rem, 2.5vw, 1rem);
        text-align: center;

        margin-left:0;

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

const ManagerIcon = styled(GrUserManager)`
height: 30px;
width: 30px;
color: #fff;
position: relative;
left: 100px;
margin-bottom: 10px;
`;
const Image = styled.img`
height: 15px;
width: 15px;
position: relative;
left: 370px;
margin-bottom: 10px;
`; 
const Testimony = () => {
 

  return (
    <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img css = {' width: 100vw; height: 100vh;'}src={ImageSeven} alt="chef_image" />
    </div>
    <div className="app__wrapper_info"> 
    <ManagerIcon />
    <Image src={Quote} alt="quote_image" />
      <Content>
      <p> A word From The General Manager <br /></p> 
      <br />
     
      <h1>We help our customers to<br /> create their dream place, < br /></h1>
      <h1 css = {'color: #B49E77; '}>WHERE PRECUOUS MOMENTS <br /> WILL HAPPEN<br /></h1>
      <h1>It is not about the walls, gates, buildings<br /> or any solid object; < br /></h1>
      <h1 css = {'color: #B49E77; '}>it’s about how to make the surroundings<br /> warm and friendly <br /> to fit every moment</h1>
      <h2> Wessam Fayed</h2>
        </Content>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={Quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
       
      </div>
    </div>
  </div>
);

  
};

export default Testimony;
