import { createReducer } from "@reduxjs/toolkit";
// import { addTask, removeTask, filterTask } from "./actions";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
}

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
      console.log(state)
      // const newState = [...state, action.payload];
       const newState = action.payload
       state.tasks.push(newState)
      // localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
    // removeTask(state, action) {
    //   const newState = state.filter((task) => task.id !== action.payload);
    //   // localStorage.setItem("tasks", JSON.stringify(newState));
    //   return newState;
    // },
    // filterTask(state, action) {
    //   const oldState = JSON.parse(localStorage.getItem("tasks"));
    //   const newState = oldState.filter((task) => task.title === action.payload);
    //   console.log(action.payload);
    //   return newState;
    // },
  },
});

export const taskReducer = taskSlice.reducer;
export const { addTask, removeTask, filterTask } = taskSlice.actions


