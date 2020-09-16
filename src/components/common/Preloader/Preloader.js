import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Preloader.css';

let Preloader = ({ loading }) => {
  return loading ? (
    <div className="circular">
      <CircularProgress size={75} />
    </div>
  ) : null;
};

export default Preloader;
