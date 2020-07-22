import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
    paddingTop: '5%',
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
  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" component="h2" className={classes.mainText}>
        "Treat yo' <br />
        Self"...
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        gutterBottom
        component="p"
        className={classes.subText}>
        What it takes to be happy ? A best cuisine....
      </Typography>
    </div>
  );
}
