import React from 'react';
import { Typography, Slider, makeStyles, Divider } from '@material-ui/core';
import ThemeSwitch from '../../../Theme/ThemeSwitch';
import { setPageSize } from '../../../../redux/actions/news';
import { useDispatch } from 'react-redux';
import { setFontSizeValue } from '../../../../redux/actions/theme';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  divider: {
    width: '95%',
  },
  slider: {
    width: '50%',
  },
});

const Settings = React.memo(({ pageSize, fontSizeValue }) => {
  const classes = useStyles();

  const dispatch = useDispatch(setPageSize(), setFontSizeValue());

  const handleChange = (e, newValue) => {
    dispatch(setPageSize(newValue));
  };
  const changeFontSize = (e, newValue) => {
    dispatch(setFontSizeValue(newValue));
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" style={{ marginBottom: '10px' }}>
        Settings
      </Typography>
      <Divider className={classes.divider} />
      <Typography>Тема оформления</Typography>
      <ThemeSwitch />
      <Divider className={classes.divider} />
      <Typography id="discrete-slider" gutterBottom>
        Количество новостей на странице
      </Typography>
      <Slider
        className={classes.slider}
        defaultValue={pageSize}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        value={pageSize}
        step={1}
        marks
        min={1}
        max={40}
        onChange={handleChange}
      />
      <Divider className={classes.divider} />
      <Typography id="discrete-slider" gutterBottom>
        Размер шрифта
      </Typography>
      <Slider
        className={classes.slider}
        defaultValue={fontSizeValue}
        value={fontSizeValue}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={0.9}
        max={1.5}
        onChange={changeFontSize}
      />
      <Typography id="font" style={{ fontSize: fontSizeValue * 10 }}>
        "Это пример!" и его размер: {fontSizeValue * 10}
      </Typography>
      {/* перевернуть ползунок */}
      <div>
        <Divider className={classes.divider} />
      </div>
    </div>
  );
});

export default Settings;
