import { Searchbar } from 'components/SearchBar/SearchBar';
import { Gallery } from 'components/GalleryList/GalleryList';
import { useEffect, useState } from 'react';
import * as API from '../services/api';
import { Notification } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('start');
  const searchWord = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchWord) {
      return;
    }

    const fetch = async () => {
      try {
        setStatus('loading');
        setIsLoading(true);
        const galleryList = await API.getMovieBySearchWord(searchWord);
        setGallery(galleryList);
        setIsLoading(false);
        setStatus('end');
      } catch (error) {
        setError(true);
        setIsLoading(false);
        setStatus('end');
        throw new Error(error);
      }
    };

    fetch();
  }, [searchParams, searchWord]);

  const onSubmit = query => {
    setSearchParams(query !== '' ? { query } : {});
    setGallery([]);
  };

  return (
    <main>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {gallery.length > 0 && <Gallery gallery={gallery} />}
      {error && (
        <Notification message="No results!!!Please, enter another word" />
      )}
      {status === 'end' && gallery.length === 0 && (
        <Notification message="No results!!!Please, enter another word" />
      )}
      {status === 'start' && <Notification message="Please, enter key word" />}
    </main>
  );
};

export default Movies;