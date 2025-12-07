import React from "react"
import Resume from '../../assets/Braden Pool Resume Dec 2025.pdf'

const CTA = () => {
    return (
        <div className="cta">
            <a href={Resume} download className="btn">Download Resume</a>
            <a href="#contacts" className="btn btn-primary">Contact Me</a>
        </div>
    )
}

export default CTA