import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import  ImageFive from '../images/ImageFive.jpg';
import  ImageSix from '../images/ImageSix.jpg';

import {AiFillShop} from 'react-icons/ai';
import {FaClinicMedical} from 'react-icons/fa';
import {BsBuilding} from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai';
import {IoEllipsisVerticalSharp} from 'react-icons/io5';




const Section = styled.section`
  background: #231F20;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FeatureContent = styled.div`
  position: relative;
  z-index: 10;
  
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    margin-left: 200px;
    font-family: Verdana, sans-serif;



    margin-top:80px;
  }

  p {
    font-family: Verdana, sans-serif;

    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
`;

const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #231F20;

@media screen and (max-width: 768px)
{
  height: 1100px;
}

@media screen and (max-width: 480px)
{
  height: 1100px;
}



`;
const ServicesWrapper = styled.div`
max-width: 1100px;
margin: 0 auto;
display: grid;

grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1100px){
  grid-template-columns: 1fr 1fr;
}


`;
const ServicesCard= styled.div`
background: #B49E77;
display: flex;
margin-bottom: -80px;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
min-width: 480px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
&:hover {
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
@media screen and (max-width: 470px){
  min-width: 200px;
  margin-bottom: 0px;

  min-width: 300px;

}
/* @media screen and (max-width: 480px) {

    
    margin-top: -700px;

  } */
`;
const ServicesIcon = styled(AiFillHome)`
height: 50px;
width: 50px;
margin-bottom: 10px;
`;

const ServicesIcon2 = styled(BsBuilding)`
height: 50px;
width: 50px;
margin-bottom: 10px;
`;
const ServicesIcon3 = styled(FaClinicMedical)`
height: 50px;
width: 50px;
margin-bottom: 10px;
`;
const ServicesIcon4 = styled(AiFillShop)`
height: 50px;
width: 50px;
margin-bottom: 10px;
`;
const ScrollIcon = styled(IoEllipsisVerticalSharp)`
height: 90px;
width: 90px;
color: #B49E77;
margin-top: 50px;
@media screen and (max-width: 480px) {
  margin-top: 10px;}
`;
const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: red;
margin-bottom: 64px;
font-family: Verdana, sans-serif;
@media screen and (max-width: 480px) {
  font-size: 2rem;
}
`;
const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
font-family: Verdana, sans-serif;
@media screen and (max-width: 480px) {
  font-size: 1rem;
}

`;
const ServicesP= styled.p`
font-size: 1rem;
text-align: center;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;
const BoxContainer = styled.div`
  background: #231F20;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;
`;

const ColumnRight2 = styled.div`
  display: flex;
  top: -80px;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: right;
  padding: 1rem;
`;


const Content = styled.div`
  h1{
   color: #B49E77;
  }
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }


`;

const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;
const ColumnLeft2 = styled.div`
  position: absolute;
  top: -80px;
  left: 0;
  max-width: 850px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;
const GoldImage = styled.img`
  width: 20%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  position: relative;
  object-fit: cover;
  margin-left: 100px;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    padding: 1rem;
    margin-left: 60px;
    max-width: 100%;
    width: 30%;
  height: 100%;
  
    
    
    
  }
`;



const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

`;

const AboutRenovation = () => {
  return (
    <section>
    <Section>
      <Container>
        <Wrap>
          <ColumnLeft>
            <Content
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
            >
            <h1> We Care</h1>  <br />
              <p>
              About the visual impact at every space we are assigned to renovate, starting with a conceptual design and cept, design and moving into implementation.
    </p>
    
                     
            </Content>
            
          </ColumnLeft>
          <ColumnRight>
            <Image
              src={ImageFive}
              data-aos='fade-left'
              data-aos-duration='1200'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
             
            />
          </ColumnRight>
        </Wrap>
        
      </Container>

    </Section>
    <Section>
      <Container css = 'background-color:red;'>
        <Wrap>
          <ColumnRight2>
            <Content
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
              cssy
            >
              <h1>We Provide</h1>  <br />
              <p>
              Complete repair, maintenance, improvement and management for your home, office, clinic and retail through our renovation and remodeling. </p> <br />
          

            </Content>
            
          </ColumnRight2>
          <ColumnLeft2>
            <Image
              src={ImageSix}
              data-aos='fade-left'
              data-aos-duration='1200'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'
             
            />
          </ColumnLeft2>
        </Wrap>
        
      </Container>
      <ServicesContainer  >
<ServicesCard  data-aos='fade-down'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'>
  <ServicesIcon />
        <ServicesH2>
          <center>Homes</center> 
        </ServicesH2>
      
        </ServicesCard>
        <ScrollIcon  data-aos='fade-down'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'/>
        <ServicesCard  data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'>
        <ServicesIcon2 />
        <ServicesH2>
          
          <center>Offices</center> 
        </ServicesH2>
      
        </ServicesCard>
        <ScrollIcon  data-aos='fade-down'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'/>
        <ServicesCard  data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'>
        <ServicesIcon3 />
        <ServicesH2>
       
          <center>Clinics</center> 
        </ServicesH2>
      
        </ServicesCard>
        <ScrollIcon  data-aos='fade-down'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'/>
        <ServicesCard  data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'>
        <ServicesIcon4  />
        <ServicesH2>
       
          <center>Retails</center> 
        </ServicesH2>
      
        </ServicesCard>
      </ServicesContainer>

      
    </Section>
  
    </section>
    
  );
};

export default AboutRenovation;
