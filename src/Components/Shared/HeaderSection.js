import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // backgroundColor: '#12100a',
    justifySelf: 'center',
    display: 'flex',
  },
  media: {
    height: 140,
  },
  mainText: {
    color: 'yellow',
    fontSize: '100px',
    letterSpacing: '5px',
  },
  subText: {
    color: 'yellow',
    flexWrap: 'wrap',
  },
  mainContainer: {
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: '#12100a',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    color: 'yellow',
  },
  subContainer: {
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: '#12100a',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer: {
    border: '1px solid yellow',
    borderRadius: '15px',
    marginBottom: '10px',
    marginTop: '10px',
  },
});

export default function HeaderSection() {
  const classes = useStyles();
  const handleClick = () => {
    window.alert('Kindly Scroll through the site!!');
  };

  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" component="h2" className={classes.mainText}>
        Treat Yo <br />
        Self....
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        gutterBottom
        component="p"
        className={classes.subText}>
        Happiness is not in money, but in shopping.
      </Typography>
      {/* <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          disableElevation
          color="secondary"
          onClick={handleClick}>
          Who We are?
        </Button>
      </div> */}
    </div>
  );
}
