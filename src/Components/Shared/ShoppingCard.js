import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Faker from 'faker';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  title: {},
});

export default function MediaCard(props) {
  const {data} = props;
  const classes = useStyles();
  const [count, setcount] = useState(0);
  const onCartClick = () => {
    setcount(count + 1);
  };
  console.log('count', count);
  console.log('data', data);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Faker.image.food()}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            component="data"
            className={classes.title}
            variant="body1">
            {data.item}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500
          </Typography>
          <Grid container justify="space-between">
            <Typography
              gutterBottom
              component="data"
              className={classes.title}
              variant="body1">
              Amount
            </Typography>
            <Grid item>
              <Typography
                gutterBottom
                component="data"
                className={classes.title}
                variant="body1">
                {data.price}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onCartClick}>
          Add to cart
        </Button>
        {count}
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
