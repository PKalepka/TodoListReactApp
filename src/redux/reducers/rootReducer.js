import { ADD_NOTE, CHECK_NOTE, DELETE_NOTE, RESTORE_STATE } from '../actions/actionTypes';
import addNoteReducer from './addNoteReducer';
import checkNoteReducer from './checkNoteReducer';
import deleteNoteReducer from './deleteNoteReducer';
import restoreStateReducer from './restoreStateReducer';

const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return addNoteReducer(state, action);
    case CHECK_NOTE:
      return checkNoteReducer(state, action);
    case DELETE_NOTE:
      return deleteNoteReducer(state, action);
    case RESTORE_STATE:
      return restoreStateReducer(state, action);
    default:
      return state
  }
}

export default rootReducer;