import React, {useState} from 'react';
import {Grid, Box, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 275,
    display: 'flex',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '70%',
    marginBottom: '10px',
  },
  inputSubject: {
    width: '85%',
    marginBottom: '10px',
  },
  contactUsTitle: {
    color: 'yellow',
    fontSize: '20px',
    letterSpacing: '3px',
  },
  buttonContainer: {
    border: '1px solid yellow',
    borderRadius: '15px',
    marginBottom: '10px',
    marginTop: '10px',
  },
  button: {
    color: 'black',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
});

export default function ContactUs() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const handleClick = () => {
    const values = {name, email, subject, message};
    if (validateEmail(email)) {
      window.alert(`Form Submitted Successfully ${JSON.stringify(values)}`);
    } else {
      window.alert('Invalid Email');
    }
  };
  return (
    <Box className={classes.root}>
      <form>
        <h2 className={classes.contactUsTitle}>CONTACT US...</h2>
        <Grid container justify="center" direction="row">
          <Grid item lg={6} sm={12}>
            <input
              type="text"
              placeholder="Name"
              className={classes.inputContainer}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <input
              type="email"
              placeholder="Email"
              className={classes.inputContainer}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item lg={12}>
            <input
              type="text"
              placeholder="Subject"
              className={classes.inputSubject}
              required
              onChange={(e) => setSubject(e.target.value)}
            />
          </Grid>
          <Grid item lg={12}>
            <textarea
              rows={10}
              cols={50}
              type="text"
              placeholder="Message"
              className={classes.inputSubject}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Grid>
          <Grid item className={classes.buttonContainer}>
            <Button
              className={classes.button}
              disableElevation
              disabled={!name || !subject || !message || !email}
              onClick={handleClick}>
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
