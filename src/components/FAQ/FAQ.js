import React from 'react';
import Container from '../Container/Container';
import {listData} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={listData.title}
      imageHero={listData.image}/>
    <h2>FAQ</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices a mauris vitae malesuada. Duis congue tristique enim, placerat feugiat nisl mollis vel. Donec eget velit viverra dui posuere aliquam nec in turpis. Quisque commodo leo quis augue consectetur sagittis. Praesent vitae scelerisque justo. Praesent suscipit suscipit consequat. Cras ut cursus libero. Aenean dictum nunc nec nisl sollicitudin aliquet. Duis mauris nunc, porttitor placerat turpis eget, sodales pretium ante.

Mauris eu ante eget quam dapibus consectetur. Nam tincidunt libero eu nulla congue consectetur. Maecenas vitae aliquam dolor. Pellentesque porttitor tellus a enim tempor, nec condimentum libero gravida. Maecenas non malesuada massa. Nam facilisis porta metus, sed mollis ante commodo eu. Nulla et imperdiet quam. Cras in dui purus. Nam eget lacus vitae dui facilisis cursus elementum nec massa. Integer tempor dapibus erat.

Pellentesque sem nulla, auctor vitae lectus id, feugiat condimentum nisi. Nunc in felis non magna pharetra dignissim. Nam nisl sapien, dignissim quis vulputate et, gravida ut tortor. Suspendisse sit amet molestie turpis. Donec bibendum tincidunt mi ut sollicitudin. Vestibulum tincidunt nibh ut bibendum cursus. Nam sit amet lectus tristique, placerat neque nec, luctus diam. Nullam ut consectetur neque.</p>
  </Container>
);

export default FAQ;