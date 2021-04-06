import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { addNoteAction, deleteNoteAction, checkNoteAction, restoreStateAction } from '../redux/actions/actionCreators';

const initialState = {
    noteArray: []
};

export const store = createStore(rootReducer, initialState);

export const addNote = addNoteAction,
    deleteNote = deleteNoteAction,
    checkNote = checkNoteAction,
    restoreState = restoreStateAction;