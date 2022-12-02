import { legacy_createStore } from "redux";
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             console.log(action);
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter((todo) => todo.id !== action.payload);
//         default:
//             return state;
//     }
// };

const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteToDo]: (state, action) =>
        state.filter((todo) => todo.id !== action.payload),
});

const store = configureStore({ reducer });

export default store;
