// this is a tollkit reducer 

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};

export const todoReducer = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter((val, index) => (index !== action.payload))
        },
        editTask(state, action) {
            const { index, newValue } = action.payload;
            state.tasks[index] = newValue;
          },
    },
});

export const { addTask, deleteTask, editTask } = todoReducer.actions;
export default todoReducer.reducer;
