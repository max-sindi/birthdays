export function toggleActiveLink(activeLink) {
  return dispatch => {
    return dispatch({type: 'TOGGLE_ACTIVE_LINK', activeLink});
  }
}
