import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitterX } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#home" className='footer__logo'>Braden Pool</a>
            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
            </ul>

            <div className='footer__socials'>
                <a href="https://www.linkedin.com/in/braden-pool/"><BsLinkedin/></a>
                <a href="https://github.com/Legocopboss"><BsGithub/></a>
                <a href="https://twitter.com/_bradenpool"><BsTwitterX/></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Braden Pool 2024. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer