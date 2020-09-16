import themeReducer from './themeReducer';
import { combineReducers } from 'redux';
import newsReducer from './news';
import filterReducer from './filter';

const rootReducer = combineReducers({
  theme: themeReducer,
  news: newsReducer,
  filterReducer,
});

export default rootReducer;
