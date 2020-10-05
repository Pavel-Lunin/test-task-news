import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  makeStyles,
  Toolbar,
  CssBaseline,
} from '@material-ui/core';
import { EmojiPeople, Home, Settings, Help } from '@material-ui/icons';
import { fetchNewPage } from '../../../redux/actions/news';

const drawerWidth = 170;

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
  },
  drawer: {
    width: drawerWidth,
    maxWidth: 200,
    flexShrink: 0,
    [theme.breakpoints.down('767')]: {
      display: 'none',
    },
  },

  active: {
    fontWeight: 'bold',
    color: '#fe5f1e',
  },

  drawerPaper: {
    maxWidth: 200,
    width: drawerWidth,
  },

  drawerContainer: {
    flexWrap: 'wrap',
  },
}));

const NavAppBar = React.memo(({ visibleMenu, sortRef, setVisibleMenu, currentPage, pageSize }) => {
  const menuItems = [
    {
      listIcon: <Home />,
      listText: 'Главная',
      listPath: `/news?page=${currentPage}`,
    },
    {
      listIcon: <Settings />,
      listText: 'Настройки',
      listPath: '/settings',
    },
    {
      listIcon: <Help />,
      listText: 'Помощь',
      listPath: '/help',
    },
    {
      listIcon: <EmojiPeople />,
      listText: 'О нас',
      listPath: '/AboutUs',
    },
  ];

  const classes = useStyles();
  const [activeItem, setActiveItem] = useState();
  const dispatch = useDispatch();

  const onSelectItem = (index) => {
    setActiveItem(index);
    if (index === 0) {
      fetchNewPage(currentPage, pageSize)(dispatch);
    }
    //Скрывать NavAppBar по нажатию на позицию
    setVisibleMenu(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box component="div">
        <Drawer
          ref={sortRef}
          className={visibleMenu ? classes.drawerPaper : classes.drawer}
          variant="permanent">
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {menuItems.map((items, index) => (
                <ListItem
                  onClick={() => onSelectItem(index)}
                  button
                  key={`${items}_${index}`}
                  component={Link}
                  to={items.listPath}>
                  <ListItemIcon>{items.listIcon}</ListItemIcon>
                  <ListItemText
                    className={activeItem === index ? classes.active : ''}
                    primary={items.listText}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Box>
    </div>
  );
});

export default NavAppBar;
