import { ADD_JOB, REMOVE_JOB } from "../utils/actions";
const { uuid } = require('uuidv4');

const initalState = {
    jobs: [
      {
        id: uuid(),
        title: 'Full Stack Dev',
        company: 'Citrix',
        salary: '100000',
        postedOn: '08/07/21',
      },
      {
        id: uuid(),
        title: 'Data Scientist',
        company: 'Google',
        salary: '120000',
        postedOn: "10/10/21",
      },
    ]
  }

  export default function reducer(state = initalState, action) {
    switch (action.type) {
      case ADD_JOB: {
        const newJobId = state.jobs[state.jobs.length - 1].id + 1;
        const newJob = { ...action.payload, id: newJobId };
  
        return {
          ...state,
          jobs: [...state.jobs, newJob],
        };
      }
      case REMOVE_JOB: {
        const JobIndex = state.cars.findIndex((job) => job.id === action.payload);
        const updatedJobList = { ...state.jobs[JobIndex].slice(0, action.payload),...state.jobs[JobIndex].slice(0, action.payload+1) };
  
        const jobsCopy = [...state.cars];
        jobsCopy[JobIndex] = updatedJobList;
  
        return {
          ...state,
          cars: jobsCopy,
        };
      }
      default: {
        return state;
      }
    }
  }