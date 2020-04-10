<<<<<<< HEAD
import { TOGGLE_MENU } from "../actions/sidenav";
=======
import { TOGGLE_MENU } from '../actions/sidenav';
>>>>>>> RO-9 Add sidebar arrow to open/close menu

const initialState = {
  open: true
};

export default function storage(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        open: action.open
      };
    default:
      return state;
  }
}
