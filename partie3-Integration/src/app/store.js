// setting up redux
import { MiddlewareArray, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import TaskApi from "../features/tasks/tasksSlice";
export const store = configureStore({
  reducer: {
    [TaskApi.reducerPath]: TaskApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(TaskApi.middleware),
});
setupListeners(store.dispatch);

export default store; 