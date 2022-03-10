import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
    }
})

export default function SimpleBottomNavigation() {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
      if (value === 0){
        navigate("/")
      } else if (value === 1){
        navigate("/movies")
      }else if (value === 2){
        navigate("/series")
      } else if (value === 3){
        navigate("/search")
      }
    }, [value, navigate])

    return (
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Trending" style={{color: "white"}} icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" style={{color: "white"}} icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" style={{color: "white"}} icon={<TvIcon />} />
        <BottomNavigationAction label="Search" style={{color: "white"}} icon={<SearchIcon />} />
      </BottomNavigation>
    )
}