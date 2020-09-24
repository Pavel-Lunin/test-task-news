const initialState = {
  items: [],
  itemsForIS: [],
  pageSize: 6,
  totalResults: [],
  currentPage: 1,
  loading: false,
  pageIsLoading: false,
};

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_NEWS': {
      return {
        ...state,
        items: action.items,
      };
    }
    case 'SET_NEWS_IS': {
      return { ...state.itemsForIS, itemsForIS: action.itemsForIS };
    }
    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage };
    }
    case 'SET_TOTTAL_RESULTS': {
      return { ...state, totalResults: action.totalResults };
    }
    case 'SET_LOADING': {
      return { ...state, loading: action.loading };
    }
    case 'SET_PAGE_IS_LOADING': {
      return { ...state, pageIsLoading: action.pageIsLoading };
    }
    case 'SET_PAGE_SIZE': {
      return { ...state, pageSize: action.pageSize };
    }
    default:
      return state;
  }
}
export default newsReducer;
