import {connect} from 'react-redux';
import Search from './Search';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../../redux/searchStringRedux';

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    searchString: getSearchString(state),
    countVisible: countVisibleCards(state),
    countAll: countAllCards(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => {
    //console.log('changeSearchString', newSearchString );
    dispatch(createAction_changeSearchString(newSearchString));
  },
});  

export default connect(mapStateToProps, mapDispatchToProps)(Search);
