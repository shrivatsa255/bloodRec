import React from 'react'
import Form from '../../components/shared/Form/Form'

const Register = () => {                                   //g-0 means guttur size is 0 to remove the horizontal scroll
  return (
    <>
    <div className="row g-0">         
      <div className="col-md-8 form-blood1 ">
        <img src="./assets/images/blood-test.jpg" alt="registerimg" />

      </div>
      <div className="col-md-4 form-container">
        <Form formTitle={'Register'} 
        submitBtn={'Register'} 
        formType={'register'}
        />
      </div>
    </div>
      
        </>
  )
}

export default Register







    
    