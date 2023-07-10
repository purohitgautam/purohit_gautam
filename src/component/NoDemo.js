import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NoDemo() {
  return (
    <div className='nodemo'>
        <p>this site doesn't have live demo</p>
        <NavLink to={'/projects'}><button>Go To Projects</button></NavLink>
    </div>
  )
}
