import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  color: black;
  background-color: #a8a8a8;
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 10px;
  border-radius: 10px;
  :hover {
    background-color: orangered;
    color: #ffffff;
  }
`;