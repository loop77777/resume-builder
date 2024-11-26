import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: {
    title: '',
    firstName: '',
    lastName: '',
  },
  summary: '',
  experience: [{ company: '', role: '', description: '' }],
  education: [{ institution: '', degree: '', description: '' }],
  skills: [{ skill: '' }],
  projects: [{ name: '', description: '' }],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setFields: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setDetails, setSummary, setExperience, setEducation, setSkills, setProjects, setFields } = resumeSlice.actions;
export default resumeSlice.reducer;