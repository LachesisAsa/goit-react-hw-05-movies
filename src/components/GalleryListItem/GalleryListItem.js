import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Item, Link } from './GalleryListItem.styled';

export const GalleryListItem = ({ id, title }) => {
  const location = useLocation();
  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </Item>
  );
};

GalleryListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};