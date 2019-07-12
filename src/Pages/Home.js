import React, { Component } from "react";
import Search from '../components/Search/Search';
import SearchResults from '../components/SearchResults/SearchResults';

class Home extends Component {

    state = {
        podcasts: null
    }

    setPodcastResults = podcasts => {

        this.setState({podcasts: podcasts});

    }


    render() {
        return (
            <>
              <Search setPodcastResults={this.setPodcastResults}/>
              <SearchResults podcasts={this.state.podcasts} />
            </>
          );
    }

}

export default Home;
