export default function checkNoteReducer(state, action) {
    var id = action.payload;
    const newArray = state.noteArray.map(note => {
        if (note.id === id) {
            return {
                id: note.id,
                isChecked: !note.isChecked,
                text: note.text
            };
        }

        return note;
    });

    return { noteArray: newArray };
}