import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import ButtonCard from './Button/ButtonCard';
import './NewsCard.sass';
import NewsDate from './NewsDate/NewsDate';
import NewsScreen from '../../common/img/NewsScreen.jpg';
import NewsLoadingBlock from './NewsLoadingBlock/NewsLoadingBlock';

const NewsCard = React.memo(function NewsCard({
  title,
  description,
  urlToImage,
  date,
  sourceName,
  url,
  pageIsLoading,
  darkMode,
}) {
  if (pageIsLoading) {
    return <NewsLoadingBlock darkMode={darkMode} />;
  }
  return (
    <div className="root">
      <Card>
        <CardActionArea>
          {urlToImage ? (
            <CardMedia className="media" image={urlToImage} />
          ) : (
            <CardMedia className="media" image={NewsScreen} />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography className="size" variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="card-actions">
          <ButtonCard url={url} />
          <Typography className="source-name">{sourceName}</Typography>
          <NewsDate date={date} />
        </CardActions>
      </Card>
    </div>
  );
});

export default NewsCard;
