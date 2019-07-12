import React, { useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

axios.defaults.baseURL = "https://itunes.apple.com";
const useStyles = makeStyles(theme => ({
  field: {
    width: "80%",
    margin: "5%"
  },
  searchDiv: {
    margin: "auto"
  },
  searchButton: {
    height: "50px"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginTop: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    height: "50px"
  },
  searchInput: {
    paddingLeft: "30px",
    fontSize: "30px",
    width: "95%",
    height: "50px"
  },
  header: {
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    height: "50px",
    fontFamily: "Lobster",
    color: "white",
    fontSize: "30px",
    margin: "auto",
    textAlign: "center"
  }
}));

const Search = ({ setPodcastResults }) => {
  const classes = useStyles();

  // search podcast based on name
  const search = event => {
    const value = event.target.value;

    if (value.length > 2) {
      axios.get("search?entity=podcast&term=" + encodeURI(value))
        .then(response => {

          if (response.data.results.length !== 0) {
            setPodcastResults(response.data.results);
          }
        });
    } else {
      setPodcastResults(null);
    }
  };


  return (
    <>
      <div className={classes.header}>
        Find Podcasts Like The Ones You Love!
      </div>

      <div className={classes.search}>
        <InputBase
          autoFocus
          placeholder="Podcasts Like"
          className={classes.searchInput}
          inputProps={{ "aria-label": "Search" }}
          onChange={search}
        />
      </div>
    </>
  );
};

export default Search;
