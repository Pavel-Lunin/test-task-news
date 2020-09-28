import React from 'react';
import { Button } from '@material-ui/core';

const ButtonCard = React.memo(() => {
  return (
    <div>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </div>
  );
});

export default ButtonCard;
