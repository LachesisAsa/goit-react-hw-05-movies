import { GalleryListItem } from 'components/GalleryListItem/GalleryListItem';
import PropTypes from 'prop-types';

export const Gallery = ({ gallery }) => {
  return (
    <ul>
      {gallery.map(({ id, title }) => {
        return <GalleryListItem key={id} id={id} title={title} />;
      })}
    </ul>
  );
};

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};