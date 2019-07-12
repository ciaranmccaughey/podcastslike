import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import StarIcon from '@material-ui/icons/StarBorder';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginTop: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%"
  },
  artwork: {
    maxHeight: 60
  },
  titles: {
    margin: 0,
    padding: 0
  }
});

const PodcastItem = ({ podcast }) => {
  console.log(podcast);
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Grid container>
            <Grid item xs="2">
              <img src={podcast.artworkUrl100} className={classes.artwork} />
            </Grid>
            <Grid item xs="10">
              <Grid item xs="12" style={{ textAlign: "right" }}>
                <h3 className={classes.titles}>{podcast.trackName}</h3>
              </Grid>
              <Grid item xs="12" style={{ textAlign: "right" }}>
                <p className={classes.titles}>{podcast.primaryGenreName}</p>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container>
          <Grid item xs="12" style={{ textAlign: "right" }}>
            <Button size="small">Episodes<MicIcon /></Button>
            <Button size="small">Favourite<StarIcon /></Button>
            <Button size="small">Find Similar<SearchIcon /></Button>
          </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default PodcastItem;
