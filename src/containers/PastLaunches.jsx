import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '../components/Pagination';
import { getLaunchesPast } from '../api';
import CustomCard from '../components/CustomCard';
import { chunk } from '../utils/utils';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loadingContainer: {
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    minHeight: '60vh',
    alignItems: 'center',
    paddingTop: '3em',
  },
  paginationContainer: {
    justifyContent: 'center',
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    paddingTop: '1em',
    marginBottom: '1em',
  },
  outerContainer: {
    padding: '1em',
  },
  banner: {
    backgroundImage: `url(${'https://live.staticflickr.com/65535/50009748327_93e52a451f_o.jpg'})`,
    minHeight: '400px',
    objectFit: 'cover',
    backgroundSize: 'cover',
    borderRadius: 20,
    padding: '2em',
    marginBottom: '1em',
    display: 'flex',
    alignItems: 'center',
  },
}));

const PastLaunches = () => {
  const [lauches, setLauches] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  const loadPastLauches = () => {
    getLaunchesPast().then((response) => {
      const chunks = chunk(response.data.data.launchesPast, 6);
      setLauches(chunks);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadPastLauches();
  }, []);

  const changePage = (e, p) => {
    setActualPage(p);
  };

  return (
    <>
      {!loading ? (
        <div className={classes.root}>
          <Container className={classes.outerContainer} fixed>
            <Grid classes={{ root: classes.banner }}>
              <Grid item xs={12} md={6}>
                <Typography
                  color="secondary"
                  className={classes.title}
                  variant="h3"
                >
                  SpaceX Past Launches
                </Typography>
              </Grid>
            </Grid>
            <div className={classes.container}>
              <Grid container spacing={3}>
                {lauches[actualPage - 1]
                  && lauches[actualPage - 1].map((launch) => {
                    return (
                      <Grid key={launch.id} item xs={12} md={4}>
                        <CustomCard
                          id={launch.id}
                          avatar={launch.links.mission_patch_small}
                          image={launch.links && launch.links.flickr_images[0]}
                          missionName={launch.mission_name}
                          date={launch.launch_date_utc}
                          launchSite={
                            launch.launch_site
                            && launch.launch_site.site_name_long
                          }
                          rocket={launch.rocket && launch.rocket.rocket_name}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
            </div>
            <div className={classes.paginationContainer}>
              <Pagination
                count={lauches && lauches.length}
                actualPage={actualPage}
                onChange={changePage}
              />
            </div>
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

export default PastLaunches;
