import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { initiateGetJobs } from '../actions/jobs';
import { resetErrors } from '../actions/errors';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import JobDetails from './JobDetails';
import JobsContext from '../context/jobs';



const JobSearch = (props) => {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [jobId, setJobId] = useState(-1);
  const [page, setPage] = useState('JobSearch');
  const [pageNumber, setPageNumber] = useState(1);
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    setResults(props.jobs);
  }, [props.jobs]);

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  const loadJobs = (selection) => {
    const { dispatch } = props;
    const { description, location, full_time, page = 1 } = selection;
    let isLoadMore = false;
    if (selection.hasOwnProperty('page')) {
      isLoadMore = true;
    }
    dispatch(resetErrors());
    setIsLoading(true);
    dispatch(
      initiateGetJobs({ description, location, full_time, page }, isLoadMore)
    )
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  
    const handleSearch = (selection) => {
        loadJobs(selection);
        setSelection(selection);
      };

  const handleItemClick = (jobId) => {
    setPage('details');
    setJobId(jobId);
  };

  const handleResetPage = () => {
    setPage('JobSearch');
  };

  const handleLoadMore = () => {
    loadJobs({ ...selection, page: pageNumber + 1 });
    setPageNumber(pageNumber + 1);
  };

  let jobDetails = {};
  if (page === 'details') {
    jobDetails = results.find((job) => job.id === jobId);
  }
  const value = {
    results,
    details: jobDetails,
    onSearch: handleSearch,
    onItemClick: handleItemClick,
    onResetPage: handleResetPage
  };

  return (
    <JobsContext.Provider value={value}>
      <div className={`${page === 'details' && 'hide'}`}>
        <Header /> <Search />
        {!_.isEmpty(errors) && (
          <div className="errorMsg">
            <p>{errors.error}</p>
          </div>
        )}
        <Results /> 
        {isLoading && <p className="loading">Loading...</p>}
        {results.length > 0 && _.isEmpty(errors) && (
          <div
            className="load-more"
            onClick={isLoading ? null : handleLoadMore}
          >
            <button
              disabled={isLoading}
              className={`${isLoading ? 'disabled' : ''}`}
            >
              Load More Jobs
            </button>
          </div>
        )}
      </div>
      <div className={`${page === 'home' && 'hide'}`}>
        {page === 'details' && <JobDetails />}
      </div>
      </JobsContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
  errors: state.errors
});

export default connect(mapStateToProps)(JobSearch);