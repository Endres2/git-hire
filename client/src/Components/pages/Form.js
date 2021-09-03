import React, {useState} from 'react';
import '../../App.css';
import '../pages/Form.css';


function Form() {

    const [fullNameReg, setFullNameReg] = useState('')
    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    return (
        <div className='Form'>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title">Sign Up</h1>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Full Name:</span>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Enter your full name' onChange={(e) => {
                                    setFullNameReg(e.target.value);
                                }}/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Email:</span>
                                <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Enter your email' onChange={(e) => {
                                    setEmailReg(e.target.value);
                                }}/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Password:</span>
                                <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Enter a password' onChange={(e) => {
                                    setPasswordReg(e.target.value);
                                }}/>
                            </div>
                            <div className='form-btn'>
                                <a href="#" class="btn btn-primary">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title">Login</h1>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Email:</span>
                                <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Enter your email'/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Password:</span>
                                <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Enter your password'/>
                            </div>
                            <div className='form-btn'>
                                <a href="#" class="btn btn-primary">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='form-container'>
                <div className='signup'>
                    <h1>Sign up</h1>
                    <div className='form-input'>
                        <label htmlFor='name' className='form-label'>Full Name:</label>
                        <input type='text' name='name' placeholder='Enter full name' onChange={(e) => {
                            setFullNameReg(e.target.value);
                        }}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='email' className='form-label'>Email:</label>
                        <input type='email' name='email' placeholder='Enter your email' onChange={(e) => {
                            setEmailReg(e.target.value);
                        }}/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='password' className='form-label'>Password:</label>
                        <input type='password' name='password' placeholder='Enter A Password' onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}/>
                    </div>
                    <button className='form-btn'>Sign up</button>           
                </div>
                <div className='login'>
                    <h1>Login</h1>
                    <div className='form-input'>
                        <label htmlFor='email' className='form-label'>Email:</label>
                        <input type='email' name='email' placeholder='Enter your email'/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='password' className='form-label'>Password:</label>
                        <input type='password' name='password' placeholder='Enter your Password'/>
                    </div>
                    <button className='form-btn'>Login</button>
                </div>
            </div> */}
            
        </div>
    )
}

export default Form
