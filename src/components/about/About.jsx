import React from 'react'
import './About.css'
import myImage from '../../assets/teaching.JPG'
import {GiGraduateCap} from 'react-icons/gi'
import { TfiBriefcase } from 'react-icons/tfi'
import { TfiWorld } from 'react-icons/tfi'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={myImage} alt="Me, teaching a small K-8 STEM class." />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">

                    <article className="about__card">
                        <GiGraduateCap className='about__icon'/>
                        <h5>Education</h5>
                        <small>B.S. Computer Science with Minor in Intelligent Systems Engineering(UG) <br/><i>Indiana University Bloomington</i></small>
                    </article>
                    <article className='about__card'>
                        <TfiBriefcase className='about__icon'/>
                        <h5>Corporate Employment</h5>
                        <small>Software Engineer @ Statefarm</small>
                    </article>

                    <article className='about__card'>
                        <TfiWorld className='about__icon'/>
                        <h5>Domains</h5>
                        <small>
                            <ul>
                                <li>Backend Development</li>
                                <li>Machine Learning</li>
                                <li>Hardware Engineering</li>
                            </ul>
                        </small>
                    </article>
                </div>
                <p>
                    I am a Computer Science Undergraduate at Indiana University Bloomington.
                    I graduated Heartland Community College with my Associates in Computer Science the same year I graduated High School.
                    Coming in with two years under my belt, I am able to graduate university as a sophmore. 
                    With a strong academic foundation in software engineering and intelligent systems engineering, as well as my experiences on campus and in a corporate setting,
                    I am eager to contribute to innovateive projects and learn more from experienced professionals. I am a quick learner who is always ready for a challenge.
                </p>
            </div>
        </div>
    </section>
    )
}

export default About