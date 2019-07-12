import React from "react";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
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
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: "90%",
    height: "50px",
  },
  searchInput: {
    paddingLeft: '30px',
    fontSize: '30px',
    width: "90%",
    height: "50px",
  }
}));

const Search = ({ setPodcastResults }) => {
  const classes = useStyles();

  const search = event => {
    const value = event.target.value;

    if (value.length > 2) {
      axios
        .get("search?entity=podcast&term=" + encodeURI(value))
        .then(response => {
          //   console.log(response);
          console.log(response.data.results);
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
      <div className={classes.search}>
        <InputBase
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
