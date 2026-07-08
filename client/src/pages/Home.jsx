import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='webpage'>
        <section className='home flex flex-col'>
            <p>◆ Full-Stack Developer & Graphic Designer</p>
            <h1>Raymond Thomas</h1>
            <h3>I'm a full-stack web developer, graphic designer, and educator passionate about creating digital experiences. 
                With a Bachelor's Degree in Advertising and Graphic Design and a Full-Stack Web Development Certification, 
                I combine creativity and technology while continuously learning and growing.</h3>
        </section>
        <section className='skill-container flex justify-between'>
            <div className='skill'>
                <p>TECHNICAL SKILLS:</p>
                <h2>HTML • CSS • Javascript • React • Express • MongoDB • MERN</h2>
            </div>
            <div className='skill'>
                <p>INTERPERSONAL SKILLS :</p>
                <h2>Project Management • Attention to Detail • Team Collaboration • Leadership • Task Management</h2>
            </div>
            <div className='skill'>
                <p>DESIGN SOFTWARE:</p>
                <h2>Photoshop • Illustrator • InDesign • Figma • Premiere Pro • After Effects • Procreate</h2>
            </div>
        </section>
    </div>
  );
}
