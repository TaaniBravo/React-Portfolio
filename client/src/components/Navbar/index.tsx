import * as React from "react";
import "./style.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <a className='navbar-brand logo__tag' href='/'>
        <img src={logo} alt='Logo' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className='nav-link'>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link '>
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link'
              target='_blank'
              rel='noreferrer'
              href='https://drive.google.com/file/d/1IDJtWQ1QEIBaTzkn8RIJay06EvorxNRG/view?usp=sharing'>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
