import { useState, useEffect } from "react";
import { useId } from "../utils/IdContext";
import PropTypes from "prop-types";

const API_KEY = "394f7f7b9c091369c76717b88c1e71f3";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useId();

  const fetchMovieCast = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      const castData = data.cast.map(
        ({ name, profile_path, character, id }) => {
          return { name, profile_path, character, id };
        }
      );
      setCast(castData);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchMovieCast();
  }, []);

  return (
    <ul>
      {cast.map(({ name, profile_path, character, id }) => {
        return (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt="movie poster"
                style={{ width: 100, height: 160 }}
              />
            ) : (
              <p>
                <i>No image </i>
              </p>
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;

Cast.propTypes = {
  name: PropTypes.string,
  profile_path: PropTypes.string,
  id: PropTypes.number,
  character: PropTypes.string,
};
