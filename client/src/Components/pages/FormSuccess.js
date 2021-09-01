import React from 'react'
import successImg from '../../images/success-img.jpg';


const FormSuccess = () => {
    return (
        <div className='Form form-content-right'>
            <div className='form-success'>We have received your request</div>
            <img src={successImg} alt='' className='form-img-2'/>
        </div>
    )
}

export default FormSuccess
