import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess.js';
import '../../App.css';
import signupImg from '../../images/signup-img.jpg'

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);;

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
        <div className='form-container'>
            <span className='close-btn'>X</span>
            <div className='form-content-left'>
                <img src={signupImg} alt='' className='form-img'/>
            </div>
            {/* if the form is not submitted then display formsignup else formlogin */}
           {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : (<FormSuccess />)}
        </div>
        </>
    )
}

export default Form
