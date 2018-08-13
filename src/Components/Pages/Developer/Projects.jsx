import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import shakingImg from '../../../Assets/images/whatsshaking.jpeg'
import soundcloudImg from '../../../Assets/images/soundcloud.jpeg'


const styles = {
  card: {
    maxWidth: 345,
    margin: '5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function Projects(props) {
  const { classes } = props;
  return (
    <div className='projectCardContainer'>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={shakingImg}
          title="What's Shaking?"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Whats Shaking?
          </Typography>
          <Typography>
            <p>Use U.S. Geological Survay API to show you the most recent seismic activity.</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href='https://github.com/ianmitch90/reactearthquake'>
            Git Hub
          </Button>
          <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href='https://ianmitch90.github.io/reactearthquake/'>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={soundcloudImg}
          title="CloudSound Search"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            CloudSound Search
          </Typography>
          <Typography>
            <p>This project uses the SoundCloud API to search for music</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href= 'https://github.com/ianmitch90/soundcloud'>
            Git Hub
          </Button>
          <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href= 'https://ianmitch90.github.io/soundcloud/'>
            Learn More
          </Button>
        </CardActions>
      </Card>

    </div>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);