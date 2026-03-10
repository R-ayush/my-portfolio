# 💼 Ayush Singh - Portfolio Website

A modern, responsive personal portfolio website showcasing my journey as a Computer Science student, AI/ML enthusiast, and Full-Stack developer. Built with pure HTML5, CSS3, and Vanilla JavaScript.

## 🎯 Project Overview

This portfolio website is designed to showcase my skills, projects, education, and professional experience. It features a clean, professional design with smooth animations, dark mode support, and excellent user experience across all devices.

## ✨ Features

### 🧭 Navigation
- **Sticky Header** - Always accessible navigation bar
- **Smooth Scrolling** - Seamless navigation between sections
- **Mobile Responsive Menu** - Hamburger menu for mobile devices
- **Active Link Highlighting** - Visual feedback for current section

### 🌓 Dark Mode
- **Theme Toggle** - Switch between light and dark modes
- **LocalStorage Persistence** - Remembers user preference
- **Smooth Transitions** - Elegant theme switching animation

### 📱 Fully Responsive
- **Mobile First Design** - Optimized for all screen sizes
- **Breakpoints**: 
  - Desktop: 1200px+
  - Tablet: 768px - 1199px
  - Mobile: < 768px

### 🎨 Sections

#### 1. Home Section
- Two-column hero layout with profile photo
- Animated greeting and introduction
- Professional tagline
- Call-to-action buttons (View Projects, Contact Me)
- Smooth fade-in animations

#### 2. About Me
- Clean card-based layout
- Info cards: Education, Tech Interests, Career Goals
- Interactive interest tags
- Key highlights section
- Scroll-triggered animations

#### 3. Education Journey
- Horizontal timeline design
- Current education highlighted with pulsing animation
- Academic progression (B.Tech → Diploma → Intermediate → High School)
- Status badges (In Progress / Completed)
- Responsive timeline layout

#### 4. Skills Section
- 12 skill cards with icons
- Technologies: ML, Gen AI, NLP, Python, Java, PHP, HTML, CSS, JavaScript, Bootstrap, MySQL, Power BI
- Clean grid layout
- Hover effects
- Scroll-triggered animations

#### 5. Projects Section
- 6 project cards with preview images
- Category badges (AI/ML, Full-Stack, Data Science, Web Dev, API Integration)
- Tech stack badges
- Dual action buttons (View Project, Case Study)
- **"View More" functionality** - Shows/hides 3 additional projects
- Smooth animations

#### 6. Get In Touch (Contact)
- Two-column layout
- Contact methods with icons (Email, Phone, Location)
- Social media links (LinkedIn, GitHub, Twitter, Instagram)
- **Contact Form**:
  - Fields: Name, Email, Subject, Message
  - Form validation
  - Success/error status messages
  - Responsive design

#### 7. Footer
- Brand information
- Quick navigation links
- Copyright and credits
- Animated heart icon
- Clean, professional design

### 🎭 Animations & Effects
- Fade-in animations on scroll
- Slide animations (left, right, up)
- Zoom-in effects for images
- Card hover effects (lift, shadow, border)
- Button hover animations
- Smooth transitions throughout
- Timeline pulsing animation
- Heartbeat animation on footer icon
- "View More" staggered reveal animation

### ♿ Accessibility
- Semantic HTML5
- ARIA labels
- Keyboard navigation support
- Focus management
- Screen reader friendly

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with:
  - CSS Variables (Custom Properties)
  - Flexbox & Grid layouts
  - Media queries
  - Animations & Transitions
- **Vanilla JavaScript** - No frameworks, pure JS for:
  - DOM manipulation
  - Event handling
  - Form validation
  - Scroll animations
  - LocalStorage management

## 📦 External Dependencies

- **Google Fonts**: Poppins & Montserrat
- **Font Awesome 6.4.0**: Icons
- **Unsplash**: Placeholder images (replace with your own)

## 🚀 Getting Started

### Installation

1. **Clone or Download** the repository
2. **Open** `index.html` in your web browser
3. **No build process required** - it's pure HTML/CSS/JS!

### Customization

#### Update Personal Information
Edit `index.html`:
- **Name & Title**: Update in Home section (line ~54-56)
- **About Me**: Modify intro and info cards (lines ~76-145)
- **Education**: Update timeline items (lines ~157-211)
- **Skills**: Add/remove skill cards (lines ~229-308)
- **Projects**: Update project details (lines ~320-462)
- **Contact Info**: Change email, phone, location (lines ~497-526)

#### Replace Images
Replace the Unsplash URLs with your own images:
- **Profile photo**: Home section (line ~64)
- **Project images**: Projects section (lines ~322, 346, 370, 394, 418, 442)

#### Add Your Logo
In `index.html` (line ~20-25):
1. Uncomment the `<img>` tag
2. Add your logo file to the project folder
3. Update the `src` attribute with your logo filename

