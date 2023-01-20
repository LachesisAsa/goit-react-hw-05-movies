import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="16" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.string.isRequired,
};