import React from 'react'
import '../../App.css';
import './JobSearch.css';


function JobSearch() {
    return (
        <div className='JobSearch'>    
           <div className='search-container'>
                <div class="input-group input-group-lg what">
                    <span class="input-group-text" id="inputGroup-sizing-lg">What</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Job title, or Company'/>
                </div>  
                <div class="input-group input-group-lg where">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Where</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='City, State, Zip, or Remote'/>
                </div> 
                <div className='find-jobs-btn'>
                    <button type='button' className='btn btn-jobs'>Find Jobs</button> 
                </div>
           </div>
        </div>
    )
}

export default JobSearch
