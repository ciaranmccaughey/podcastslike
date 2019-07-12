import React from "react";
import PodcastItem from "../Podcast/PodcastItem";

const SearchResults = ({ podcasts, findSimilarPodcasts }) => {

  let results = null;
  if (podcasts) {
    results = podcasts.map(podcast => <PodcastItem key={podcast.trackId} podcast={podcast} findSimilarPodcasts={findSimilarPodcasts}/>);
  }

  return <>{results}</>;
};

export default SearchResults;
