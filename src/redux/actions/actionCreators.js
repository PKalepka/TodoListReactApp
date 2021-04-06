import { ADD_NOTE, CHECK_NOTE, DELETE_NOTE, RESTORE_STATE } from "./actionTypes";

export const addNoteAction = inputText => ({
    type: ADD_NOTE,
    payload: inputText
});

export const checkNoteAction = id => ({
    type: CHECK_NOTE,
    payload: id
});

export const deleteNoteAction = id => ({
    type: DELETE_NOTE,
    payload: id
});

export const restoreStateAction = noteArray => ({
    type: RESTORE_STATE,
    payload: noteArray
});