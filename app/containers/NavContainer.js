import { connect } from 'react-redux';
import Nav from '../components/Nav';
<<<<<<< HEAD
import { toggleMenu } from "../actions/sidenav";

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMenuChange: (open) => dispatch(toggleMenu(open))
=======
import { toggleMenu } from '../actions/sidenav';

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMenuChange: open => dispatch(toggleMenu(open))
>>>>>>> RO-9 Add sidebar arrow to open/close menu
  };
}

function mapStateToProps(state, ownProps) {
  return {
<<<<<<< HEAD
    open: state.sidenav.open,
=======
    open: state.sidenav.open
>>>>>>> RO-9 Add sidebar arrow to open/close menu
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
