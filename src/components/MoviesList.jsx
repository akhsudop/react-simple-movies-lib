import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

MoviesList.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  path: PropTypes.string,
  location: PropTypes.object,
};
