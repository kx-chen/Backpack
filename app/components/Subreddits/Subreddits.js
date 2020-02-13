import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import * as PostActions from '../../actions/posts';
import styles from '../../containers/App/App.css';

type Props = {
  dispatch: () => void,
  subreddits: array
};

export default class Subreddits extends Component<Props> {
  props: Props;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(PostActions.fetchSubreddits());
  }

  render() {
    const { subreddits, dispatch } = this.props;
    // TODO: make onclick prop
    const listItems = subreddits.map((subreddit, id) => (
      <ListGroup.Item
        onClick={() => dispatch(PostActions.subredditSelected(id))}
        action
      >
        {subreddit.name}
      </ListGroup.Item>
    ));

    return <Col className={styles.col}>{listItems}</Col>;
  }
}
