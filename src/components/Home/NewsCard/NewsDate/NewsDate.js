import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/ru';

const NewsDate = React.memo(({ date }) => {
  const calendarDate = moment(date).calendar();

  return (
    <div>
      <Typography>{calendarDate}</Typography>
    </div>
  );
});

export default NewsDate;
