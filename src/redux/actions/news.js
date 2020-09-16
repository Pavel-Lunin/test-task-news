import axios from 'axios';

export const fetchNews = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=ru&apiKey=51b176c05fc644bd925465164359fb01&page=${currentPage}&pageSize=${pageSize}`,
      )
      .then((res) => {
        dispatch(setNews(res.data.articles));
        dispatch(setTotalResults(res.data.totalResults));
        dispatch(setCurrentPage(currentPage));
        dispatch(setLoading(false));
      });
  };
};

export const fetchNewPage = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=ru&apiKey=51b176c05fc644bd925465164359fb01&page=${currentPage}&pageSize=${pageSize}`,
      )
      .then((res) => {
        dispatch(setNews(res.data.articles));
      });
  };
};

export const setNews = (items) => ({
  type: 'SET_NEWS',
  items,
});

export const setCurrentPage = (currentPage) => ({
  type: 'SET_CURRENT_PAGE',
  currentPage,
});

export const setTotalResults = (totalResults) => ({
  type: 'SET_TOTTAL_RESULTS',
  totalResults,
});

export const setLoading = (loading) => ({
  type: 'SET_LOADING',
  loading,
});

export const setPageSize = (pageSize) => ({
  type: 'SET_PAGE_SIZE',
  pageSize,
});
