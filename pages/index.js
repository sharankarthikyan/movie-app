import React, { useEffect, useState, Component } from "react";

import SideMenu from "../components/sidemenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import { getMovies } from "../actions";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <SideMenu />
              </div>
              <div className="col-lg-9">
                <Carousel images={this.props.images} />
                <div className="row">
                  <MovieList movies={this.props.movies} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const images = movies.map((movie) => {
    return {
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name,
    };
  });
  return {
    movies,
    images,
  };
};

export default Home;
