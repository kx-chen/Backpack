import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import styles from '../../containers/App/App.css';

type Props = {
  onSubredditSelected: () => void,
  subreddits: {}
};

export default class Subreddits extends Component<Props> {
  props: Props;

  render() {
    const { subreddits, onSubredditSelected } = this.props;

    const listItems = subreddits.map(subreddit => (
      <ListGroup.Item
        onClick={() => onSubredditSelected(subreddit.name)}
        action
      >
        {subreddit.name}
      </ListGroup.Item>
    ));

    return <Col className={styles.col}>{listItems}</Col>;
  }
}
