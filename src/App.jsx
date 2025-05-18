import React from "react"
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import LinkedinEmbed from './components/linkedin/Linkedin'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <LinkedinEmbed postUrl="https://www.linkedin.com/posts/braden-pool_enterprisetechnology-activity-7225138310426345472-sb-I"/>
            <Contacts/>
            <Footer/>
        </>
    )
}

export default App