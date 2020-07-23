import React from 'react';
import {withStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Faker from 'faker';
import {Grid} from '@material-ui/core';
import {connect} from 'react-redux';

const styles = (theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  title: {},
});

class ShoppingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      cartArray: [],
    };
  }
  // onCartClick = (item) => {
  // console.log('data', this.props.data);
  // this.setState({
  //   count: this.state.count + 1,
  //   cartArray: itemData,
  // });
  // };

  onCartClick() {
    let itemData = [];
    itemData.push(this.props.data);
    console.log('itemData', itemData);
    this.setState({cartArray: [...this.state.cartArray, itemData]});
  }
  render() {
    const {classes} = this.props;
    console.log('rposp', this.props);
    console.log('this.state.cartArray', this.state.cartArray);
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
              {this.props.data.item}
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
                  {this.props.data.price}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={this.onCartClick}>
            Add to cart
          </Button>
          {this.state.count}
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state', state);
  return {};
};

export default connect(mapStateToProps, {})(withStyles(styles)(ShoppingCard));

// export default connect(mapStateToProps, null, withStyles(styles)(ShoppingCard));
// export default connect(mapStateToProps, {
// 	createStudent,
// })(Popup);
