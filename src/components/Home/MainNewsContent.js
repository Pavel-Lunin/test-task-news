import React from 'react';
import { Container, Grid } from '@material-ui/core';
import NewsCard from './NewsCard/NewsCard';
import Paginator from '../Pagination/Pagination';
import Preloader from '../common/Preloader/Preloader';
import './MainNewsContent.css';
import FilterNews from '../Filter/FilterNews';
import { useSelector } from 'react-redux';
import filter from 'lodash/filter';
import moment from 'moment';

const MainNewsContent = React.memo(function MainNewsContent() {
  const sortBy = (items, filterBy) => {
    switch (filterBy) {
      case 'all':
        return items;
      case 'today':
        return filter(items, function (o) {
          const filterN = moment(o.publishedAt).calendar();
          const filterName = 'Вчера';
          return filterN.toLowerCase().indexOf(filterName.toLowerCase());
        });
      case 'yesterday':
        return filter(items, function (o) {
          const filterN = moment(o.publishedAt).calendar();
          const filterName = 'сегодня';
          return filterN.toLowerCase().indexOf(filterName.toLowerCase());
        });

      default:
        return items;
    }
  };

  const { items, pageSize, loading, totalResults, currentPage, filterBy } = useSelector(
    ({ news, filterReducer }) => {
      return {
        items: sortBy(news.items, filterReducer.filterBy),
        currentPage: news.currentPage,
        filterBy: filterReducer.filterBy,
        pageSize: news.pageSize,
        loading: news.loading,
        totalResults: news.totalResults,
      };
    },
  );

  return (
    <Container fixed maxWidth={false}>
      <Preloader loading={loading} />
      {loading === false && (
        <div className="root">
          <main className="content">
            <Paginator
              items={items}
              currentPage={currentPage}
              pageSize={pageSize}
              totalResults={totalResults}
              filterBy={filterBy}
            />
            <FilterNews filterBy={filterBy} />
            <Grid
              container
              spacing={4}
              style={{
                width: '100%',
                textAlign: 'center',
                margin: 0,
              }}>
              {items.map((items, index) => (
                <Grid key={`${items}_${index}`} item xs={12} sm={12} md={6} lg={4} xl={3}>
                  <NewsCard
                    url={items.url}
                    sourceName={items.source.name}
                    date={items.publishedAt}
                    key={`${items}_${index}`}
                    title={items.title}
                    description={items.description}
                    urlToImage={items.urlToImage}
                  />
                </Grid>
              ))}
            </Grid>
            <Paginator
              items={items}
              currentPage={currentPage}
              pageSize={pageSize}
              totalResults={totalResults}
            />
          </main>
        </div>
      )}
    </Container>
  );
});

export default MainNewsContent;
