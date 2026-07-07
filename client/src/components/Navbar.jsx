import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar flex justify-center gap-10'>
        <Link className='nav-link' to={'/'}>Home</Link>
        <Link className='nav-link' to={'/about'}>About</Link>
        <Link className='nav-link' to={'/projects'}>Projects</Link>
        <Link className='nav-link' to={'/contact'}>Contact</Link>
        <Link className='nav-link' to={'/resume'}>Resume</Link>
    </div>
  );
}
