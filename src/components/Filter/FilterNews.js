import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { setNewsFilter } from '../../redux/actions/filter';
import { useDispatch } from 'react-redux';

const FilterNews = React.memo(function FilterNews({ filterBy }) {
  const dispatch = useDispatch();

  const filterNewsClick = (filterBy) => {
    dispatch(setNewsFilter(filterBy));
  };

  return (
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button
        onClick={() => filterNewsClick('all')}
        variant={filterBy === 'all' ? 'contained' : 'outlined'}>
        Все
      </Button>
      <Button
        onClick={() => filterNewsClick('today')}
        variant={filterBy === 'today' ? 'contained' : 'outlined'}>
        Сегодня
      </Button>
      <Button
        onClick={() => filterNewsClick('yesterday')}
        variant={filterBy === 'yesterday' ? 'contained' : 'outlined'}>
        Вчера
      </Button>
    </ButtonGroup>
  );
});

export default FilterNews;
