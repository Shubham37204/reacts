import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><NavLink to="/" className="nav-link px-2">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/Service" className="nav-link px-2 ">Service</NavLink></li>
                    <li className="nav-item"><NavLink to="/About" className="nav-link px-2 ">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/Contact" className="nav-link px-2 ">Contact</NavLink></li>
                </ul>
                <p className="text-center ">© 2022 Company, Inc</p>
            </footer>
        </div>
    )
}

export default Footer