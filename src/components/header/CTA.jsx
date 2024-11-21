import React from "react"
import CV from '../../assets/Braden_Pool_Resume_CV_Nov_2024.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contacts" className="btn btn-primary">Contact Me</a>
        </div>
    )
}

export default CTA