import React from 'react'
import { Link } from 'react-router-dom'
import './Layout.css'

const Header = () => {
    return (
        <div className="header">
           <div className="header-container">
             <div className="header-left">
                 Original site <span style={{ fontWeight: '200'}}>By Ao Honda</span>
             </div>
             <div className="header-right">
                <Link to="/" className="link">Home</Link> 
                <Link to="/lessons" className="link">Lessons</Link> 
                <Link to="/login" className="link">Admin</Link>
                <Link to="/about" className="header-button">AboutMe</Link> 
            </div>
           </div> 
        </div>
    )
}

export default Header
