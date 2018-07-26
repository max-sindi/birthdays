import BirthdaysApi from '../../utils/birthdaysApi';

export function getTodayList() {
  return dispatch => {
    return BirthdaysApi.getTodayList()
      .then(res => {
        return dispatch({type: 'LIST_GET_SUCCESS', res, sortDirection: -1});
      })
  }
}

export function getRecentList() {
  return dispatch => {
    return BirthdaysApi.getRecentList()
      .then(res => {
        return dispatch({type: 'LIST_GET_SUCCESS', res, sortDirection: +1})
      })
  }
}

export function getSoonList() {
  return dispatch => {
    return BirthdaysApi.getSoonList()
      .then(res => {
        return dispatch({type: 'LIST_GET_SUCCESS', res, sortDirection: -1})
      })
  }
}

export function clearList() {
  return dispatch => {
    return dispatch({type: 'LIST_CLEAR'})
  }
}

export function watchMore() {
  return dispatch => {
    dispatch({type: 'WATCH_MORE'});
  }
}
