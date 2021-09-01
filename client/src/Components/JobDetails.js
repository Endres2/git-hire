import React, { useContext } from 'react';
import JobsContext from '../context/jobs';



const JobDetails = () => {
    const { details, onResetPage } = useContext(JobsContext);
  const {
    type,
    title,
    description,
    location,
    company,
    redirect_url,
   
  } = details;

  return (
    <div className="job-details">
      <div className="back-link">
        <a href="/#" onClick={onResetPage}>
          &lt;&lt; Back to results
        </a>
      </div>
      <div>
        {type} / {location}
      </div>
      <div className="main-section">
        <div className="left-section">
          <div className="title">{title}</div>
          <hr />
          <div className="job-description" dangerouslySetInnerHTML={{ __html: description }}></div>
        <div className="right-section">
          <div className="company-details">
            <h3>About company</h3>
           <div className="company-name">{company}</div>
           <div className="company-name">{location}</div>
           <div className="company-name">{description}</div>
            </div>
          <div className="how-to-apply">
            <h3>How to apply</h3>
            <a className="company-url" href={redirect_url}>
              {redirect_url}
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JobDetails;