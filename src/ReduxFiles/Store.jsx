import { createStore } from "redux";
// import { todoReducer } from "./reducer";
import { todoReducer } from "./tasksSlice";
import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore } from "@reduxjs/toolkit";


// Create Redux store and pass the reducer
// export const store = createStore(todoReducer , composeWithDevTools());
export const store = configureStore({
    reducer: {
     todoReducer: todoReducer.reducer,
    },
  });


 