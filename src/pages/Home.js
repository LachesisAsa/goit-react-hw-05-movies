import { Gallery } from 'components/GalleryList/GalleryList';
import { Loader } from 'components/Loader/Loader';
import { Notification } from 'components/Notification/Notification';
import { useEffect } from 'react';
import { useState } from 'react';
import * as API from '../services/api';

const Home = () => {
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await API.getTrendingFilms();
        setGallery(response);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
        throw new Error(error);
      }
    };
    fetch();
  }, []);

  return (
    <main>
      {isLoading && <Loader />}
      {gallery.length > 0 && (
        <>
          <h1>Films is trending today</h1>
          <Gallery gallery={gallery} />
        </>
      )}
      {error && <Notification message="Oops... something went wrong" />}
    </main>
  );
};

export default Home;