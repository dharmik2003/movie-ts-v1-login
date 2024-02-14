import React from 'react';
import { useParams } from 'react-router-dom';
import UpcomingMovies from '../Data/UpcomingMovies';
import { Movie } from '../Data/UpcomingMovies'; 
import DetailsUpComming from './SingleDetailsUpComming';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const PageUpcomming = () => {
  const { movieName } = useParams<{ movieName: string }>(); 
  const movie = UpcomingMovies.find((movie: Movie) => movie.name === movieName);
  const otherMovies = UpcomingMovies.filter(movie => movie.name !== movieName); 

  return (
    <div>
      <Navbar/>
      {movie ? <DetailsUpComming movie={movie} poster_movie={otherMovies}/> : <p>Movie not found</p>}
      <hr/>
      <Footer/>
    </div>
  );
};

export default PageUpcomming;
