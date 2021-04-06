export default function restoreStateReducer(state, action) {
    const newArray = action.payload == null ? [] : action.payload;

    return { noteArray: [...newArray] };
}