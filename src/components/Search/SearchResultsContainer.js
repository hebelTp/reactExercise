import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { getFoundedCards } from '../../../redux/cardRedux';

const mapStateToProps = (state, props) => {
  return {
    cards: getFoundedCards(state, props.match.params.id),
  };
};

export default connect(mapStateToProps)(SearchResults);