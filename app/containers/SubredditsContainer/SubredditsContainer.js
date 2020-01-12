// @flow
import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from '../App/App.css';
import * as PostActions from '../../actions/posts';

type Props = {
  dispatch: () => void,
  // TODO: change
  subreddits: []
};

class SubredditsContainer extends Component<Props> {
  props: Props;

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.dispatch(PostActions.fetchSubreddits());
  }

  render() {
    const { subreddits, dispatch } = this.props;
    console.log('subredditscontainer props', this.props);

    const listItems = subreddits.map((subreddit, id) => (
      <ListGroup.Item
        onClick={() => dispatch(PostActions.subredditSelected(id))}
        action
      >
        {subreddit.name}
      </ListGroup.Item>
    ));

    return (
      <Col className={styles.col}>
        Subreddits lol
        {listItems}
      </Col>
    );
  }
}

function mapStateToProps(state) {
  console.log('subredditscontainer', state);
  return {
    subreddits: state.postData.subreddits
  };
}

export default connect(mapStateToProps)(SubredditsContainer);
