import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Logo from '../../Assets/Images/montreal.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: 'yellow',
    color: 'black',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  title: {
    flexGrow: 1,
    height: '20px',
    width: '20px',
  },
  imageStyle: {
    backgroundColor: '#12100a',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.imageStyle}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Let Eat Be
          </Typography>
          {/* <img src={Logo} className={classes.title} /> */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
