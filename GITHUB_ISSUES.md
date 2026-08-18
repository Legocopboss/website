# GitHub Issues to Create

## Medium Impact Issues

### Issue 1: Add Scroll-to-Top Button
**Title:** `feat: Add floating scroll-to-top button`
**Labels:** enhancement, ux
**Description:**
```
## Description
Add a floating button that appears when user scrolls down the page and smoothly scrolls back to the top when clicked.

## Requirements
- Button appears after scrolling down ~500px
- Smooth fade-in/fade-out animation
- Positioned in bottom-right corner (non-intrusive)
- Keyboard accessible (Tab navigation, Enter to activate)
- Smooth scroll behavior back to top

## Acceptance Criteria
- [ ] Button is hidden on page load
- [ ] Button fades in smoothly after scroll threshold
- [ ] Button fades out when at top of page
- [ ] Click/Enter scrolls smoothly to top
- [ ] Accessible via keyboard navigation
- [ ] Responsive on mobile (adjust position if needed)
```

### Issue 2: Add Projects Portfolio Section
**Title:** `feat: Create projects portfolio showcase section`
**Labels:** enhancement, feature, ui
**Description:**
```
## Description
Add a new section to showcase projects and work samples with interactive cards.

## Requirements
- New "Projects" section with project cards
- Each card displays:
  - Project thumbnail/image
  - Project title
  - Brief description
  - Technology tags (React, Python, etc.)
  - GitHub repository link
  - Live demo link (if available)
- Grid layout (responsive: 3 cols desktop, 2 cols tablet, 1 col mobile)
- Hover effects (scale, shadow)
- Click to expand for detailed information
- Add projects section to navigation menu

## Acceptance Criteria
- [ ] New Projects component created
- [ ] Projects data structure defined
- [ ] Grid layout is responsive
- [ ] Hover animations working smoothly
- [ ] All links functional and open in new tabs
- [ ] Mobile responsive at all breakpoints
- [ ] Integrated into main App and navigation

## Related Files
- src/components/projects/Projects.jsx (new)
- src/components/projects/projects.css (new)
```

### Issue 3: Skills Visualization Enhancement
**Title:** `feat: Add interactive skills visualization with progress bars`
**Labels:** enhancement, ui, ux
**Description:**
```
## Description
Enhance the Experience/Skills section with animated progress bars and interactive skill categories.

## Requirements
- Replace static skill text with visual progress bars
- Show proficiency levels (Beginner, Intermediate, Experienced as percentages)
- Add skill category tabs to filter/reorganize
- Hover tooltips showing skill details
- Animated bars that fill when scrolling into view
- Organize skills by: Frontend, Backend, Other (ML, Hardware, etc.)

## Acceptance Criteria
- [ ] Progress bars display correctly
- [ ] Category tabs filter skills properly
- [ ] Animations trigger on scroll into view
- [ ] Tooltips appear on hover
- [ ] Mobile responsive
- [ ] Accessibility maintained (alt text for visuals)
- [ ] Smooth animations (respects prefers-reduced-motion)

## Related Files
- src/components/experience/Experience.jsx (modify)
- src/components/experience/experience.css (modify)
```

### Issue 4: Timeline Animation for Experience
**Title:** `feat: Convert experience to interactive timeline with scroll animations`
**Labels:** enhancement, ui, animation
**Description:**
```
## Description
Redesign the Experience section as an interactive timeline with scroll animations and visual hierarchy.

## Requirements
- Convert grid layout to timeline format
- Scroll reveal animations for timeline items
- Highlight active timeline item as user scrolls
- Visual connection line between items
- Responsive design (vertical on mobile, horizontal consideration for desktop)
- Smooth transitions and animations

## Acceptance Criteria
- [ ] Timeline layout implemented
- [ ] Scroll animations working
- [ ] Active item highlighting works
- [ ] Responsive on all breakpoints
- [ ] Animations smooth and performant
- [ ] Accessible navigation
- [ ] No layout shift on load

## Related Files
- src/components/experience/Experience.jsx (modify)
- src/components/experience/experience.css (modify)
```

---

## Nice-to-Have Issues

### Issue 5: Dark/Light Mode Toggle
**Title:** `feat: Add dark/light theme toggle`
**Labels:** enhancement, ux, accessibility
**Description:**
```
## Description
Implement theme toggle functionality allowing users to switch between dark and light modes with preference persistence.

## Requirements
- Theme toggle button in header/nav
- Store preference in localStorage
- Smooth color transition between themes
- Detect system preference on first visit
- Apply to all color variables
- Persists across sessions

## Acceptance Criteria
- [ ] Toggle button visible and functional
- [ ] localStorage saves preference
- [ ] System preference detection works
- [ ] Smooth transitions between themes
- [ ] All components respect theme
- [ ] No layout shifts on theme change
```

### Issue 6: Section Scroll Animations
**Title:** `feat: Add scroll reveal animations for all sections`
**Labels:** enhancement, animation, ux
**Description:**
```
## Description
Add fade-in and slide animations to sections as they come into view during scrolling.

## Requirements
- Fade-in effects for sections
- Slide-in animations (directional)
- Scale animations on key content
- Use Intersection Observer API
- Customizable animation delays
- Respect prefers-reduced-motion preference

## Acceptance Criteria
- [ ] Animations trigger on scroll
- [ ] Smooth and performant
- [ ] Respects accessibility preferences
- [ ] Cross-browser compatible
- [ ] No jank or layout issues

## Related Files
- May affect multiple component CSS files
```

