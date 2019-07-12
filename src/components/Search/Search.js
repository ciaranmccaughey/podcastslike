import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";


import axios from "axios";
axios.defaults.baseURL = "https://itunes.apple.com";

const useStyles = makeStyles(theme => ({
    field: {
      // margin: theme.spacing(1),
      width: "80%",
      margin: "5%"
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
      <form>
        <TextField
          id="search"
          label="Podcasts Like"
          className={classes.textField}
          onChange={search}
        />
        <Button variant="contained">Search</Button>
      </form>
    </>
  );
};

export default Search;
