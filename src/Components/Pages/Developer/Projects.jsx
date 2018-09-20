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
import food from '../../../Assets/images/food.jpeg';
import comp from '../../../Assets/images/comp.jpeg';

const styles = {
  card: {
    maxWidth: 345,
    height: '100%'
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
            Use U.S. Geological Survay API to show you the most recent seismic activity.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href='https://github.com/ianmitch90/reactearthquake'>
            Git Hub
          </Button>
          <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href='https://ianmitch90.github.io/reactearthquake/'>
            Visit
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={soundcloudImg}
          title="CloudSound"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            CloudSound
          </Typography>
          <Typography>
            This project uses the SoundCloud API to search for music
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href='https://github.com/ianmitch90/soundcloud'>
            Git Hub
          </Button>
          <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href='https://ianmitch90.github.io/soundcloud/'>
            Visit
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={food}
          title="The Gyshal Green"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            The Gyshal Green
          </Typography>
          <Typography>
            This project is Designed for New Web Developers
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href='https://github.com/ianmitch90/theGreenGysahl'>
            Git Hub
          </Button>
          <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href='https://ianmitch90.github.io/theGreenGysahl/'>
            Visit
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={comp}
          title="Portfolio"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Portfolio
          </Typography>
          <Typography>
            This is the code for the amazing site you are on now.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" target="_blank" rel="noopener noreferrer" href='https://github.com/ianmitch90/portfolio'>
            Git Hub
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