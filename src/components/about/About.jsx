import React from 'react'
import './About.css'
import myImage from '../../assets/teaching.JPG'
import { GiGraduateCap } from 'react-icons/gi'
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
                    <div className="about__intro">
                        <p className="about__eyebrow">Software engineer • systems thinker • lifelong learner</p>
                        <h3>I build software that makes complex systems easier to understand and use.</h3>
                    </div>

                    <div className="about__cards">
                        <article className="about__card">
                            <GiGraduateCap className='about__icon'/>
                            <h5>Education</h5>
                            <small>B.S. in Computer Science <br /> <i>Indiana University Bloomington</i></small>
                        </article>
                        <article className='about__card'>
                            <TfiBriefcase className='about__icon'/>
                            <h5>Experience</h5>
                            <small>Software Engineer at State Farm</small>
                        </article>

                        <article className='about__card'>
                            <TfiWorld className='about__icon'/>
                            <h5>Focus</h5>
                            <small>
                                Backend development <br />
                                Search systems <br />
                                Intelligent systems
                            </small>
                        </article>
                    </div>

                    <div className="about__story">
                        <p>
                            I’m currently a Software Engineer in Enterprise Technology at State Farm, where I work on Project Juniper. Designing and supporting the GraphQL Framework, and the Search API services built on AWS OpenSearch.
                        </p>
                        <p>
                            I graduated from Indiana University with a B.S. in Computer Science and a minor in Intelligent Systems Engineering, and I’ve spent my academic and professional journey building a strong foundation in software engineering, systems thinking, and problem solving.
                        </p>
                    </div>

                    <div className="about__tags">
                        <span>Backend Development</span>
                        <span>Machine Learning</span>
                        <span>Systems Design</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About