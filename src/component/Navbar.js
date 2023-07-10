import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="nav-items">
            <ul>
                <NavLink style={({isActive}) => ({color: isActive ? '#007BB6' : "black", textDecoration: 'none'})}  to={"/"}>Home</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? '#007BB6' : "black", textDecoration: 'none'})}  to={"/projects"}>Projects</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? '#007BB6' : "black", textDecoration: 'none'})}  to={"/resume"}>Resume</NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? '#007BB6' : "black", textDecoration: 'none'})}  to={"contact"}>Contact</NavLink>
            </ul>
        </div>
        <div className="social-links">
            <BsGithub style={{width: '22px', height: '22px'}} onClick={()=>window.open('https://github.com/Purohitgautam', '_blank')} />
            <BsLinkedin style={{width: '22px', height: '22px'}} onClick={()=>window.open('https://www.linkedin.com/in/gautam-purohit-027417207', '_blank')} />
        </div>
    </div>
  )
}