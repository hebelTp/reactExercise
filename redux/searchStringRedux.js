
// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({searchString, cards}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length; 
// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE = createActionName('CHANGE');
// action creators
export const createAction_changeSearchString =  payload => ({payload, type: CHANGE }); // 

//function syntax for upper redux syntax  
{/*export function  createAction_changeSearchString(payload) {
  return{
    type: CHANGE,
    payload,
  };
}*/}

// reducer
export default function reducer(statePart = '', action = {}) {
  //console.log('NEW ACTION ARRIVED', action);
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}