### Issue 7: Blog/Articles Section
**Title:** `feat: Add blog/articles showcase section`
**Labels:** enhancement, feature, content
**Description:**
```
## Description
Display tech articles and blog posts (linked to external platforms or self-hosted).

## Requirements
- New Articles/Blog section
- Display article previews with:
  - Title
  - Thumbnail/cover image
  - Date published
  - Reading time estimate
  - Category tags
  - Brief description
- Links to full articles
- Responsive grid layout

## Acceptance Criteria
- [ ] Articles section created
- [ ] Data structure defined
- [ ] Grid layout responsive
- [ ] Links functional
- [ ] Styling consistent with site
```

### Issue 8: Enhanced Goodreads Integration
**Title:** `feat: Enhance Goodreads section with dynamic data`
**Labels:** enhancement, feature, integration
**Description:**
```
## Description
Improve the Goodreads section with real-time data from Goodreads API.

## Requirements
- Display currently reading book with cover
- Show latest book rating/review
- Display book cover images
- Link to full Goodreads profile
- Reading stats (books this year, average rating)
- Auto-update from Goodreads API

## Acceptance Criteria
- [ ] API integration working
- [ ] Data displays correctly
- [ ] Images load and resize properly
- [ ] Error handling for API failures
- [ ] Refresh interval configured
- [ ] Mobile responsive
```

### Issue 9: Social Proof/Stats Section
**Title:** `feat: Add GitHub stats and social proof section`
**Labels:** enhancement, feature, stats
**Description:**
```
## Description
Display GitHub statistics and social proof metrics to showcase activity and community engagement.

## Requirements
- GitHub stats integration
- Display repositories count
- Stars received
- Followers count
- Recent activity or contributions
- Use GitHub API
- Show contribution activity

## Acceptance Criteria
- [ ] GitHub API integration complete
- [ ] Stats display accurately
- [ ] Error handling for API
- [ ] Responsive layout
- [ ] Cache data appropriately
```

### Issue 10: Newsletter Signup
**Title:** `feat: Add newsletter signup form`
**Labels:** enhancement, feature, marketing
**Description:**
```
## Description
Add optional email newsletter signup for site visitors.

## Requirements
- Email signup form
- Integration with email service (Mailchimp, ConvertKit, etc.)
- Success/error handling
- Privacy statement
- Optional: Modal or footer placement
- Input validation

## Acceptance Criteria
- [ ] Form validation working
- [ ] Email service integrated
- [ ] Success messages display
- [ ] Error handling in place
- [ ] Privacy notice visible
- [ ] Responsive design
```

### Issue 11: Keyboard Navigation & Accessibility
**Title:** `refactor: Improve keyboard navigation and accessibility`
**Labels:** accessibility, refactor, bug
**Description:**
```
## Description
Enhance keyboard navigation and screen reader support throughout the site.

## Requirements
- Full keyboard navigation support
- Skip to main content link
- Improved ARIA labels on all interactive elements
- Clear focus indicators
- Screen reader optimization
- Test with accessibility tools (WAVE, Axe DevTools)

## Acceptance Criteria
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Skip link functional
- [ ] WAVE test passes
- [ ] Screen reader tested
```

### Issue 12: Performance Optimizations
**Title:** `perf: Optimize performance and SEO`
**Labels:** performance, optimization
**Description:**
```
## Description
Optimize site performance and improve SEO metrics.

## Requirements
- Image lazy loading
- React code splitting
- CSS/JS minification
- SEO metadata (Open Graph, meta tags)
- Sitemap and robots.txt
- Google Analytics integration
- Lighthouse audit passing

## Acceptance Criteria
- [ ] Lighthouse score 90+
- [ ] Images lazy loading
- [ ] Code splitting implemented
- [ ] SEO meta tags added
- [ ] Analytics tracking
- [ ] Sitemap generated
```

### Issue 13: Search Functionality
**Title:** `feat: Add site search functionality`
**Labels:** enhancement, feature, ux
**Description:**
```
## Description
Implement search across projects and blog content.

## Requirements
- Search input component
- Real-time search results
- Filter by category/technology
- Fuzzy matching
- Highlighting of matches
- No server required (client-side)

## Acceptance Criteria
- [ ] Search input working
- [ ] Results display in real-time
- [ ] Filtering functional
- [ ] Fuzzy search working
- [ ] Highlighting visible
- [ ] Mobile responsive
```

### Issue 14: Contact Form Enhancements
**Title:** `feat: Add anti-spam and enhanced features to contact form`
**Labels:** enhancement, feature, security
**Description:**
```
## Description
Add spam prevention and additional features to the contact form.

## Requirements
- reCAPTCHA v3 integration
- Rate limiting on submissions
- Email notifications to owner
- File attachment support
- Submission archival (optional)

## Acceptance Criteria
- [ ] reCAPTCHA integrated
- [ ] Rate limiting working
- [ ] Email notifications sent
- [ ] File uploads working
- [ ] Security verified
- [ ] Error handling complete
```
