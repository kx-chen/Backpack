import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

SearchResult.propTypes = {
  name: PropTypes.string.isRequired,
};

const Name = styled.p`
  color: black;
`;

function SearchResult({ name }) {
  return <Name>{name}</Name>;
}

export default SearchResult;
