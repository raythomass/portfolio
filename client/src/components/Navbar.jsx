import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar flex justify-center gap-10'>
        <a className='nav-link' href="#home">Home</a>
        <a className='nav-link' href="#projects">Projects</a>
        <a className='nav-link' href="#contact">Contact</a>
        <a className='nav-link' href="#resume">Resume</a>
    </div>
  );
}
