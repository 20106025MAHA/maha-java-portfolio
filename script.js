// Scroll-triggered Animation
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const viewportHeight = window.innerHeight;

    elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < viewportHeight * 0.85) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
});

// Run the animation on page load as well
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
        el.style.transitionDelay = `${Math.random() * 0.5}s`;
    });
});
