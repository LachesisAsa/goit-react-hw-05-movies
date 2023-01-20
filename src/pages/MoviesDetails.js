import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Notification } from 'components/Notification/Notification';
import { useEffect, useState, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import * as API from '../services/api';

const MoviesDetails = () => {
  const location = useLocation();
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await API.getMovieById(moviesId);
        setMovie(response);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        throw new Error(error);
      }
    };
    fetch();
  }, [moviesId]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      {error && (
        <>
          <BackLink to={backLinkHref}>Back to movies</BackLink>
          <Notification message="Please, try again" />
        </>
      )}
      {isLoading && <Loader />}
      {!isLoading && !error && movie && (
        <>
          <BackLink to={backLinkHref}>Back to movies</BackLink>
          <MovieCard movie={movie} />
        </>
      )}
      <Suspense fallback={<Notification message="Loading subpage..." />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;