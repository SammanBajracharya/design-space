import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  article: [],
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticleData: (state, action) => {
      state.article = action.payload;
    }
  },
});

export const { setArticleData } = articleSlice.actions;

export const articleData = state => state.article.article;

export default articleSlice.reducer;
