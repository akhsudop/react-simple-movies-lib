import { useEffect, useState } from "react";
import { useId } from "../utils/IdContext";
import PropTypes from "prop-types";

const API_KEY = "394f7f7b9c091369c76717b88c1e71f3";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useId();
  const fetchMovieReviews = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      if (data.results.length > 0) {
        const reviewsData = data.results.map(({ author, content, id }) => {
          return { author, content, id };
        });
        setReviews(reviewsData);
      } else {
        console.log("No reviews found :(");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMovieReviews();
  }, []);
  if (reviews.length === 0) {
    return <div>No reviews found :(</div>;
  }

  return (
    <ul>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Reviews;

Reviews.PropTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
};
