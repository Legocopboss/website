import React from "react"
import CV from '../../assets/missing_texture.png'

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contacts" className="btn btn-primary">Contact Me</a>
        </div>
    )
}

export default CTA