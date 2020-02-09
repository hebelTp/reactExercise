import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';


class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    searchString: PropTypes.string,
  }

  render() {
    const { cards } = this.props;
    //console.log('searchResults');

    return (
      <Container>
        <section className={styles.component}>
          <div className={styles.cards} >
          
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;  