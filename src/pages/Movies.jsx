import { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { SearchBox } from "../components/SearchBox";
import { MoviesList } from "../components/MoviesList";
import PropTypes from "prop-types";

const API_KEY = "394f7f7b9c091369c76717b88c1e71f3";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") ?? "";
  const location = useLocation();

  const fetchMovies = async (fetchName) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${fetchName}&include_adult=false&language=en-US`
      );
      const data = await res.json();
      const moviesData = data.results.map(({ title, id }) => {
        return { title, id };
      });
      setMovies(moviesData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (movieName) {
      const formattedName = movieName.split(" ").join("%20");
      fetchMovies(formattedName);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.elements.input.value.trim();
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
    history.pushState(
      {
        ...location,
        search: `name=${name}`,
      },
      " "
    );
  };

  return (
    <main>
      <SearchBox onSubmit={handleSubmit} />
      {searchParams && <MoviesList movies={movies} location={location} />}
    </main>
  );
};

export default Movies;

Movies.propTypes = {
  handleSubmit: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.object,
};
