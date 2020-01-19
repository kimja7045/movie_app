import React from 'react';
import axios from "axios";
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies.data.data.movies);
    //console.log(movies);
    this.setState({
      movies, isLoading: false
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <secion className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (<div className="movies">
          {movies.map(movie => (
            <Movie id={movie.id} year={movie.year} title={movie.title}
              summary={movie.summary} poster={movie.medium_cover_image}
              genres={movie.genres} key={movie.id} />
          ))}
        </div>
          )}
      </secion>
    );
  }
}

export default App;