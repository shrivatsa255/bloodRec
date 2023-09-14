import React from 'react'
import {MdBloodtype} from "react-icons/md"
import {FaUserCircle} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
    const {user} = useSelector(state => state.auth)
    const navigate = useNavigate()

    //logout handler
    const handleLogout = () => {
        localStorage.clear()
        
        alert('logout sucessfully')
        navigate('/login')
    }
  return (
    <>
       <nav className='navbar '>
        <div className='container-fluid'>
            <div className='navbar-brand h1'>
                <MdBloodtype color='red'/>
                Blood Bank
            </div>
            <ul className='navbar-nav flex-row'>
                <li className='nav-item mx-3'>
                    <p className='nav-link'>
                        
                        <FaUserCircle/> Welcome{" "}
                        {user?.name || user?.hospitalName || user?.organisation}{" "}
                        &nbsp;
                        <span class="badge bg-secondary">{user?.role}</span>
                        </p>
                </li>
                <li className='nav-item mx-3'>
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </div>

       </nav>
    </>
  )
}

export default Header