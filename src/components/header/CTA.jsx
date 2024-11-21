import React from "react"
import CV from '../../assets/"Braden Pool Resume_CV Nov 2024.pdf"'

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contacts" className="btn btn-primary">Contact Me</a>
        </div>
    )
}

export default CTA