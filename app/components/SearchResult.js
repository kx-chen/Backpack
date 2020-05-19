import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

SearchResult.propTypes = {
  name: PropTypes.string.isRequired
};

const Name = styled.p`
  color: black;
`;

const fireAlert = () => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Something went wrong adding this subreddit.',
    showConfirmButton: true,
    backdrop: false
  });
};

function SearchResult({ name }) {
  return <Name onClick={fireAlert}>{name}</Name>;
}

export default SearchResult;
