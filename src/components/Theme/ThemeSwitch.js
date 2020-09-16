import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { setDarkModeAC } from '../../redux/actions/theme';
import { useSelector, useDispatch } from 'react-redux';

const ThemeSwitch = React.memo(function ThemeSwitch() {
  const { darkMode } = useSelector(({ theme }) => {
    return {
      darkMode: theme.darkMode,
    };
  });

  const dispatch = useDispatch(setDarkModeAC());
  return (
    <FormControlLabel
      label={darkMode ? 'Dark' : 'Light'}
      control={
        <Switch edge="end" onChange={() => dispatch(setDarkModeAC(!darkMode))} checked={darkMode} />
      }
    />
  );
});

export default ThemeSwitch;
