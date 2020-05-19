import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Autosuggest from 'react-autosuggest';
import { debounce } from 'debounce';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import search from '../../resources/search.svg';
import SearchResult from './SearchResult';

const getSuggestions = async value => {
  return fetch(`https://www.reddit.com/subreddits/search.json?q=${value.value}`)
    .then(res => res.json())
    .then(res => res.data.children)
    .catch(err => {
      throw err;
    });
};

const renderSuggestion = suggestion => (
  <SearchResult name={suggestion.data.display_name} />
);

const getSuggestionValue = suggestion => suggestion.data.display_name;

const onSuggestionSelected = (event, { suggestionValue }) => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    position: 'top-end',
    icon: 'question',
    title: `Add r/${suggestionValue}?`,
    showConfirmButton: true,
    backdrop: false
  });
};

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
  border-radius: 10px;
  padding: 5px;
`;

const SearchLabel = styled.label`
  margin-bottom: 0;
  padding: 10px 0px 10px 10px;
`;

const SearchImage = styled.div`
  margin: 10px;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 24px;
`;

function SubredditSearch({ expanded }) {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState('');

  const onSuggestionsFetchRequested = async searchQuery => {
    setSuggestions(await getSuggestions(searchQuery));
  };
  const onSuggestionsFetchRequestedDebounce = useCallback(
    debounce(onSuggestionsFetchRequested, 1000),
    []
  );

  const inputProps = {
    placeholder: 'Type a subreddit.',
    value,
    onChange: (event, { newValue }) => setValue(newValue)
  };

  let searchInput = (
    <SearchWrapper>
      <SearchInputWrapper>
        <SearchLabel htmlFor="subreddit-search">
          <img
            alt="search"
            src={search}
            height="18"
            className="nav-clickable"
          />
        </SearchLabel>
        <Autosuggest
          id="subreddit-search"
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequestedDebounce}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={onSuggestionSelected}
          inputProps={inputProps}
        />
      </SearchInputWrapper>
    </SearchWrapper>
  );
  if (!expanded) {
    searchInput = (
      <SearchImage>
        <img alt="search" src={search} height="30" className="nav-clickable" />
      </SearchImage>
    );
  }
  return searchInput;
}

export default SubredditSearch;
