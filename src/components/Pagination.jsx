import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: '0.5em',
    },
  },
}));

const BasicPagination = ({ count, actualPage, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={count} page={actualPage} color="primary" onChange={onChange} />
    </div>
  );
};

export default BasicPagination;
