import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import CircularProgress from '@material-ui/core/CircularProgress';
import CustomCarousel from '../components/Carousel';

import { getLaunchDetail } from '../api';

const useStyles = makeStyles(() => ({
  container: {

    paddingTop: '2em',
    minHeight: '100vh',
    flexGrow: 1,

  },
  root: {
    flexGrow: 1,
  },
  loadingContainer: {
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  banner: {
    backgroundImage: `url(${'https://live.staticflickr.com/65535/50009748327_93e52a451f_o.jpg'})`,
    minHeight: '400px',
    objectFit: 'cover',
    backgroundSize: 'cover',
    borderRadius: 20,
    padding: '2em',

  },
  title: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  subtitle: {
    marginTop: '1.5em',
    marginBottom: '1.5em',
  },
  infoContainer: {
    padding: 30,
  },
}));

const LaunchDetail = ({ match }) => {
  const [launch, setLaunch] = useState({});
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  const loadLaunchDetail = (id) => {
    getLaunchDetail(id).then((response) => {
      setLaunch(response.data.data.launch);
      setLoading(false);
    });
  };
  useEffect(() => {
    loadLaunchDetail(match.params.id);
  }, [match.params.id]);

  return (
    <>
      {!loading ? (
        <div className={classes.root}>
          <Container className={classes.container}>
            <Grid classes={{ root: classes.banner }}>
              <Grid item xs={12} md={6}>
                <Typography color="secondary" className={classes.title} variant="h3">{launch && launch.mission_name}</Typography>
                <Typography color="secondary" variant="subtitle1">{launch && launch.details}</Typography>

              </Grid>

            </Grid>
            <Typography color="primary" className={classes.subtitle} variant="h4">Information</Typography>
            <Paper className={classes.infoContainer} elevation={3}>
              <Typography color="primary" variant="h6">Rocket name</Typography>
              <Typography variant="subtitle1">{launch.rocket.rocket_name}</Typography>
              <Typography color="primary" variant="h6">Launch site</Typography>
              <Typography variant="subtitle1">{launch.launch_site.site_name_long}</Typography>
              <Typography color="primary" variant="h6">Launch date </Typography>
              <Typography variant="subtitle1">{moment(launch.launch_date_utc).format('MMMM D YYYY, h:mm a')}</Typography>
            </Paper>
            {launch.links.flickr_images && launch.links.flickr_images.length > 0
            && (
            <>
              <Typography color="primary" className={classes.subtitle} variant="h4">Pictures</Typography>

              <CustomCarousel images={launch.links.flickr_images} />
            </>
            )}

          </Container>
        </div>
      ) : (
        <div className={classes.loadingContainer}>
          <CircularProgress color="primary" />
        </div>
      )}
    </>
  );
};

export default LaunchDetail;
