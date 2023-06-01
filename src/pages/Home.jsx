import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const API_KEY = "394f7f7b9c091369c76717b88c1e71f3";
const URL = "https://api.themoviedb.org/3/trending/movie/day?";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`${URL}api_key=${API_KEY}`);
        const data = await res.json();
        const moviesData = data.results.map(({ title, id }) => {
          return { title, id };
        });
        setMovies(moviesData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchMovies();
  }, []);

  return <MoviesList movies={movies} path={"movies/"} location={location} />;
};
export default Home;

Home.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};
