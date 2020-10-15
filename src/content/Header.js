import React from 'react'
import { NavLink } from 'react-router-dom';

import Logo from '../images/logo.jpeg'
import './header.css'

const Header = () => {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div className="container">
            <div className="row logo-nav">
                <div className="col-sm-2">
                    <div id="mySidenav" className="sidenav">
                        <a className="closebtn" onClick={closeNav}>×</a>
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/apply-online">Admission Form</a></li>
                        <li><a href="/fee-structure">Fee-Structure</a></li>
                        <li><a href="/gallary">Gallery</a></li>
                        <li><a href="/teachers-info">Faculties</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </div>
                    <span style={{ fontSize: '30px', cursor: 'pointer', position: 'relative' }} id="menu_button" onClick={openNav}>☰
                     <div style={{ marginTop: '-2.3rem', marginLeft: '16rem' }}><img src={Logo} style={{ width: '5rem', height: '3.9rem' }} /></div>
                   </span>
                </div>
                <div className="col-sm-10">
                    <nav className="navbar navbar-expand-md">
                        <a className="navbar-brand fixed-top" href="/"><img src={Logo} style={{ width: '5rem', height: '3.9rem', marginTop: '-0.3rem' }} /></a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav fixed-top">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link header-nav" >Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/apply-online" className="nav-link header-nav" >Admission Form</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/fee-structure" className="nav-link header-nav" >Fee-Structure</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/gallery" className="nav-link header-nav" href="/gallary">Gallery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/teachers-info" className="nav-link header-nav" >Faculties</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact-us" className="nav-link header-nav" >Contact Us</NavLink>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )

}
    export default Header
