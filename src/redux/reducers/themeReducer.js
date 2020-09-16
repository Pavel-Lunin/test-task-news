const initialState = {
  darkMode: false,
  fontSizeValue: 1.1,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHANGE_THEME': {
      return {
        ...state,
        darkMode: action.payload,
      };
    }
    case 'SET_FONT_SIZE_VALUE': {
      return {
        ...state,
        fontSizeValue: action.fontSizeValue,
      };
    }
    default:
      return state;
  }
};

export default themeReducer;
