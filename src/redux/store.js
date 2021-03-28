import { v4 as uuidv4 } from 'uuid';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const actionSlice = createSlice({
    name: 'todoSlices',
    initialState: { noteArray: [] },
    reducers: {
        addNote: (state, action) => {
            var inputText = action.payload;
            state.noteArray = [...state.noteArray,
            {
                id: uuidv4(),
                isChecked: false,
                text: inputText
            }];
        },
        deleteNote: (state, action) => {
            var id = action.payload;
            state.noteArray = state.noteArray.filter(note => {
                return note.id !== id;
            });
        },
        checkNote: (state, action) => {
            var id = action.payload;
            state.noteArray = state.noteArray.map(note => {
                if (note.id === id) {
                    note.isChecked = !note.isChecked;
                    return note;
                }

                return note;
            });
        },
        restoreState: (state, action) => {
            state.noteArray = action.payload;
        }
    }
})

export const store = configureStore({
    reducer: actionSlice.reducer
})

export const { addNote, deleteNote, checkNote, restoreState } = actionSlice.actions