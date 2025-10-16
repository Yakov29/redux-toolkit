import { createReducer } from "@reduxjs/toolkit";
// import { addTask, removeTask, filterTask } from "./actions";

import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

// export const tasksReducer = (state = initialState, action,) => {
//   switch (action.type) {
//     case "addTask": {
//       const newState = [...state, action.payload];
//       localStorage.setItem("tasks", JSON.stringify(newState));
//       return newState;
//     }

//     case "removeTask": {
//       const newState = state.filter((task) => task.id !== action.payload);
//       localStorage.setItem("tasks", JSON.stringify(newState));
//       return newState;
//     }

//     case "filterTask" : {

//       const oldState = JSON.parse(localStorage.getItem("tasks"))
//       const newState = oldState.filter((task) => task.title === action.payload);
//       console.log(action.payload)
//       return newState
//     }

//     default:
//       return state;
//   }
// };

// export const tasksReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(addTask, (state, action) => {
//       const newState = [...state, action.payload];
//       localStorage.setItem("tasks", JSON.stringify(newState));
//       return newState;
//     })
//     .addCase(removeTask, (state, action) => {
//       const newState = state.filter((task) => task.id !== action.payload);
//       localStorage.setItem("tasks", JSON.stringify(newState));
//       return newState;
//     })
//     .addCase(filterTask, (state, action) => {
//       const oldState = JSON.parse(localStorage.getItem("tasks"));
//       const newState = oldState.filter((task) => task.title === action.payload);
//       console.log(action.payload);
//       return newState;
//     })
// });

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const newState = [...state, action.payload];
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    removeTask(state, action) {
      const newState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    filterTask(state, action) {
      const oldState = JSON.parse(localStorage.getItem("tasks"));
      const newState = oldState.filter((task) => task.title === action.payload);
      console.log(action.payload);
      return newState;
    },
  },
});


export const { addTask, removeTask, filterTask } = taskSlice.actions
export default taskSlice.reducer