import React from 'react';
import { render } from '@testing-library/react';
import { setCurrentPage } from '../actions/news';
import newsReducer from './news';

test('new currentPage shold be added', () => {
  let action = setCurrentPage(1);
  const initialState = {
    currentPage: 0,
  };
  let newState = newsReducer(initialState, action);

  expect(newState.currentPage).toBe(1);
});
