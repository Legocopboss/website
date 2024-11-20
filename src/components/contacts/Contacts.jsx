import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react'

const Contacts = () => {

    const form = useRef()

    return (
        <section id="contacts">
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <BsLinkedin className='contact__option-icon'/>
                        <h4>LinkedIn</h4>
                        <a href ='https://www.linkedin.com/in/braden-pool/'>Connect on LinkedIn</a>
                    </article>

                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <a href="mailto:07_funnel_glucose@icloud.com">Reach out via Email</a>
                    </article>
                </div>

                <form ref={form}>
                    <input type="text" name="name" placeholder="Your Full Name" required />  {/* client side validation */}
                    <input type="email" name='email' placeholder='Your Email' required /> 
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts