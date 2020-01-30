
// selectors
export const getSearchString = ({searchString}) => searchString.value ;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({searchString, cards}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length; 
// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

