import React, { Component, useState } from "react";
import Search from "../components/Search/Search";
import SearchResults from "../components/SearchResults/SearchResults";
import axios from "axios";
 
const Home = () => {

  const [podcasts, setPodcasts] = useState(null);

  const setPodcastResults = podcasts => {
    setPodcasts(podcasts);
  };

  const findSimilarPodcasts = podcast => {
    
    // get a random genre by generating a random number between 0 and the length of the genre ids
    const random = Math.floor(Math.random() * (podcast.genreIds.length - 1) + 1);
    const genreId = podcast.genreIds[random];
    
    // search itunes for podcasts in the genre
    axios.get("https://itunes.apple.com/search?term=podcast&genreId=" +genreId +"&limit=31")
      .then(response => {
        let results = response.data.results.filter(
          pod => pod.trackId != podcast.trackId
        );

        // set as the selected one
        podcast.selected = true;
        // set the selected podcast as the top result
        // shuffle the array of results so the it looks different each time
        results = [podcast, ...shuffle(results)];
        setPodcasts(results);
      });
  };

  const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

    return (
      <>
        <Search setPodcastResults={setPodcastResults} />
        {podcasts ? (
          <SearchResults
            podcasts={podcasts}
            findSimilarPodcasts={findSimilarPodcasts}
          />
        ) : null}

      </>
    );
}

export default Home;
