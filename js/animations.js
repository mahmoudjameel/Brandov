// ==========================================
// BRANDOV - Animations JavaScript
// Scroll-triggered animations & effects
// ==========================================

/**
 * Intersection Observer for scroll animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger counter animation if it's a stat number
                if (entry.target.querySelector('.stat-number')) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(startCounter);
                }
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Counter animation for statistics
 */
function startCounter(element) {
    // Prevent multiple animations
    if (element.classList.contains('counted')) return;
    element.classList.add('counted');
    
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            element.classList.add('counting');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
            element.classList.remove('counting');
        }
    };

    updateCounter();
}

/**
 * Smooth scroll progress bar
 */
function initScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

/**
 * Parallax effect for hero section
 */
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const parallaxSpeed = 0.5;
            heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
}

/**
 * Add floating animation to hero elements
 */
function initFloatingElements() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle) {
        heroTitle.classList.add('hover-float');
    }
}

/**
 * Initialize all animations
 */
function initAnimations() {
    initScrollAnimations();
    initScrollProgress();
    // initParallax(); // Uncomment if you want parallax effect
    initFloatingElements();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}
