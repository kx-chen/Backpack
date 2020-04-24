export const TOGGLE_MENU = 'TOGGLE_MENU';

export function toggleMenu(open) {
  return {
    type: TOGGLE_MENU,
    open: !open
  };
}
