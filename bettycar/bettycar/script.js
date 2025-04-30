document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    logo.classList.add('animate-rotate'); // Add this class to trigger the animation
});

document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial');
    const nextBtn = document.querySelector('.next-btn');
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');

    // Scroll Event Listener for Navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initialize Testimonials
    let currentTestimonialIndex = 0;
    testimonials[currentTestimonialIndex].classList.add('active');

    nextBtn.addEventListener('click', () => {
        testimonials[currentTestimonialIndex].classList.remove('active');
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        testimonials[currentTestimonialIndex].classList.add('active');
    });

    // Highlight active navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Function to change active nav link
function changeActiveLink() {
    let scrollPos = window.scrollY; // Get current scroll position

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if current section is in viewport
        if (scrollPos >= sectionTop - sectionHeight / 2 && scrollPos < sectionTop + sectionHeight / 2) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
            });
            navLinks[index].classList.add('active'); // Add active class to the current link
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', changeActiveLink);

// Smooth scrolling to sections
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        const targetId = link.getAttribute('href'); // Get target section
        const target = document.querySelector(targetId);
        
        // Smooth scroll to section
        target.scrollIntoView({ behavior: 'smooth' });
    });
});