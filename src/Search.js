import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';

class Search extends Component {
  state = {
    repo: '',
  };

  handleChange = name => event => {
    this.setState({
      repo: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-full-width"
          label="SEARCH REPOS"
          className={classes.input}
          placeholder="What will you star today?"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button className={classes.button}>
          <ArrowForward className={classes.arrow} />
        </Button>
      </form>
    );
  }
}

const styles = () => ({
  container: {
    display: 'flex',
    paddingTop: '40px',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  input: {
    marginRight: 8,
    marginTop: 0,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '55px',
    height: '55px',
    backgroundColor: 'red',
    border: 'none',
  },
  arrow: {
    color: 'white',
    fontSize: 40,
  },
});

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
