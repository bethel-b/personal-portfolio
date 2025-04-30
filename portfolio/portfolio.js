// Get all sections and nav links
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

// Optional: If you want to add click events to navigate
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // If the link is the GitHub link, allow default behavior
        if (link.href.includes("https://github.com/bethel-b")) {
            return; // Allow default behavior (navigation)
        }

        // If not the GitHub link, prevent default and handle scroll
        event.preventDefault(); 
        const target = document.querySelector(link.getAttribute('href')); // Get target section
        target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    });
});
// Event listener for scrolling
window.addEventListener('scroll', changeActiveLink);
// Smooth scrolling to sections
document.querySelectorAll('.nav-link').forEach(link => {
   link.addEventListener('click', function (e) {
       e.preventDefault();
       const targetId = this.getAttribute('href');
       document.querySelector(targetId).scrollIntoView({
           behavior: 'smooth'
       });
   });
});

// Button click event to show a welcome message
document.querySelector('button').addEventListener('click', function() {
   alert('Thank you for joining me! Feel free to connect on social media!');
});




// Project descriptions toggle
const projectTitles = document.querySelectorAll('.project-info h3');

projectTitles.forEach(title => {
    title.addEventListener('click', function() {
        const description = this.nextElementSibling;  // Get the corresponding description
        description.classList.toggle('active');       // Toggle the active class
    });
});

// Highlight active project
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseenter', function() {
        this.classList.add('highlight');
    });

    project.addEventListener('mouseleave', function() {
        this.classList.remove('highlight');
    });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display success message
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    
    // Clear the form
    this.reset();
});

// Add event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form inputs (basic validation)
    if (name ==! '' || email ==! '' || message ==! '') {
        alert('Please fill in all fields'); // Alert if validation fails
        return; // Stop the form submission
    }

    // Display success message
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    formMessage.style.color = 'green'; // Success message color
    
    // Clear the form fields
    document.getElementById('contact-form').reset();
});