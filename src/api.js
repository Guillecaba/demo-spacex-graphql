import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

export const getLaunchesPast = () => axios({
  method: 'post',
  url: 'https://api.spacex.land/graphql/',
  data: JSON.stringify({
    query:
          'query pastLauches($limit: Int!) { launchesPast(limit: $limit) { mission_name launch_site {site_name_long} links { flickr_images mission_patch_small }  rocket {rocket_name } launch_date_utc id } }',
    variables: {
      limit: 100,
    },
  }),
});

export const getLaunchDetail = (launchId) => axios({
  method: 'post',
  url: 'https://api.spacex.land/graphql/',
  data: JSON.stringify({
    query:
          'query launch($id: ID!) { launch(id: $id) { details mission_name launch_site {site_name_long} links { flickr_images mission_patch_small video_link }  rocket {rocket_name } launch_date_utc id } }',
    variables: {
      id: launchId,
    },
  }),
});
