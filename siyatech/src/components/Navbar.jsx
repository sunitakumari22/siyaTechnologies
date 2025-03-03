import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [showDropdown, setShowDropdown] = useState(false)
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser')
        if (storedUser) {
            setLoggedInUser(JSON.parse(storedUser))
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser')
        setLoggedInUser(null)
        setShowLogoutConfirm(false)  
    }

    const confirmLogout = () => {
        setShowLogoutConfirm(true)
    }

    return (
        <div>
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <NavLink to="/" className="navbar-brand p-0">
                        <h1 className="text-primary m-0">Siya Tech</h1>
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>About</NavLink>
                            <NavLink to="/service" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Services</NavLink>
                            <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Gallery</NavLink>
                            <NavLink to="/courses" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Courses</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Contact</NavLink>
                        </div>

                        {loggedInUser ? (
                            <div
                                className="position-relative"
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                                style={{ cursor: 'pointer' }}
                            >
                                <button className="btn btn-primary btn-sm">
                                    {loggedInUser.name}
                                </button>

                                {showDropdown && (
                                    <div className="dropdown-menu show position-absolute" style={{ right: 0, top: '100%', minWidth: '200px' }}>
                                        <Link to="/profile" className="dropdown-item">Profile</Link>
                                        <button className="dropdown-item" onClick={confirmLogout}>Logout</button>
                                    </div>
                                )}
                                {showLogoutConfirm && (
                                    <div className="position-fixed top-50 start-50 translate-middle bg-white p-4 border rounded shadow" style={{ zIndex: 1050 }}>
                                        <p>Are you sure you want to logout?</p>
                                        <div className="d-flex justify-content-end">
                                            <button className="btn btn-secondary me-2" onClick={() => setShowLogoutConfirm(false)}>Cancel</button>
                                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink to="/login" className="btn btn-primary rounded-pill py-2 px-4">Login</NavLink>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    )
}
