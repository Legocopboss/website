import React from "react"
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Goodreads from './components/goodreads/Goodreads'
import Experience from './components/experience/Experience'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import { Notifications } from '@mantine/notifications'

const App = () => {
    return (
        <>
            <Notifications />
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Goodreads/>
            <Contacts/>
            <Footer/>
        </>
    )
}

export default App