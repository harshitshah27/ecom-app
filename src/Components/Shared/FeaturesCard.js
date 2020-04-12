import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, Box} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Create, Power, Computer} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  iconStyle: {
    height: '50px',
    width: '30px',
  },
  imageContainer: {
    paddingLeft: '10px',
    backgroundColor: 'yellow',
    width: '40px',
  },
  mainText: {
    color: 'yellow',
    fontSize: '25px',
    textTransform: 'uppercase',
    letterSpacing: '3px',
  },
});

export default function FeatureCard(props) {
  const {title, subtext} = props;
  const classes = useStyles();

  const getImage = () => {
    switch (title) {
      case 'design':
        return <Create className={classes.iconStyle} />;
      case 'coding':
        return <Power className={classes.iconStyle} />;
      case 'apps':
        return <Computer className={classes.iconStyle} />;

      default:
        return <Computer />;
    }
  };

  return (
    <Card className={classes.root}>
      <Box className={classes.imageContainer}>{getImage()}</Box>
      <CardContent>
        <Typography gutterBottom variant="h6" className={classes.mainText}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {subtext}
        </Typography>
      </CardContent>
    </Card>
  );
}
