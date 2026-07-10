import React from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import resume from '../assets/RaymondThomas_Resume.png'

export default function Home() {
  return (
    <div className='webpage'>
        <Navbar/>
        <section id='intro' className='intro-section flex flex-col'>
            <p>◆ Full-Stack Developer & Graphic Designer</p>
            <h1>Raymond Thomas</h1>
            <h3>I'm a full-stack web developer, graphic designer, and educator passionate about creating digital experiences. 
                With a Bachelor's Degree in Advertising and Graphic Design and a Full-Stack Web Development Certification, 
                I combine creativity and technology while continuously learning and growing.</h3>
        </section>
        <section id='skills' className='skill-section flex justify-between'>
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
        <section id='projects' className='projects-section'>
            <h2>Projects:</h2>
            <div className='projects-container flex flex-wrap justify-between'>
                <div className='project flex flex-col'>
                    <div className='project-header'>
                        <p>◆ Work In Progress</p>
                    </div>
                    <div className='project-details'>
                        <h3>The Character Collector</h3>
                        <p>A full-stack application dedicated to creating custom character
                            sheets for Dungeons and Dragons. Users will be able to create, 
                            share, and use their character sheets with endless customization.
                        </p>
                    </div>
                    <div className='project-software flex flex-wrap gap-2'>
                        <small>React</small>
                        <small>Tailwind</small>
                        <small>Express</small>
                        <small>MongoDB</small>
                    </div>
                    <div className='project-btns flex justify-between'>
                        {/* <a href="" type='button'>Deployed App ➜</a> */}
                        <a href="https://github.com/raythomass/character-sheet" type='button'>Github ➜</a>
                    </div>
                </div>
                <div className='project flex flex-col'>
                    <div className='project-header'>
                        <p>◆ Project 1</p>
                    </div>
                    <div className='project-details'>
                        <h3>StreamPlay+</h3>
                        <p>A frontend focused streaming platform application, built using 
                            React and TMDB API. Features movies and trending shows, each with their own page showcasing
                            various details, cast and crew, seasons, and more.</p>
                    </div>
                    <div className='project-software flex gap-2'>
                        <small>React</small>
                        <small>Node</small>
                    </div>
                    <div className='project-btns flex justify-between'>
                        <a href="https://streaming-app-v2.netlify.app/" type='button'>Deployed App ➜</a>
                        <a href="https://github.com/raythomass/streaming-app-v2" type='button'>Github ➜</a>
                    </div>
                </div>
                <div className='project flex flex-col'>
                    <div className='project-header'>
                        <p>◆ Project 2</p>
                    </div>
                    <div className='project-details'>
                        <h3>Budget Tracker</h3>
                        <p>A full-stack app that lets users track their income and expenses.
                            Powered by MongoDB and Chart.JS, this budget tracker gives users
                            a deatiled breakdown of their finances.
                        </p>
                    </div>
                    <div className='project-software flex flex-wrap gap-2'>
                        <small>React</small>
                        <small>MongoDB</small>
                        <small>Express</small>
                        <small>Chart.JS</small>
                    </div>
                    <div className='project-btns flex justify-between'>
                        {/* <a href="" type='button'>Deployed App ➜</a> */}
                        <a href="https://github.com/raythomass/budget-tracker" type='button'>Github ➜</a>
                    </div>
                </div>
                <div className='project flex flex-col'>
                    <div className='project-header'>
                        <p>◆ Project 3</p>
                    </div>
                    <div className='project-details'>
                        <h3>Football Database</h3>
                        <p>A databasing application designed to allow users to find their
                            favorite team, view player stats, and buy tickets to upcoming games
                            using Ticketmaster API.
                        </p>
                    </div>
                    <div className='project-software flex flex-wrap gap-2'>
                        <small>Javascript</small>
                        <small>API</small>
                    </div>
                    <div className='project-btns flex justify-between'>
                        <a href="https://raythomass.github.io/project-one-team4/" type='button'>Deployed App ➜</a>
                        <a href="https://github.com/raythomass/project-one-team4" type='button'>Github ➜</a>
                    </div>
                </div>
            </div>
        </section>
        <section id='contact' className='contact-section'>
            <h2>Contact Me:</h2>
            <div className='contact-link-container flex gap-6'>
                <a className='contact-link flex gap-2 justify-center items-center' href="https://github.com/raythomass" type='button'>
                    <FontAwesomeIcon icon={faGithub} />GitHub
                </a>
                <a className='contact-link flex gap-2 justify-center items-center' href="https://www.linkedin.com/in/ray-thomas-6b5510163/" type='button'>
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                <a className='contact-link flex gap-2 justify-center items-center' href="mailto:rthomas.developer@gmail.com" type='button'>
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                </a>
            </div>
        </section>
        <section id='resume' className='resume-section'>
            <h2>View my Resume:</h2>
            <a href={resume} download>
                <p>Download Resume ➜</p>
            </a>
        </section>
    </div>
  );
}
