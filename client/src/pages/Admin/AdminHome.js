import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { useSelector } from 'react-redux'

const AdminHome = () => {
    const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
        <div className='container'>
            <div className='d-flex flex-column mt-4'>
                <h1>
                    Welcome Admin <i className='text-success'>{user?.name}</i>
                </h1>
                <h3>Manage Blood Bank App</h3>
                <hr/>
                <p>
                This is the admin dashboard, you can manage all blood banks here and also add new ones as well.
                Manage all the blood banks and donors in this app, you can add new ones or delete them if they are not needed anymore.
                This is a blood bank app that helps you to manage your donors and requests for blood. You can add new users, view all the registered ones. The system ensures secure access control with user authentication mechanisms. Different user roles, such as administrators, hospital staff, and donors, have tailored permissions and functionality. Donors can easily register and provide their personal information, including blood type, contact details, and availability for donation. The system verifies and stores this information securely. Hospitals and organizations can search for available blood units based on blood type, location, and availability.Comprehensive reporting and analytics tools allow administrators to analyze donation trends, inventory levels, and donor engagement. This data-driven approach assists in making informed decisions.Administrators have access to a centralized dashboard for managing users, monitoring system activities, and overseeing the entire blood banking operation.The system prioritizes data security and privacy, ensuring compliance with data protection regulations. User data is encrypted, and access control is enforced. The system helps in quickly matching donor blood with recipient needs. It provides a modern and efficient solution to meet the critical needs of blood banks, hospitals, and organizations involved in blood donation and distribution.

                </p>
            </div>
        </div>

    </Layout>
  )
}

export default AdminHome