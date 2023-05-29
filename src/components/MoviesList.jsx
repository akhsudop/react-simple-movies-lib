import { Link, useLocation } from "react-router-dom";

export const MoviesList = ({ movies, path = "", location }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`${path}${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
