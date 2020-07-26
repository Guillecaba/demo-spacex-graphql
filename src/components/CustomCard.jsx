import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import moment from 'moment';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '100%',
  },
  media: {
    height: 140,
  },
});

const CustomCard = ({
  id, image, missionName, avatar, date, rocket, launchSite,
}) => {
  const classes = useStyles();
  return (

    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <Avatar src={avatar || 'https://farm1.staticflickr.com/658/32394688795_55a9873ea7_o.jpg'} aria-label="recipe" />
        )}

        title={launchSite.length >= 20 ? `${launchSite.slice(0, 20)}...` : launchSite}
        subheader={moment(date).format('MMMM D YYYY, h:mm a')}
      />
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image || 'https://farm1.staticflickr.com/658/32394688795_55a9873ea7_o.jpg'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { missionName.length >= 20 ? `${missionName.slice(0, 20)}...` : missionName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {rocket}
          </Typography>
        </CardContent>

        <CardActions>

          <Button component={Link} to={`/launch/${id}`} size="small" color="primary">
            Show More
          </Button>

        </CardActions>
      </CardActionArea>
    </Card>

  );
};

export default CustomCard;
