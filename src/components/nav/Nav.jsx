import React, { useEffect, useState } from "react"
import './nav.css'
import { AiOutlineHome } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { FaLaptopCode } from "react-icons/fa"
import { BiMessageSquareDetail } from "react-icons/bi"
import { FaBook } from "react-icons/fa"

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
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

    return (
        <nav>
            <a href="#home" onClick={(e) => handleClick(e, 'home')} className={activeNav === '#' ? 'active': ''}><AiOutlineHome/></a>
            <a href="#about" onClick={(e) => handleClick(e, 'about')} className={activeNav === '#about' ? 'active': ''}><BiUser/></a>
            <a href="#experience" onClick={(e) => handleClick(e, 'experience')} className={activeNav === '#experience' ? 'active': ''}><FaLaptopCode/></a>
            <a href="#goodreads" onClick={(e) => handleClick(e, 'goodreads')} className={activeNav === '#goodreads' ? 'active': ''}><FaBook/></a>
            <a href="#contacts" onClick={(e) => handleClick(e, 'contacts')} className={activeNav === '#contacts' ? 'active': ''}><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default Nav