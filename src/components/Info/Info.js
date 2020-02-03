import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoData} from '../../data/dataStore';
const Info = () => (
  <Container>
    <Hero titleText={infoData.title}
      imageHero={infoData.adres}/>
    
    <p>{infoData.content}</p>
  </Container>
);

export default Info;