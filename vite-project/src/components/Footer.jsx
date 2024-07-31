import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer>

      <span className='copyright'>Copyright 2024</span>
      <span className='author'>Oofe Yang</span>


      <div className="footer-socials">
        <Link to='/'><i className='fab fa-facebook-f'></i></Link>
        <Link to='/'><i className='fab fa-youtube'></i></Link>
        <Link to='/'><i className='fab fa-twitter'></i></Link>
        <Link to='/'><i className='fab fa-instagram'></i></Link>

      </div>
    </footer>

  )
}

export default Footer