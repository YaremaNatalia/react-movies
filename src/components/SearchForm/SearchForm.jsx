import css from './SearchForm.module.css';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from './search_icon.svg';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return toast.warning('Oops, no value...');
    }
    onSubmit(inputValue);

    setInputValue('');
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <button type="submit" className={css.searchFormButton}>
        <span className={css.searchFormButtonLabel}>Search</span>
        <SearchIcon width="28" height="28" />
      </button>
      <input
        className={css.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter movie name..."
        required
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
