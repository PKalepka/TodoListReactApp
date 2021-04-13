import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const initialState = {
    noteArray: []
};

export const store = createStore(rootReducer, initialState);