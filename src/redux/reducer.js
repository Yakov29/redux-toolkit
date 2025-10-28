import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    removeTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    filterTask(state, action) {
      state.tasks = state.tasks.filter((task) =>
        task.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const taskReducer = taskSlice.reducer;
export const { addTask, removeTask, filterTask } = taskSlice.actions;
