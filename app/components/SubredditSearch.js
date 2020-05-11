import React from 'react';
import styled from 'styled-components';
import search from '../../resources/search.svg';

const SearchInput = styled.input`
  margin: 10px;
  border: none;
  background-color: transparent;
  width: 80%;
  :focus {
    outline: none;
  }
`;

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

const AutocompleteWrapper = styled.div`
  position: relative;
`;

function SubredditSearch({ expanded }) {
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
        <SearchInput id="subreddit-search" />
      </SearchInputWrapper>
      <AutocompleteWrapper>
        <p>test</p>
      </AutocompleteWrapper>
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
