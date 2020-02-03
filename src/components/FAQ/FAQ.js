import React from 'react';
import Container from '../Container/Container';
import {FAQData} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQData.title}
      imageHero={FAQData.adres}/>
    <p>{FAQData.content}</p>
  </Container>
);

export default FAQ;