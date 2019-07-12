import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
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
    maxHeight: 80
  },
  titles: {
    margin: 0,
    padding: 0
  }
});

const PodcastItem = ({ podcast, findSimilarPodcasts }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Grid container>
            <Grid item xs="3">
              <img src={podcast.artworkUrl100} className={classes.artwork} />
            </Grid>
            <Grid item xs="9">
              <Grid item xs="12" style={{ textAlign: "right"}}>
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
            <Button size="small" variant="contained" style={{marginRight: '9px'}} onClick={() => window.open(podcast.collectionViewUrl, '_blank')}>Listen<MicIcon /></Button>
            {!podcast.selected ?<Button size="small" variant="contained" color="primary" onClick={() => findSimilarPodcasts(podcast)}>Find Similar<SearchIcon /></Button>: null}
          </Grid> 
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default PodcastItem;
