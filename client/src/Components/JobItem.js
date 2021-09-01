import React, { useContext } from 'react';
import moment from 'moment';
import JobsContext from '../context/jobs';

const JobItem = (props) => {
  const { onItemClick } = useContext(JobsContext);
  const {
    id,
    type,
    created_at,
    company,
    description,
    location,
    title,
    index
  } = props;

  return (
    <div className="job-item" index={index + 1} onClick={() => onItemClick(id)}>
     
      <div className="job-info">
        <div className="job-title">{title}</div>
        <div className="job-description">{description}</div>
        <div className="job-location">
          {location} | {type}
        </div>
        <div className="company-name">{company}</div>
      </div>
      <div className="post-info">
        <div className="post-time">
          Posted {moment(new Date(created_at)).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default JobItem;