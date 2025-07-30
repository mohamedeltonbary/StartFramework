import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar custom-navbar navbar-expand-lg fixed-top ">
                <div className="container py-3 ">
                    <NavLink className="navbar-brand  text-white text-uppercase str-fm " to="/">Start Framework</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse font-nav" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/portfolio">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/contact">CONTACT</NavLink>
                            </li>

                        </ul>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
