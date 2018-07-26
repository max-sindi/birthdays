import { combineReducers } from 'redux';
import birthdays from './birthdaysReducer';
import ui from './UIReducer';

const reducers = {
  birthdays,
  ui,
}

export default combineReducers(
  reducers
)
