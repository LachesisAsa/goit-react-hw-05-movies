import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await API.getMovieByReviews(moviesId);
        setReviews(response);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        throw new Error(error);
      }
    };
    fetch();
  }, [moviesId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <p>
                <b>Author: </b>
                {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && reviews.length === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}
      {error && <div>Please reload page</div>}
    </>
  );
};

export default Reviews;