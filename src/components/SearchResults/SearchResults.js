import React from "react";
import PodcastItem from "../Podcast/PodcastItem";

const SearchResults = ({ podcasts }) => {

    console.log('podcasts', podcasts)
  let results = null;
  if (podcasts) {
    results = podcasts.map(podcast => <PodcastItem podcast={podcast} />);
  }

  return <>{results}</>;
};

export default SearchResults;
