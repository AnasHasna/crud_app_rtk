import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.title !== action.payload);
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.title === action.payload.title
          ? (post.content = action.payload.content2)
          : post
      );
    },
  },
});

export default postsSlice.reducer;
export const { addPost, deletePost, updatePost } = postsSlice.actions;
