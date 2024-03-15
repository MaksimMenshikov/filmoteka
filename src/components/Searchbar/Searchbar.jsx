import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledInput,
  StyledSearchbar,
  StyledSubmitBtn,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handlerInputChange = evt => {
    const query = evt?.target.value || '';
    setSearch(query);
  };

  const handlerSubmitForm = evt => {
    evt?.preventDefault();
    const { value } = evt?.target.elements.search;
    const query = value || '';
    onSubmit({ query });
    setSearch('');
  };

  return (
    <StyledSearchbar onSubmit={handlerSubmitForm}>
      <StyledInput
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        title="field for entering search query"
        value={search}
        onChange={handlerInputChange}
        required
      />
      <StyledSubmitBtn type="submit" disabled={!search}>
        Search
      </StyledSubmitBtn>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
