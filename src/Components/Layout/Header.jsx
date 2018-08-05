import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Face, Home, Code, Forum, Public} from '@material-ui/icons/'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div className='navigation'>
    
      <Button component={Link} to='/' variant="extendedFab" color="primary" className={classes.button}>
        <Home/>
        Home
      </Button>

      <Button component={Link} to='/profile' variant="extendedFab" color="primary" className={classes.button}>
        <Face/>
        About Me
      </Button>

      <Button component={Link} to='/developer' variant="extendedFab" color="primary" className={classes.button}>
        <Code/>
        Developer
      </Button>

      <Button component={Link} to='/contact' variant="extendedFab" color="primary" className={classes.button}>
        <Forum/>
        Contact
      </Button>

      <Button component={Link} to='/social' variant="extendedFab" color="primary" className={classes.button}>
        <Public/>
        Social
      </Button>


    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);