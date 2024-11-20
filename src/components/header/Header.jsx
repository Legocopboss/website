import React from "react"
import './header.css'
import CTA from './CTA'
import me from '../../assets/missing_texture.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header id="home">
            <div className="container header__container">
                <h5>Hello, My name is</h5>
                <h1>Braden Pool</h1>
                <h5 className="text-light">Computer Science Undergrad at IU<br/>SWE Intern @ State Farm</h5>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={me} alt='me'/>
                </div>

                <a href="#contacts" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header