import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Paginator.css';
import { fetchNewPage } from '../../redux/actions/news';
import { Button } from '@material-ui/core';

const Paginator = React.memo(
  ({ pageSize, totalResults, currentPage, portionSize = 4, filterBy }) => {
    const dispatch = useDispatch();
    //const [activeItem, setActiveItem] = React.useState(currentPage);

    const onPageChanged = React.useCallback(
      (currentPage) => {
        //setActiveItem(currentPage);
        fetchNewPage(currentPage, pageSize)(dispatch);
      },
      [pageSize, dispatch],
    );

    const pagesCount = Math.ceil(totalResults / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = React.useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
      <div className="paginator">
        {portionNumber > 1 && (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}>
            PREV
          </Button>
        )}

        {pages
          .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p, index) => {
            return (
              <NavLink
                key={`${p}_${index}`}
                to={`/news?page=${p}`}
                style={{ textDecoration: 'none' }}>
                <Button
                  variant={currentPage === p ? 'contained' : 'outlined'}
                  onClick={() => {
                    onPageChanged(p);
                  }}
                  key={`${p}_${index}`}>
                  {p}
                </Button>
              </NavLink>
            );
          })}

        {portionCount > portionNumber && (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}>
            NEXT
          </Button>
        )}
      </div>
    );
  },
);

export default Paginator;
