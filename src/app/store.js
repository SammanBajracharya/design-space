import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/Project/projectSlice';
import articleReducer from '../features/Article/articleSlice'

const store = configureStore({
  reducer: {
    project: projectReducer,
    article: articleReducer,
  },
});

export default store;