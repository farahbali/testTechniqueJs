/* eslint-disable  */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3000/";
export const TaskApi = createApi({
  initialState: {},
  reducerPath: "TaskApi",
  tagTypes: ["task"],
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    taskList: builder.query({
      query: () => `api/v1/task`,
      providesTags: ["task"],
    }),
    getTaskById: builder.query({
      query: ({ id }) => {
        if (!id) {
          console.log("id task  not found");
          return "";
        }
        return `api/v1/task/${id}`;
      },
    }),
    createTask: builder.mutation({
      query: ({ body }) => ({
        url: "api/v1/task",
        method: "POST",
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      invalidatesTags: ["task"],
    }),
    updateTask: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/v1/task/${id}`,
        method: "PUT",
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      invalidatesTags: ["task"],
    }),
    deleteTask: builder.mutation({
      query({ id }) {
        return { url: `api/v1/task/${id}`, method: "DELETE" };
      },
      invalidatesTags: ["task"],
    }),
  }),
});
export const {
  useTaskListQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = TaskApi;
export default TaskApi;

/* eslint-enable  */
