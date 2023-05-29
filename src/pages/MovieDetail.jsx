import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import { IdContext } from "../utils/IdContext";

const API_KEY = "394f7f7b9c091369c76717b88c1e71f3";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  //   let backLinkHref = location.state?.from ?? "/movies";

  const fetchMovieDetails = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      setMovieDetails({
        title: data.title,
        overview: data.overview,
        popularity: data.popularity,
        genres: data.genres.map(({ name }) => name + " "),
        poster: data.poster_path,
        year: new Date(data.release_date).getFullYear(),
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  const onClick = () => {
    if (
      location.pathname.includes("cast") ||
      location.pathname.includes("reviews")
    ) {
      history.go(-2);
    } else {
      navigate(location.state?.from ?? "/movies");
    }
  };
  return (
    <main>
      <button onClick={onClick}>Go Back</button>
      <div>
        {movieDetails.poster ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster}`}
            alt="movie poster"
            style={{ width: 365, height: 520 }}
          />
        ) : (
          <p>Sorry, no poster here..</p>
        )}
        <div>
          <h2>
            {movieDetails.title} ({movieDetails.year})
          </h2>
          <h4>Overview</h4>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          <p>{movieDetails.genres}</p>
        </div>
      </div>
      <h4>Additional information</h4>
      <ul>
        <Link to="cast">
          <li>Cast</li>
        </Link>
        <Link to="reviews">
          <li>Reviews</li>
        </Link>
      </ul>
      <IdContext.Provider value={{ id: movieId }}>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </IdContext.Provider>
    </main>
  );
};
export default MovieDetail;
