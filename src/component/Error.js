import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
  return (
    <div className='error'>
        <p>this URL doesn't exixst</p>
        <NavLink to={'/'}><button>Go To Home</button></NavLink>
    </div>
  )
}
