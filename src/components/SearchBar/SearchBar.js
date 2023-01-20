import {
    ButtonSearch,
    Header,
    Icon,
    SearchForm,
    SearchFormInput,
  } from './SearchBar.styled.js';
  import PropTypes from 'prop-types';
  import { useState } from 'react';
  
  export const Searchbar = ({ onSubmit }) => {
    const [searchWord, setSearchWord] = useState('');
  
    const reset = () => {
      setSearchWord('');
    };
  
    const handleChange = e => {
      const { value } = e.target;
      setSearchWord(value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      if (searchWord.trim() === '') {
        alert('Enter valid text');
        return;
      }
      onSubmit(searchWord.toLowerCase());
      reset();
    };
  
    return (
      <Header>
        <SearchForm autoComplete="of" onSubmit={handleSubmit}>
          <label htmlFor="searchWord"></label>
          <SearchFormInput
            id="searchWord"
            type="text"
            onChange={handleChange}
            autoFocus
            name="searchWord"
            placeholder="Search movie"
            value={searchWord}
          />
          <ButtonSearch type="submit">
            <Icon />
          </ButtonSearch>
        </SearchForm>
      </Header>
    );
  };
  
  Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };