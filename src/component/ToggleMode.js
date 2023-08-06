import React from 'react'
import { BsSun, BsMoon } from "react-icons/bs";

export default function ToggleMode({toggleTheme, changeModeIcon}) {

  return (
    <span>
        <input type="checkbox" id="toggle-mode" onChange={toggleTheme} />
        <label htmlFor="toggle-mode" className='toggle-label'>
            {changeModeIcon ? <BsMoon className='mode-icons' /> : <BsSun className='mode-icons' />}
        </label>
    </span>
  )
}
