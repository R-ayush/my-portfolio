// ===================================
// DOM Elements
// ===================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const scrollTopBtn = document.getElementById('scrollTop');
const header = document.getElementById('header');
const modal = document.getElementById('successModal');
const modalClose = document.getElementById('modalClose');

// ===================================
// Mobile Navigation Toggle
// ===================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===================================
// Dark Mode Toggle
// ===================================
// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Update icon
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Header Scroll Effect
// ===================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// Scroll to Top Button
// ===================================
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Scroll Animations
// ===================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');

            // Animate progress bars when skills section is visible
            if (entry.target.classList.contains('skill-card')) {
                const progressBar = entry.target.querySelector('.progress-fill');
                const progress = progressBar.getAttribute('data-progress');
                setTimeout(() => {
                    progressBar.style.width = progress + '%';
                }, 200);
            }
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
const animatedElements = document.querySelectorAll('[data-animate]');
animatedElements.forEach(el => observer.observe(el));

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===================================
// Form Validation & Submission
// ===================================
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Real-time validation
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
messageInput.addEventListener('blur', validateMessage);

function validateName() {
    const name = nameInput.value.trim();

    if (name === '') {
        nameError.textContent = 'Name is required';
        nameInput.style.borderColor = '#ef4444';
        return false;
    } else if (name.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameInput.style.borderColor = '#ef4444';
        return false;
    } else {
        nameError.textContent = '';
        nameInput.style.borderColor = '#10b981';
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        emailError.textContent = 'Email is required';
        emailInput.style.borderColor = '#ef4444';
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address';
        emailInput.style.borderColor = '#ef4444';
        return false;
    } else {
        emailError.textContent = '';
        emailInput.style.borderColor = '#10b981';
        return true;
    }
}

function validateMessage() {
    const message = messageInput.value.trim();

    if (message === '') {
        messageError.textContent = 'Message is required';
        messageInput.style.borderColor = '#ef4444';
        return false;
    } else if (message.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        messageInput.style.borderColor = '#ef4444';
        return false;
    } else {
        messageError.textContent = '';
        messageInput.style.borderColor = '#10b981';
        return true;
    }
}

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        // Show success modal
        modal.classList.add('active');

        // Reset form
        contactForm.reset();
        nameInput.style.borderColor = '';
        emailInput.style.borderColor = '';
        messageInput.style.borderColor = '';

        // Store submission data (in real app, this would be sent to a server)
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
            timestamp: new Date().toISOString()
        };

        console.log('Form submitted:', formData);
    }
});

// Close modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

// ===================================
// Parallax Effect for Home Section
// ===================================
const homeBackground = document.querySelector('.home-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (homeBackground && scrolled < window.innerHeight) {
        homeBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// ===================================
// Dynamic Year in Footer
// ===================================
const copyrightYear = document.querySelector('.copyright');
if (copyrightYear) {
    const currentYear = new Date().getFullYear();
    copyrightYear.innerHTML = `&copy; ${currentYear} Ayush Singh. All rights reserved.`;
}

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial animations
    const homeContent = document.querySelector('.home-content');
    if (homeContent) {
        homeContent.style.animation = 'fadeInUp 1s ease';
    }
});

// ===================================
// Project Cards Enhancement
// ===================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add subtle interaction feedback
        const projectLink = card.querySelector('.project-link');
        if (projectLink) {
            projectLink.style.transform = 'translateX(5px)';
        }
    });

    card.addEventListener('mouseleave', () => {
        const projectLink = card.querySelector('.project-link');
        if (projectLink) {
            projectLink.style.transform = '';
        }
    });
});

// ===================================
// Skill Progress Animation on Scroll
// ===================================
const skillCards = document.querySelectorAll('.skill-card');
let skillsAnimated = false;

function animateSkills() {
    const skillsSection = document.getElementById('skills');
    const skillsSectionTop = skillsSection.offsetTop;
    const skillsSectionHeight = skillsSection.offsetHeight;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (scrollPosition > skillsSectionTop + 200 && !skillsAnimated) {
        skillCards.forEach((card, index) => {
            setTimeout(() => {
                const progressBar = card.querySelector('.progress-fill');
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
            }, index * 100);
        });
        skillsAnimated = true;
    }
}

window.addEventListener('scroll', animateSkills);

