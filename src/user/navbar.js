import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
 
  return (
    <nav style={{padding:"20px"}}>
      <section>
       
       <h1 style={{textAlign:"center"}}>React Task</h1>

        <div className="navContent">
          <div className="navLinks">
             
            <Link style={{padding:"20px"}} to="/">Home</Link>
            <Link style={{padding:"20px"}} to="/createuser">Create User</Link>
            <Link style={{padding:"20px"}} to="/viewuser">View User</Link>
          
          </div>
        
        </div>
      </section>
    </nav>

  )
}

export default Navbar;