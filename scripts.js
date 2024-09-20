function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
    });
}