// ===================================
// Typing Effect for Home Title (Optional)
// ===================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const subtitle = document.querySelector('.home-subtitle');
//     if (subtitle) {
//         const originalText = subtitle.textContent;
//         typeWriter(subtitle, originalText, 80);
//     }
// });

// ===================================
// Performance Optimization
// ===================================
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===================================
// Accessibility Enhancements
// ===================================
// Add keyboard navigation for mobile menu
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburger.click();
    }
});

// Add focus trap for mobile menu when open
const focusableElements = navMenu.querySelectorAll('a, button');
const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

document.addEventListener('keydown', (e) => {
    if (!navMenu.classList.contains('active')) return;

    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    }
});

// ===================================
// Console Welcome Message
// ===================================
console.log('%c🌊 Welcome Ayush Singh! 🌊', 'color: #0891b2; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and Vanilla JavaScript', 'color: #06b6d4; font-size: 14px;');
console.log('%cInterested in the code? Check out the source! 🚀', 'color: #f59e0b; font-size: 14px;');

// ===================================
// Easter Egg: Konami Code
// ===================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        console.log('🎉 You found the secret! Keep surfing! 🏄‍♂️');
    }
});

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    updateActiveNavLink();

    // Add loaded class to body
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // ===================================
    // View More Projects Button
    // ===================================
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const hiddenProjects = document.querySelectorAll('.hidden-project');

    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            const isActive = viewMoreBtn.classList.contains('active');

            if (!isActive) {
                // Show hidden projects
                hiddenProjects.forEach((project, index) => {
                    setTimeout(() => {
                        project.classList.add('show');
                    }, index * 100);
                });
                viewMoreBtn.classList.add('active');
                viewMoreBtn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                // Hide projects
                hiddenProjects.forEach(project => {
                    project.classList.remove('show');
                });
                viewMoreBtn.classList.remove('active');
                viewMoreBtn.innerHTML = 'View More Projects <i class="fas fa-chevron-down"></i>';

                // Scroll back to projects section
                document.querySelector('.projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // ===================================
    // View More Certifications Button
    // ===================================
    const viewMoreCertsBtn = document.getElementById('viewMoreCertsBtn');
    const hiddenCerts = document.querySelectorAll('.hidden-cert');

    if (viewMoreCertsBtn) {
        viewMoreCertsBtn.addEventListener('click', () => {
            const isActive = viewMoreCertsBtn.classList.contains('active');

            if (!isActive) {
                // Show hidden certificates
                hiddenCerts.forEach((cert, index) => {
                    setTimeout(() => {
                        cert.classList.add('show');
                    }, index * 100);
                });
                viewMoreCertsBtn.classList.add('active');
                viewMoreCertsBtn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                // Hide certificates
                hiddenCerts.forEach(cert => {
                    cert.classList.remove('show');
                });
                viewMoreCertsBtn.classList.remove('active');
                viewMoreCertsBtn.innerHTML = 'View More Certifications <i class="fas fa-chevron-down"></i>';

                // Scroll back to certifications section
                document.querySelector('.certifications').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // ===================================
    // View More Training Button
    // ===================================
    const viewMoreTrainingBtn = document.getElementById('viewMoreTrainingBtn');
    const hiddenTrainings = document.querySelectorAll('.hidden-training');

    if (viewMoreTrainingBtn) {
        viewMoreTrainingBtn.addEventListener('click', () => {
            const isActive = viewMoreTrainingBtn.classList.contains('active');

            if (!isActive) {
                // Show hidden training cards
                hiddenTrainings.forEach((training, index) => {
                    setTimeout(() => {
                        training.classList.add('show');
                    }, index * 100);
                });
                viewMoreTrainingBtn.classList.add('active');
                viewMoreTrainingBtn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
            } else {
                // Hide training cards
                hiddenTrainings.forEach(training => {
                    training.classList.remove('show');
                });
                viewMoreTrainingBtn.classList.remove('active');
                viewMoreTrainingBtn.innerHTML = 'View More Training <i class="fas fa-chevron-down"></i>';

                // Scroll back to training section
                document.querySelector('.training-internships').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // ===================================
    // Training Modal
    // ===================================
    const trainingModal = document.getElementById('trainingModal');
    const trainingModalClose = document.getElementById('trainingModalClose');
    const trainingModalOverlay = document.querySelector('.training-modal-overlay');
    const trainingViewBtns = document.querySelectorAll('.training-view-btn');

    // Training data
    const trainingData = {
        training0: {
            logo: 'https://www.pcsglobal.in/assets/images/Logo%20Pcs%20global.jpg',
            company: 'PCS Global Pvt. Ltd.',
            position: 'Salesforce Master Training with Project-Based Internship',
            duration: 'Completed',
            description: 'Successfully completed Salesforce Master Training with a Project-Based Internship. Gained hands-on experience in Salesforce ecosystem, CRM concepts, and customized solutions.',
            skills: ['Salesforce', 'CRM', 'Cloud Computing'],
            certificate: './training/Salesforce Internship Certificate.png'
        },
        training_infosys: {
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
            company: 'Infosys Ltd.',
            position: 'Springboard 6.0 Intern',
            duration: 'Completed',
            description: 'Successfully completed the Springboard 6.0 digital learning program internship, building foundational skills and practical knowledge in emerging technologies.',
            skills: ['Springboard 6.0', 'Emerging Technologies'],
            certificate: './training/Infosys_springboard_6.0_Certificate.png'
        },
        training1: {
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFWRvSn4v44IViTDNNTxUTND4pfQUmOuqmA&s',
            company: 'The Smartbridge',
            position: 'Generative AI Intern',
            duration: 'Jan 2025 - Present',
            description: 'Successfully completed a virtual internship focused on Google Cloud Generative AI. Gained in-depth knowledge of Generative AI concepts and applied them to real-world challenges. This experience enhanced my technical skills and deepened my understanding of AI-powered solution development. It reinforced my passion for AI and cloud technologies, and strengthened my confidence in building innovative, future-ready applications.',
            skills: ['Generative AI', 'Python', 'Google Skill Boost'],
            certificate: './training/smartbridge-genai.png'
        },
        training2: {
            logo: 'https://www.united.ac.in/summertraining/images/logo.png',
            company: 'United Global Info Services Pvt. Ltd.',
            position: 'Generative AI using NLP',
            duration: 'Aug 2024 - Dec 2024',
            description: 'Successfully completed a summer training specializing in Generative AI and Natural Language Processing (NLP). During this training, I Contributed to the development of AI models, focusing on enhancing performance through advanced NLP techniques.Engaged in data analysis, model training, and evaluation, strengthening my understanding of machine learning processes.Collaborated with the team to improve AI solutions, refining model outputs for more accurate and efficient results.',
            skills: ['NLP', 'Generative AI', 'Python', 'Machine Learning'],
            certificate: './training/united-genai-nlp.jpg'
        },
        training3: {
            logo: 'https://www.softproindia.in/img/spi.png',
            company: 'Softpro India Computer Technologies Pvt. Ltd.',
            position: 'Web Development using PHP',
            duration: 'July 2022 - Aug 2022',
            description: 'Completed a 45-day summer training program in PHP development. Gained hands-on experience in building dynamic web applications using PHP and MySQL. Developed clean, maintainable, and reusable code following industry best practices. Collaborated with senior developers, receiving mentorship and feedback to strengthen technical skills and problem-solving capabilities',
            skills: ['HTML/CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL'],
            certificate: './training/softpro-webdev.jpg'
        },
        training4: {
            logo: 'https://ainsi.edunetworld.com/images/brand/logo.png',
            company: 'Edunet Foundation',
            position: 'AI Azure',
            duration: 'May 2025 - June 2025',
            description: 'Successfully completed a 4-week virtual internship on Artificial Intelligence with Microsoft Azure, conducted in collaboration with AICTE and implemented by Edunet Foundation. Gained hands-on experience with Azure AI services, building and deploying intelligent cloud-based solutions. Worked on real-world scenarios involving machine learning, natural language processing, and cloud integration. This industry-driven program enhanced my technical skills and deepened my understanding of AI and cloud technologies.',
            skills: ['Azure AI', 'Cloud Computing', 'Machine Learning'],
            certificate: './training/edunet-azure.png'
        },
        training5: {
            logo: 'https://connecting-dreams.org/wp-content/uploads/2021/01/cdf-logo-png.png',
            company: 'Connecting Dreams Foundation',
            position: 'Data Analytics & Power BI',
            duration: 'June 2024 - July 2024',
            description: 'Intensive training on data analytics and business intelligence using Power BI. Learned data visualization, dashboard creation, and data modeling. Built interactive reports and analytics solutions.',
            skills: ['Power BI', 'Data Analytics', 'Data Visualization', 'SQL'],
            certificate: './training/cdf-powerbi.png'
        },
        training6: {
            logo: 'https://ainsi.edunetworld.com/images/brand/logo.png',
            company: 'Edunet Foundation',
            position: 'AI Transformative Learning with TechSaksham',
            duration: 'Nov 2023 - Jan 2024',
            description: 'Completed a virtual internship under the TechSaksham program by Microsoft and SAP, in collaboration with Edunet Foundation. Worked on a practical project—Attendance Management System using Face Recognition—applying AI and machine learning techniques to solve real-world problems. This experience strengthened my technical foundation in AI and deepened my interest in driving innovation through technology.',
            skills: ['AI/ML', 'Machine Learning', 'Python', 'Open CV'],
            certificate: './training/edunet-techsaksham.png'
        }
    };

    // Open training modal
    trainingViewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const trainingId = btn.getAttribute('data-training');
            const training = trainingData[trainingId];

            if (training) {
                // Populate modal
                document.getElementById('trainingModalLogo').src = training.logo;
                document.getElementById('trainingModalCompany').textContent = training.company;
                document.getElementById('trainingModalPosition').textContent = training.position;
                document.getElementById('trainingModalDuration').textContent = training.duration;
                document.getElementById('trainingModalDescription').textContent = training.description;

                // Add skills
                const skillsContainer = document.getElementById('trainingModalSkills');
                skillsContainer.innerHTML = training.skills.map(skill =>
                    `<span class="skill-tag">${skill}</span>`
                ).join('');

                // Add certificate
                document.getElementById('trainingModalCertImage').src = training.certificate;

                // Show modal
                trainingModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close training modal
    const closeTrainingModal = () => {
        trainingModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (trainingModalClose) {
        trainingModalClose.addEventListener('click', closeTrainingModal);
    }

    if (trainingModalOverlay) {
        trainingModalOverlay.addEventListener('click', closeTrainingModal);
    }

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && trainingModal.classList.contains('active')) {
            closeTrainingModal();
        }
    });

    // ===================================
    // Certificate Modal
    // ===================================
    const certModal = document.getElementById('certModal');
    const certModalClose = document.getElementById('certModalClose');
    const certModalOverlay = document.querySelector('.cert-modal-overlay');
    const certModalImage = document.getElementById('certModalImage');
    const certViewBtns = document.querySelectorAll('.cert-view-btn');

    // Certificate images mapping (replace with your actual certificate images)
    const certificateImages = {
        cert1: './certificates/google-analytics.png',        // Google Analytics
        cert2: './certificates/nptel-ml.png',                // NPTEL Machine Learning
        cert3: './certificates/iirs-geodata.png',            // IIRS Geodata Processing
        cert4: './certificates/iirs-remote-sensing.png',     // IIRS Remote Sensing
        // cert5: './certificates/cert5.jpg',                   // Add your 5th certificate
        // cert6: './certificates/cert6.jpg'                    // Add your 6th certificate
    };

    // Open modal
    certViewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const certId = btn.getAttribute('data-cert');
            const certImage = certificateImages[certId];

            if (certImage) {
                certModalImage.src = certImage;
                certModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    // Close modal function
    const closeCertModal = () => {
        certModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    // Close on X button
    if (certModalClose) {
        certModalClose.addEventListener('click', closeCertModal);
    }

    // Close on overlay click
    if (certModalOverlay) {
        certModalOverlay.addEventListener('click', closeCertModal);
    }

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && certModal.classList.contains('active')) {
            closeCertModal();
        }
    });

    // ===================================
    // Contact Form Submission
    // ===================================
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Show success message (In production, send to backend)
            formStatus.className = 'form-status success';
            formStatus.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';

            // Reset form
            contactForm.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                formStatus.className = 'form-status';
            }, 5000);
        });
    }

    // Log page load time
    if (window.performance) {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log(`⚡ Page loaded in ${loadTime}ms`);
    }
});
