// @flow
import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import styles from '../../containers/App/App.css';

type Props = {
  title: string,
  karma: string
};

class Post extends Component<Props> {
  props: Props;

  render() {
    const { title, karma } = this.props;
    console.log('Post props', this.props);
    return (
      <Col className={styles.col}>
        {title}
        {karma}
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.postData.title,
    karma: state.postData.karma
  };
}

export default connect(mapStateToProps)(Post);
