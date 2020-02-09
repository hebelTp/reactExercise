import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { getFoundedCards } from '../../../redux/cardRedux';
//import { createAction_changeSearchString } from '../../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  console.log('Information provided by Route site adress & params',props.match.params.id);
  return {
    cards: getFoundedCards( state, props.match.params.id),  
  };
};

export default connect(mapStateToProps)(SearchResults);