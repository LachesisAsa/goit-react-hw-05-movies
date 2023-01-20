import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  color: #000000;
  &:hover,
  &:focus {
    background-color: #f94500;
    color: #ffffff;
  }
`;