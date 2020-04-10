import { TOGGLE_MENU } from '../actions/sidenav';

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
