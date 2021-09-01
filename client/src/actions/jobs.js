import axios from 'axios';
import moment from 'moment';
import { BASE_API_URL } from '../utils/constants';
import { setErrors } from './errors';

export const initiateGetJobs = (data) => {
  return async (dispatch) => {
    try {
      let { keyWords, full_time, location, salaryMin, page } = data;
      keyWords = keyWords ? encodeURIComponent(keyWords) : '';
      location = location ? encodeURIComponent(location) : '';
      salaryMin = salaryMin ? encodeURIComponent(salaryMin) : '';
      full_time = full_time ? '&full_time=true' : '';

      if (page) {
        page = parseInt(page);
        page = isNaN(page) ? '' : `&page=${page}`;
      }

      const jobs = await axios.get(
        `${BASE_API_URL}&what_or=${keyWords}&where=${location}&salary_min=${salaryMin}&full_time=${full_time}`
      );
      const sortedJobs = jobs.data.sort(
        (a, b) =>
          moment(new Date(b.created_at)) - moment(new Date(a.created_at))
      );
      return dispatch(setJobs(sortedJobs));
    } catch (error) {
      error.response && dispatch(setErrors(error.response.data));
    }
  };
};

export const setJobs = (jobs) => ({
  type: 'SET_JOBS',
  jobs
});

export const setLoadMoreJobs = (jobs) => ({
  type: 'LOAD_MORE_JOBS',
  jobs
});