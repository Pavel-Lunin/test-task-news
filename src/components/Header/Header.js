import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  menuBurger: {
    display: 'none',
    [theme.breakpoints.down('767')]: {
      display: 'flex',
      position: 'relative',
    },
  },

  toolbar__item: {
    left: 0,
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Header = React.memo(function Header({ toggleVisibleMenu }) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar__item}>
          <IconButton
            className={classes.menuBurger}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleVisibleMenu}>
            <MenuIcon />
          </IconButton>
          <Toolbar>
            <Typography variant="h5" color="inherit">
              News
            </Typography>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </>
  );
});

export default Header;
