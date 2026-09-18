import React from 'react'
import './experience.css'

const experienceAreas = [
    {
        title: 'Product & Frontend',
        description: 'Designing interfaces that feel intuitive and useful.',
        skills: ['JavaScript (Angular, React)', 'Salesforce LWC', 'Figma']
    },
    {
        title: 'Backend & Systems',
        description: 'Building reliable services, APIs, and infrastructure.',
        skills: ['Java (Springboot)', 'C', 'C++', 'Python', 'SQL', 'GraphQL', 'REST']
    },
    {
        title: 'Data & Intelligence',
        description: 'Turning data and models into practical engineering solutions.',
        skills: ['Machine Learning Algorithms', 'OpenSearch AWS', 'OpenTofu/Terraform']
    }
]

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What I bring</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__top">
                    <p className="experience__eyebrow">Core strengths</p>
                    <h3>My focus is building useful software with a strong technical foundation.</h3>
                </div>

                <div className="experience__grid">
                    {experienceAreas.map((area) => (
                        <article key={area.title} className="experience__panel">
                            <h3>{area.title}</h3>
                            <p>{area.description}</p>
                            <div className="experience__list">
                                {area.skills.map((skill) => (
                                    <span key={skill} className="experience__tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience