// @flow
import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from '../App/App.css';
import * as PostActions from '../../actions/posts';

type Props = {
  dispatch: () => void,
  subreddits: array
};

class SubredditsContainer extends Component<Props> {
  props: Props;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(PostActions.fetchSubreddits());
  }

  render() {
    const { subreddits, dispatch } = this.props;

    const listItems = subreddits.map((subreddit, id) => (
      <ListGroup.Item
        onClick={() => dispatch(PostActions.subredditSelected(id))}
        action
        key={`subreddit-${id}`}
      >
        {subreddit.name}
      </ListGroup.Item>
    ));

    return <Col className={styles.col}>{listItems}</Col>;
  }
}

function mapStateToProps(state) {
  return {
    subreddits: state.postData.subreddits,
  };
}

export default connect(mapStateToProps)(SubredditsContainer);
