import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { getDataPathForIcon } from '../helpers/utils';

SubredditHeader.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
`;

const SubredditLogo = styled.img`
  height: 80px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px black solid;
  margin-top: -20px;
`;

const SubredditTopBanner = styled.div`
  height: 80px;
  background-color: #929aa0;
  width: 100%;
`;

const SubredditTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
`;

const SubredditSubtext = styled.span`
  color: gray;
`;

const SubredditMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubredditMenuLink = styled.a`
  font-weight: bold;
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 3px blue solid;
`;

const SubredditTitle = styled.h1`
  margin-top: 5px;
  font-size: 32px;
  font-weight: bold;
`;

function SubredditHeader({ selectedSubreddit }) {
  if (!selectedSubreddit) {
    return null;
  }

  const subredditLogoPath = getDataPathForIcon(selectedSubreddit);
  return (
    <HeaderContainer>
      <SubredditTopBanner />
      <SubredditTitleContainer>
        <SubredditLogo
          alt="logo"
          className="nav-logo"
          src={subredditLogoPath}
        />
        <HeaderContainer>
          <SubredditTitle>{selectedSubreddit}</SubredditTitle>
          <SubredditSubtext>{selectedSubreddit}</SubredditSubtext>
        </HeaderContainer>
      </SubredditTitleContainer>
      <SubredditMenu>
        <SubredditMenuLink>Posts</SubredditMenuLink>
      </SubredditMenu>
    </HeaderContainer>
  );
}

export default SubredditHeader;
