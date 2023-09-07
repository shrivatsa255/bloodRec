import React from 'react';
import Form from '../../components/shared/Form/Form';



const login = () => {
  return (
    <>
    <div className="row g-0">
        <div className="col-md-8 form-blood1 ">
        <img src="./assets/images/blood1.jpg" alt="loginImage" />
        </div>
        <div className="col-md-4 form-container">
           <Form formTitle={'Login'} 
           submitBtn={'Login'} 
           formType={'login'}
           />
        </div>
    </div>
  </>
  )
}

export default login;