import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Job {
  title: string;
  description: string;
  location: string;
  job_type: "Full-time" | "Part-time" | "Contract" | "";
  postedDate: string;
}

interface JobState {
  jobs: Job[];
}

const initialState: JobState = {
  jobs: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<Job>) => {
      // debug: log payload when job is added
      if (typeof window !== 'undefined') console.log('addJob reducer called with', action.payload);
      state.jobs.push(action.payload);
      console.log(state.jobs,'jobnss')
    },
    removeJob: (state, action: PayloadAction<number>) => {
      state.jobs.splice(action.payload, 1);
    },
    editJob: (state, action: PayloadAction<{ index: number; updatedJob: Job }>) => {
      const { index, updatedJob } = action.payload;
      if (state.jobs[index]) {
        state.jobs[index] = updatedJob;
      }
    }
  },
});

export const { addJob, removeJob,editJob } = jobSlice.actions;
export default jobSlice.reducer;
