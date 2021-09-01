import React from 'react';
import './Form.css';
import useFrom from './useForm';
import validate from './validateInfo';

function FormSignup(submitForm) {

    //calls useform hooks
    const {handleChange, values, handleSubmit, errors} = useFrom(submitForm, validate);


    return (
        <div className='Form form-content-right'>
            <form className='form-content' onSubmit={handleSubmit}>
                <h1>Sign Up to get your job search started!</h1>
                <div className='form-inputs'>
                    {/* displays the error */}
                    {errors.name && <p>{errors.name}</p>}
                    <label htmlFor='name' className='form-label'>Full Name:</label>
                    <input id='name' type='text' name='name' className='form-input' placeholder='Enter your full name' value={values.name} onChange={handleChange}/>
                </div>
                <div className='form-inputs'>
                    {errors.email && <p>{errors.email}</p>}
                    <label htmlFor='email' className='form-label'>Email:</label>
                    <input id='email' type='email' name='email' className='form-input' placeholder='Enter your email' value={values.email} onChange={handleChange}/>
                </div>              
                <div className='form-inputs'>
                    {errors.password && <p>{errors.password}</p>}
                    <label htmlFor='password' className='form-label'>Password:</label>
                    <input id='password' type='password' name='password' className='form-input' placeholder='Enter your password' value={values.password} onChange={handleChange}/>
                </div>              
                <div className='form-inputs'>
                    {errors.password2 && <p>{errors.password2}</p>}
                    <label htmlFor='password2' className='form-label'>Confirm Password:</label>
                    <input id='password2' type='password' name='password2' className='form-input' placeholder='confirm your password' value={values.password2} onChange={handleChange}/>
                </div>             
                <button className='form-input-btn' type='submit'>Sign up</button>
                <span className='form-input-login'>Already have an account? Login <a href='#'>here</a></span>
            </form>
            

            
        </div>
    )
}

export default FormSignup
