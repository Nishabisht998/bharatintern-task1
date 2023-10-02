import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='my-div'>
       <main>
       <header className='d-flex text-white ' style={{ justifyContent: 'space-between' }}>
       <NavLink className="nav-link" to="/">My Blog</NavLink>
          <nav>
          <NavLink className="nav-link" to="/login">login</NavLink>
          <NavLink className="nav-link" to="/register">register</NavLink>
          </nav>
        </header>
       </main>
    </div>
  )
}

export default Header