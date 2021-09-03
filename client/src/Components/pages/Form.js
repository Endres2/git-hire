import React from 'react';
import '../../App.css';
import '../pages/Form.css';


function Form() {

    return (
        <div className='Form'>
            <div className='form-container'>
                <div className='signup'>
                    <h1>Sign up</h1>
                    <div className='form-input'>
                        <label htmlFor='name' className='form-label'>Full Name:</label>
                        <input type='text' name='name' placeholder='Enter full name'/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='email' className='form-label'>Email:</label>
                        <input type='email' name='email' placeholder='Enter your email'/>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='password' className='form-label'>Password:</label>
                        <input type='password' name='password' placeholder='Enter A Password'/>
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
            </div>
            
        </div>
    )
}

export default Form
