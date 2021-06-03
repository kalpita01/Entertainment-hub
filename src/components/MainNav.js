import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TheatersIcon from '@material-ui/icons/Theaters';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <BottomNavigationAction 
            label="Trending" 
            icon={<TrendingUpIcon />} 
            style={{color: 'white'}}
        />
        <BottomNavigationAction 
            label="Movies" 
            icon={<TheatersIcon />} 
            style={{color: 'white'}}
        />
        <BottomNavigationAction 
            label="TV Series" 
            icon={<LiveTvIcon />} 
            style={{color: 'white'}}
        />
        <BottomNavigationAction 
            label="Search" 
            icon={<SearchIcon />}
            style={{color: 'white'}}
        />
    </BottomNavigation>
  );
}