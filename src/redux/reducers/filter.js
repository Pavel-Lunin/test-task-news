const SET_FILTER = 'filter/SET_FILTER';

const initialState = {
  filterBy: 'all',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return { ...state, filterBy: action.filterBy };
    }
    default:
      return state;
  }
};
export default filterReducer;
