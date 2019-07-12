import React, { Component } from "react";
import Search from "../components/Search/Search";
import SearchResults from "../components/SearchResults/SearchResults";
import axios from "axios";

class Home extends Component {
  state = {
    podcasts: null
  };

  setPodcastResults = podcasts => {
    this.setState({ podcasts: podcasts });
  };

  findSimilarPodcasts = podcast => {
    
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
        results = [podcast, ...this.shuffle(results)];
        this.setState({ podcasts: results });
      });
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  render() {
    return (
      <>
        <Search setPodcastResults={this.setPodcastResults} />
        {this.state.podcasts && !this.state.selectedPodcast ? (
          <SearchResults
            podcasts={this.state.podcasts}
            findSimilarPodcasts={this.findSimilarPodcasts}
          />
        ) : null}

      </>
    );
  }
}

export default Home;
