import React from 'react';
import { Button } from '@material-ui/core';

const ButtonCard = React.memo(({ url }) => {
  return (
    <div>
      <a style={{ textDecoration: 'none' }} rel="noopener noreferrer" target="_blank" href={url}>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </a>
    </div>
  );
});

export default ButtonCard;
