import { ADD_NOTE, CHECK_NOTE, DELETE_NOTE, RESTORE_STATE } from "./actionTypes";

export const addNote = inputText => ({
    type: ADD_NOTE,
    payload: inputText
});

export const checkNote = id => ({
    type: CHECK_NOTE,
    payload: id
});

export const deleteNote = id => ({
    type: DELETE_NOTE,
    payload: id
});

export const restoreState = noteArray => ({
    type: RESTORE_STATE,
    payload: noteArray
});