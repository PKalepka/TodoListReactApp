import { v4 as uuidv4 } from 'uuid';

export default function addNoteReducer(state, action) {
    var inputText = action.payload;
    var newArray = [...state.noteArray,
    {
        id: uuidv4(),
        isChecked: false,
        text: inputText
    }];

    return { noteArray: newArray };
}