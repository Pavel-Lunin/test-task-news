import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.sass';
import Settings from './components/Navbar/NavAppBar/Settings/Settings';
import Help from './components/Navbar/NavAppBar/Help/Help';
import AboutUs from './components/Navbar/NavAppBar/AboutUs/AboutUs';
import Header from './components/Header/Header';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core';
import MainNewsContent from './components/Home/MainNewsContent';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews } from './redux/actions/news';
import NavAppBar from './components/Navbar/NavAppBar/NavAppBar';
import * as queryString from 'querystring';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  content: {
    width: '100%',
    flexGrow: 1,
    paddingTop: theme.spacing(9),
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('767')]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function App() {
  const classes = useStyles();
  const [visibleMenu, setVisibleMenu] = React.useState(false);
  const sortRef = React.useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const toggleVisibleMenu = React.useCallback(() => {
    setVisibleMenu(!visibleMenu);
  }, [visibleMenu]);

  const { pageSize, currentPage, darkMode, fontSizeValue, filterBy } = useSelector(
    ({ news, theme, filterReducer }) => {
      return {
        pageSize: news.pageSize,
        currentPage: news.currentPage,
        darkMode: theme.darkMode,
        fontSizeValue: theme.fontSizeValue,
        filterBy: filterReducer.filterBy,
      };
    },
  );

  const [newsIS, setNewsIS] = React.useState([]);

  React.useEffect(() => {
    const parsed = queryString.parse(history.location.search.substr(1));
    let actualPage = currentPage;
    if (!!parsed.page) actualPage = Number(parsed.page);
    fetchNews(actualPage, pageSize, setNewsIS, newsIS)(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize, dispatch]);

  React.useEffect(() => {
    history.push({
      pathname: '/news',
      search: `?page=${currentPage}`,
    });
  }, [history, currentPage]);

  const theme = createMuiTheme({
    palette: { type: darkMode ? 'dark' : 'light' },
    typography: {
      fontSize: fontSizeValue,
    },
  });

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header toggleVisibleMenu={toggleVisibleMenu} visibleMenu={visibleMenu} />
        <NavAppBar
          currentPage={currentPage}
          pageSize={pageSize}
          dispatch={dispatch}
          sortRef={sortRef}
          visibleMenu={visibleMenu}
          setVisibleMenu={setVisibleMenu}
          filterBy={filterBy}
        />
        <div className={classes.content}>
          <Switch>
            <Route
              path="/news"
              render={() => <MainNewsContent currentPage={currentPage} />}
              exact
            />
            <Route
              path="/settings"
              render={() => <Settings pageSize={pageSize} fontSizeValue={fontSizeValue} />}
              exact
            />
            <Route path="/help" component={Help} exact />
            <Route path="/AboutUs" render={() => <AboutUs darkMode={darkMode} />} exact />
            <Route render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
