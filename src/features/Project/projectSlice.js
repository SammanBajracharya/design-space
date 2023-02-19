import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  project: [],
};

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectData: (state, action) => {
      state.project = action.payload;
    }
  },
});

export const { setProjectData } = projectSlice.actions;

export const projectData = state => state.project.project;

export default projectSlice.reducer;

