import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contacts = () => {

    const form = useRef()
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)

    // Initialize EmailJS on component mount
    React.useEffect(() => {
        // Replace with your actual Public Key from EmailJS dashboard
        emailjs.init('YOUR_PUBLIC_KEY_HERE')
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        // Validate form fields
        const name = form.current.name.value.trim()
        const email = form.current.email.value.trim()
        const message = form.current.message.value.trim()

        if (!name) {
            setError('Please enter your name')
            setLoading(false)
            return
        }

        if (!email) {
            setError('Please enter your email')
            setLoading(false)
            return
        }

        if (!message) {
            setError('Please enter a message')
            setLoading(false)
            return
        }

        // Send email using EmailJS
        emailjs
            .sendForm(
                'YOUR_SERVICE_ID_HERE',      // Replace with your Service ID
                'YOUR_TEMPLATE_ID_HERE',     // Replace with your Template ID
                form.current
            )
            .then(
                (result) => {
                    setSubmitted(true)
                    form.current.reset()
                    setLoading(false)
                    // Auto-hide success message after 5 seconds
                    setTimeout(() => {
                        setSubmitted(false)
                    }, 5000)
                },
                (error) => {
                    setError('Failed to send message. Please try again.')
                    setLoading(false)
                    console.error('EmailJS error:', error)
                }
            )
    }

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

                <form ref={form} onSubmit={handleSubmit}>
                    {submitted && (
                        <div className='form__message form__message--success'>
                            ✓ Message sent successfully! I'll get back to you soon.
                        </div>
                    )}
                    {error && (
                        <div className='form__message form__message--error'>
                            ✕ {error}
                        </div>
                    )}
                    
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Full Name" 
                        required 
                        disabled={loading}
                    />  
                    <input 
                        type="email" 
                        name='email' 
                        placeholder='Your Email' 
                        required
                        disabled={loading}
                    /> 
                    <textarea 
                        name="message" 
                        rows="7" 
                        placeholder='Your Message' 
                        required
                        disabled={loading}
                    ></textarea>
                    <button 
                        type="submit" 
                        className='btn btn-primary'
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contacts