#### Customize Colors
Edit CSS variables in `styles.css` (lines 4-30):
```css
:root {
    --primary-color: #0891b2;      /* Cyan */
    --secondary-color: #06b6d4;    /* Light Cyan */
    --accent-color: #f59e0b;       /* Amber */
    --text-primary: #1e293b;       /* Dark Slate */
    --bg-primary: #ffffff;         /* White */
    /* ... more colors */
}
```

#### Update Projects
Modify project cards in `index.html` (lines ~320-462):
- Change project titles and descriptions
- Update category badges
- Modify tech stack badges
- Add your project links (replace `#` in href)

## 📁 File Structure

```
New_Portfollio/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Color Scheme

### Light Mode
- Primary: `#0891b2` (Cyan)
- Secondary: `#06b6d4` (Light Cyan)
- Accent: `#f59e0b` (Amber)
- Background: `#ffffff` (White)
- Text: `#1e293b` (Slate)

### Dark Mode
- Background: `#0f172a` (Dark Slate)
- Text: `#f1f5f9` (Light Slate)
- Maintains same accent colors for consistency

## 🌟 Key JavaScript Features

### Mobile Navigation
- Toggle hamburger menu
- Close on link click
- Close on outside click
- Smooth animations
- Body scroll lock when menu open

### Dark Mode Toggle
- Toggle with button click
- Save preference to localStorage
- Persist across sessions
- Icon changes (moon/sun)
- Smooth color transitions

### Contact Form
- Form submission handling
- Success message display
- Form reset after submission
- Auto-hide message after 5 seconds
- Ready for backend integration

### View More Projects
- Toggle show/hide additional projects
- Staggered animation (100ms delay per card)
- Button text and icon change
- Smooth scroll back to projects section

### Scroll Animations
- Intersection Observer API
- Trigger animations on scroll
- Active nav link updates based on scroll position
- Scroll-to-top button (appears after scrolling)
- Smooth scrolling to sections

### Performance Optimizations
- DOMContentLoaded event for proper initialization
- Efficient DOM queries
- CSS transitions over JS animations
- Minimal DOM manipulation

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- **Fast Loading** - No heavy frameworks
- **Optimized Images** - Use WebP format for better compression
- **Minimal Dependencies** - Only Google Fonts and Font Awesome
- **Smooth Animations** - Hardware-accelerated CSS transforms

## 🔧 Future Enhancements

Potential features to add:
- [ ] Blog section
- [ ] Project detail pages/modals
- [ ] Testimonials section
- [ ] Certifications section
- [ ] Backend integration for contact form (EmailJS, Formspree)
- [ ] GitHub API integration for live project stats
- [ ] Resume download button
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Analytics integration (Google Analytics)
- [ ] Loading animations
- [ ] Custom cursor effects

## 📝 Customization Tips

### Adding a New Section
1. Add HTML structure in `index.html`
2. Add navigation link in the nav menu
3. Style the section in `styles.css`
4. Add scroll animations with `data-animate` attribute

### Changing Fonts
Replace Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Update CSS variables:
```css
--font-primary: 'YourFont', sans-serif;
```

### Adding More Skills
Copy a skill card in `index.html` and modify:
```html
<div class="skill-card" data-animate="zoom-in">
    <div class="skill-icon">
        <i class="fab fa-your-icon"></i>
    </div>
    <h3>Your Skill Name</h3>
</div>
```

### Adding More Projects
Copy a project card and update:
```html
<div class="project-card" data-animate="fade-in">
    <div class="project-image">
        <img src="your-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <span class="project-category">Category</span>
        </div>
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-badge">Tech 1</span>
            <span class="tech-badge">Tech 2</span>
        </div>
        <div class="project-actions">
            <a href="#" class="btn-primary">View Project</a>
            <a href="#" class="btn-secondary">Case Study</a>
        </div>
    </div>
</div>
```

## 🐛 Troubleshooting

### Images Not Loading
- Check image URLs are correct
- Ensure internet connection for external images
- Replace with local images if needed

### Animations Not Working
- Check JavaScript console for errors
- Ensure `script.js` is loaded correctly
- Verify Intersection Observer support in browser

### "View More" Button Not Working
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify `script.js` is loaded correctly
- Make sure code is inside `DOMContentLoaded` event

### Form Not Submitting
- This is expected - no backend configured
- Form shows success message without actual submission
- Integrate with backend service (e.g., Formspree, EmailJS) for real submissions

## 📄 License

This project is free to use for personal and commercial purposes. Attribution appreciated but not required.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 📧 Contact

**Ayush Singh**
- Email: herokumars@gmail.com
- Phone: +91 98765 43210
- Location: Hyderabad, India

Connect with me:
- [LinkedIn](https://linkedin.com)
- [GitHub](https://github.com)
- [Twitter](https://twitter.com)
- [Instagram](https://instagram.com)

---

**Built with ❤️ by Ayush Singh**

*Computer Science Student | AI/ML Enthusiast | Full-Stack Developer*
