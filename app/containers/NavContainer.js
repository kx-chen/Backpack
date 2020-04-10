import { connect } from 'react-redux';
import Nav from '../components/Nav';
import { toggleMenu } from "../actions/sidenav";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMenuChange: (open) => dispatch(toggleMenu(open))
  };
}

function mapStateToProps(state, ownProps) {
  return {
    open: state.sidenav.open,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
