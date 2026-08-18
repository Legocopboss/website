import React, { useEffect, useState } from "react"
import './nav.css'
import { AiOutlineHome } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { FaLaptopCode } from "react-icons/fa"
import { BiMessageSquareDetail } from "react-icons/bi"
import { FaBook } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const ignoreObserverRef = React.useRef(false)

    useEffect(() => {
        // IDs we care about (must match the section ids in the page)
        const ids = ['home', 'about', 'experience', 'goodreads', 'contacts']
        const elements = ids.map(id => document.getElementById(id)).filter(Boolean)

        if (!elements.length) return

        const observer = new IntersectionObserver((entries) => {
            if (ignoreObserverRef.current) return;

            // pick the entry with the highest intersectionRatio
            let best = null;
            entries.forEach(entry => {
                if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
            });

            if (best && best.isIntersecting) {
                setActiveNav(`#${best.target.id}`);
            }
            }, {
            threshold: [0.25, 0.5, 0.75],
            rootMargin: '-30% 0px -30% 0px'
        });

        elements.forEach(el => observer.observe(el))

        // Fallback: also update active nav based on which section's midpoint
        // is nearest the viewport center. This helps when sections are short
        // or observer entries are ambiguous.
        let ticking = false
        const onScroll = () => {
            if (ignoreObserverRef.current) return
            let bestId = null
            let bestDistance = Infinity
            ids.forEach(id => {
                const el = document.getElementById(id)
                if (!el) return
                const rect = el.getBoundingClientRect()
                const midpoint = rect.top + rect.height / 2
                const distance = Math.abs((window.innerHeight / 2) - midpoint)
                if (distance < bestDistance) {
                    bestDistance = distance
                    bestId = id
                }
            })

            if (bestId) setActiveNav(`#${bestId}`)
        }

        const scrollHandler = () => {
            if (!ticking) {
                ticking = true
                window.requestAnimationFrame(() => {
                    onScroll()
                    ticking = false
                })
            }
        }

        window.addEventListener('scroll', scrollHandler, { passive: true })
        // run once to set initial active state
        onScroll()

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const handleClick = (e, id) => {
        e.preventDefault()
        const el = document.getElementById(id)
        if (!el) return

        // Close mobile menu when navigation link is clicked
        setIsMobileMenuOpen(false)

        // Prevent observer from changing active state while we smooth-scroll
        ignoreObserverRef.current = true
        setActiveNav(`#${id}`)

        // Compute a target that centers the section roughly in the viewport,
        // but offset slightly above center so heading isn't dead-center.
        const rect = el.getBoundingClientRect()
        const currentY = window.pageYOffset
        const elementTop = rect.top + currentY
        const offset = Math.max(0, (window.innerHeight / 2) - (rect.height / 2) - 40)
        const targetY = Math.max(0, elementTop - offset)

        window.scrollTo({ top: targetY, behavior: 'smooth' })

        // Re-enable observer after scroll settles. Make timeout proportional to distance.
        const distance = Math.abs(window.pageYOffset - targetY)
        const timeout = Math.min(1200, Math.max(400, distance * 0.5))
        window.setTimeout(() => {
            ignoreObserverRef.current = false
        }, timeout)
    }

    const navLinks = [
        { id: 'home', label: 'Home', icon: <AiOutlineHome /> },
        { id: 'about', label: 'About', icon: <BiUser /> },
        { id: 'experience', label: 'Experience', icon: <FaLaptopCode /> },
        { id: 'goodreads', label: 'Goodreads', icon: <FaBook /> },
        { id: 'contacts', label: 'Contact', icon: <BiMessageSquareDetail /> },
    ]

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="nav__desktop">
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        onClick={(e) => handleClick(e, link.id)}
                        className={activeNav === `#${link.id}` ? 'active' : ''}
                        title={link.label}
                    >
                        {link.icon}
                    </a>
                ))}
            </nav>

            {/* Mobile Navigation */}
            <div className="nav__mobile">
                <button
                    className="nav__hamburger"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <MdClose /> : <GiHamburgerMenu />}
                </button>

                {isMobileMenuOpen && (
                    <div className="nav__mobile-menu">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => handleClick(e, link.id)}
                                className={activeNav === `#${link.id}` ? 'active' : ''}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Nav
