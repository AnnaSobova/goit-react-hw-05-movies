import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieRewiews} from '../services/getApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieRewiews(movieId).then(result => setReviews(result));
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <>
          <h2>Reviews</h2>
          <ul>
            {reviews.map(review => {
              const { author, content, id } = review;

              return (
                <li key={id}>
                  <p>
                    <b>{author}</b>
                  </p>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};
export default Reviews;