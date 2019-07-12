import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  }
});

const PodcastItem = ({ podcast }) => {
  console.log(podcast);
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
            <h3>{podcast.trackName}</h3>
            <img src={podcast.artworkUrl100} />
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PodcastItem;
