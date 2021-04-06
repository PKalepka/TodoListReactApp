export default function deleteNoteReducer(state, action) {
    var id = action.payload;
    var newArray = state.noteArray.filter(note => {
        return note.id !== id;
    });

    return { noteArray: newArray };
}