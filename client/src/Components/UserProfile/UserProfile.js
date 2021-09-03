import './UserProfile.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import JobList from './JobList';

function UserProfile() {

    return (
        <div className="UserProfile">
           <div className="container-fluid">
                <div className="row justify-content-between">
                    <div className="col-md-4 col-sm-12 " align="center" style={{background:"blue"}}>
                        <h2>Profile</h2>
                    </div>
                    <div className="col-md-8 col-sm-12 " align="center" style={{background:"red"}}>
                        <Calendar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12" align="center" style={{background:"purple"}}>
                        {/* <JobList/> */}
                    </div>
                    
                </div>
           </div>
        </div>
    );
}



export default UserProfile;
