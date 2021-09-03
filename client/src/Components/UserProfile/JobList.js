import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_JOB, REMOVE_JOB } from '../../utils/actions';

function JobList() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [newJobTitle, setNewJobTitle] = useState('');
    const [newJobCompany, setNewJobCompany] = useState('');
    const [newJobSalary, setNewJobSalary] = useState('');
    const [newJobDate, setNewJobDate] = useState('');

    return (
        <div className="UserJobs">
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <div align="center" style={{ background: "blue" }}>
                        <section className="">
                            <div>
                                <div className="">
                                    Add a job:
                                    <input
                                        defaultValue={newJobTitle}
                                        onChange={(event) => setNewJobTitle(event.target.value)}
                                        placeholder="New job title..."
                                        type="text"
                                    />
                                    <input
                                        defaultValue={newJobCompany}
                                        onChange={(event) => setNewJobCompany(event.target.value)}
                                        placeholder="Job's company name..."
                                        type="text"
                                    />
                                    <input
                                        defaultValue={newJobSalary}
                                        onChange={(event) => setNewJobSalary(event.target.value)}
                                        placeholder="Job's Salary..."
                                        type="text"
                                    />
                                    <input
                                        defaultValue={newJobDate}
                                        onChange={(event) => setNewJobDate(event.target.value)}
                                        placeholder="Posted on..."
                                        type="text"
                                    />
                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: ADD_JOB,
                                                payload: {
                                                    title: newJobTitle,
                                                    company: newJobCompany,
                                                    salary: newJobSalary,
                                                    postedOn: newJobDate,
                                                },
                                            })
                                        }
                                    >
                                        Add Car
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className="car-list">
                            {console.log(state)}
                            {state.cars.map((job) => (
                                <div key={job.id} id={job.id} className="">
                                    <h4 className="card-header bg-primary text-light p-2 m-0">
                                        {job.title} <br />
                                        <span style={{ fontSize: '1rem' }}>
                                            {job.company}
                                        </span>
                                    </h4>
                                    <div className="card-body bg-light p-2">
                                        <p>${job.salary}/y</p>
                                        <code>
                                            Job ID:
                                            {job.id}
                                        </code>
                                    </div>
                                    <div className="card-body bg-light p-2">
                                        <p>{job.postedOn}</p>
                                        <code>
                                            Job ID:
                                            {job.id}
                                        </code>
                                    </div>
                                    {/* <span style={{ fontSize: '1rem' }}>
                                        {car.isRunning ? 'Car is running 🏎️' : 'Car is off 💤'}
                                        <button
                                            id="turnOn"
                                            onClick={
                                                !car.isRunning
                                                    ? () => dispatch({ type: START_CAR, payload: car.id })
                                                    : () => dispatch({ type: STOP_CAR, payload: car.id })
                                            }
                                        >
                                            Toggle Engine
                                        </button>
                                    </span> */}
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobList;