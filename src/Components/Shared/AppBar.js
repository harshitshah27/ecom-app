import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import {withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // backgroundColor: 'yellow',
    color: 'white',
    '&:hover': {
      backgroundColor: 'none',
      color: 'yellow',
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

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

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
          <IconButton aria-label="cart" className={classes.menuButton}>
            <StyledBadge badgeContent={4} color="default">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
