import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';

const Cast = () => {
  const { moviesId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await API.getMovieByActors(moviesId);
        setActors(response);
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
      {actors.length > 0 && (
        <ul>
          {actors.map(({ name, profile_path: profilePath, character }) => (
            <li key={name}>
              <p>{name}</p>
              <img
                src={
                  profilePath !== null
                    ? `https://image.tmdb.org/t/p/w500/${profilePath}`
                    : 'https://www.bworldonline.com/wp-content/uploads/2022/04/cinema02_14-01.jpg'
                }
                alt={name}
                width="70"
                height="100"
              />
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && actors.length === 0 && (
        <p>We don't have any information for this movie</p>
      )}
      {error && <Notification message="Please reload page" />}
    </>
  );
};

export default Cast;