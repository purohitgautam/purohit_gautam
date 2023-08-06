import React, {useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ToggleMode from './ToggleMode'

export default function Navbar() {

  const [changeModeIcon, setChangeModeIcon] = useState(false)
  const [navColor, setNavColor] =useState("black")
  const setDarkMode = ()=>{
    document.querySelector("body").setAttribute('data-theme', 'dark')
  }
  const setLightMode = ()=>{
      document.querySelector("body").setAttribute('data-theme', 'light')
  }

    const toggleTheme = (e)=>{
        if(e.target.checked) {
          setDarkMode()
          setNavColor("white")
          setChangeModeIcon(true)
          hamburgerCheck.current.click()
        }
        else {
          setLightMode()
          setNavColor("black")
          setChangeModeIcon(false)
          hamburgerCheck.current.click()
        }
    }

    const navLists = ['Home', 'Projects', 'Resume', "Contact"]
    const hamburgerCheck = useRef()

  return (
    <div className='navbar'>
      <span>Gautam.dev</span>
      <label className="hamburger-menu">
        <input type="checkbox" ref={hamburgerCheck} />
      </label>
      <div className="nav-items">
          <ul>
            {navLists.map((navlist, index) => {
              return <NavLink 
                 to={navlist === 'Home' ? '/' : `/${navlist.toLowerCase()}`}
                 key={index}  style={({isActive}) => ({color: isActive ? 'rgb(1 173 255)' : navColor, textDecoration: 'none'})}
                 onClick={()=> hamburgerCheck.current.click()}  className={'navlinks'} >
                  {navlist}
                </NavLink>
          })}
              <ToggleMode 
                toggleTheme={toggleTheme} 
                changeModeIcon={changeModeIcon}
                className={'navlinks'} 
              />
          </ul>
      </div>
    </div>
  )
}