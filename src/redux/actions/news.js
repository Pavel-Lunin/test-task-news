import axios from 'axios';

const baseUrl = `https://newsapi.org/v2/top-headlines?country=ru&apiKey=51b176c05fc644bd925465164359fb01&`;

export const fetchNews = (currentPage, pageSize) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`${baseUrl}page=${currentPage}&pageSize=${pageSize}`);
      dispatch(setNews(response.data.articles));
      dispatch(setTotalResults(response.data.totalResults));
      dispatch(setCurrentPage(currentPage));
      dispatch(setLoading(false));
    } catch (e) {
      console.error(e);
    }
  };
};

export const fetchNewPage = (currentPage, pageSize) => {
  return async (dispatch) => {
    try {
      dispatch(setCurrentPage(currentPage));
      dispatch(setPageIsLoading(true));
      const response = await axios.get(`${baseUrl}page=${currentPage}&pageSize=${pageSize}`);
      dispatch(setNews(response.data.articles));
      dispatch(setPageIsLoading(false));
    } catch (e) {
      console.error(e);
    }
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

export const setPageIsLoading = (pageIsLoading) => ({
  type: 'SET_PAGE_IS_LOADING',
  pageIsLoading,
});

export const setPageSize = (pageSize) => ({
  type: 'SET_PAGE_SIZE',
  pageSize,
});
