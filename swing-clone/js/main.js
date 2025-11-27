// ==========================================
// BRANDOV - Main JavaScript
// Core functionality and interactions
// ==========================================

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Header background on scroll
 */
function initHeaderScroll() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 26, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(10, 10, 26, 0.9)';
            header.style.boxShadow = 'none';
        }
    });
}

/**
 * Form validation and submission
 */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Validate
            if (!validateForm(formData)) {
                return;
            }

            // Show success message
            showMessage('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');

            // Reset form
            form.reset();
        });
    }
}

/**
 * Validate form data
 */
function validateForm(data) {
    // Check if all fields are filled
    for (let key in data) {
        if (!data[key].trim()) {
            showMessage('الرجاء ملء جميع الحقول', 'error');
            return false;
        }
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showMessage('الرجاء إدخال بريد إلكتروني صحيح', 'error');
        return false;
    }

    // Validate phone (Saudi format)
    const phoneRegex = /^(05|5)[0-9]{8}$/;
    if (!phoneRegex.test(data.phone.replace(/[\s-]/g, ''))) {
        showMessage('الرجاء إدخال رقم جوال صحيح', 'error');
        return false;
    }

    return true;
}

/**
 * Show message to user
 */
function showMessage(message, type) {
    // Remove any existing messages
    const existingMsg = document.querySelector('.form-message');
    if (existingMsg) {
        existingMsg.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;

    // Style the message
    messageDiv.style.cssText = `
        padding: 15px 20px;
        margin: 20px 0;
        border-radius: 10px;
        text-align: center;
        font-weight: 600;
        animation: fadeIn 0.3s ease-out;
        background: ${type === 'success' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)'};
        border: 2px solid ${type === 'success' ? '#4CAF50' : '#F44336'};
        color: ${type === 'success' ? '#4CAF50' : '#F44336'};
    `;

    // Insert message
    const form = document.getElementById('contactForm');
    form.insertAdjacentElement('beforebegin', messageDiv);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

/**
 * Mobile menu toggle (for future use)
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    if (menuToggle && mainNav) {
        // Toggle menu on button click
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');

            // Prevent body scroll when menu is open
            if (mainNav.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        // Close menu when clicking on a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('active') &&
                !mainNav.contains(e.target) &&
                !menuToggle.contains(e.target)) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }
}

/**
 * Add active state to navigation on scroll
 */
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Lazy load images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

/**
 * Add loading animation on page load
 */
function initPageLoad() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

/**
 * Initialize all main functionality
 */
function init() {
    initSmoothScroll();
    initHeaderScroll();
    initContactForm();
    initMobileMenu();
    initActiveNavigation();
    initLazyLoading();
    initPageLoad();

    console.log('🚀 Brandov website loaded successfully!');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
