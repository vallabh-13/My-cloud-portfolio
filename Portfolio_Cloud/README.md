# Cloud Portfolio - Bhanudas Mahadik

A premium, modern portfolio website showcasing cloud computing expertise, AWS certifications, and technical projects. Built with cutting-edge web technologies and glassmorphism design principles.

## 🌟 Overview

This portfolio represents a **$10,000 worth professional website** designed specifically for cloud architects and DevOps professionals. It features an immersive neural network animated background, smooth scroll animations, and a premium contact section with integrated social connectivity.

## 🎨 Design Features

### Visual Design
- **Animated Neural Network Background**: Interactive particle-based neural network canvas that creates a dynamic, tech-focused atmosphere
- **Glassmorphism UI**: Modern glass-morphic cards with backdrop blur effects throughout
- **Purple Gradient Theme**: Professional purple color scheme (#7c3aed primary, #a78bfa accent)
- **Nebula Orbs**: Floating gradient orbs that add depth and visual interest
- **Smooth Animations**: Custom reveal animations, hover effects, and transitions

### Navigation
- Fixed navigation bar with transparency (40% opacity)
- **Dual-direction hover animations**:
  - Nav links: Vertical sliding text (down-to-up transition)
  - Contact button: Horizontal sliding text (left-to-right transition)
- Responsive mobile menu toggle

## 📋 Sections

### 1. Hero Section
- Large serif typography with professional subtitle
- Nebula particle animation background
- Call-to-action buttons (View My Work, Connect on LinkedIn)
- Animated scroll indicator

### 2. About Section
- Professional biography highlighting AWS certifications
- Stats grid with key metrics:
  - 2x AWS Certifications
  - 10 Cloud Projects
  - 1+ Years Experience
  - 2 Hackathons

### 3. Experience Section
- **Alternating timeline layout** (desktop view):
  - Items alternate between left and right sides
  - Connected by central timeline with animated dots
  - Hover effects that move cards away from timeline
- Professional experience cards with:
  - IT Support Specialist - University of Cincinnati (2023-Present)
  - Network Infrastructure Project - Alma College (2024)
  - Technical Support Specialist - Previous Roles (2022-2023)

### 4. Skills Section
- **Circular skill cards** with transparent backgrounds
- Image-based skill icons (replaces emoji/text icons)
- Technologies featured:
  - AWS, EC2, S3, Lambda, RDS
  - Terraform, Docker, Kubernetes
  - Python, Bash, Git, CI/CD
- 160px × 160px circular cards with hover animations

### 5. Projects Section
- 3-column grid layout (responsive)
- Each project card includes:
  - Visual area for AWS architecture diagrams (supports images)
  - Technology tags
  - Project description
  - "View Details" button linking to LinkedIn posts
- Featured projects:
  - Multi-Tier Web Application
  - Containerized Microservices
  - Serverless Data Pipeline
  - Zero-Trust Security Framework
  - Infrastructure Monitoring System
  - Disaster Recovery Solution

### 6. Certifications Section
- 4-column grid of certification cards
- Each card has a "View Certificate" or "Learn More" button
- Current certifications:
  - AWS Solutions Architect - Associate (2024)
  - AWS Cloud Practitioner (2024)
  - CKA - In Progress
  - HashiCorp Terraform - Planned 2025

### 7. Contact Section (Premium Design)
**Layout**: Two-column grid with centered socials below

**Left Column - Profile & Contact Info**:
- Profile card with:
  - Profile photo (150px circular) with animated glow effect
  - Name and role
  - Gradient header background
- Contact method cards:
  - Email: bhanudasmahadikijs@gmail.com (clickable mailto)
  - LinkedIn: bhanudas-mahadik (clickable link)
  - Phone: +1 (234) 567-890 (display only, no click)

**Right Column - Contact Form**:
- Formspree-integrated contact form
- Fields: Name, Email, Subject, Message
- "Send Message" button with arrow animation
- Equal height with left column

**Bottom - Social Icons (Centered)**:
- Full-width centered section below the two columns
- Transparent icon cards (50px × 50px) with hover effects
- Links to:
  - GitHub
  - Instagram
  - Codedex

### 8. Footer
- Simple copyright notice
- Purple accent border on top

## 🎯 Key Technical Implementations

### Custom Hover Animations
- **Nav Links**: Vertical text transition (translateY -100%)
- **Contact Button**: Horizontal text transition (translateX 100%)
- Both use `cubic-bezier(0.7, 0, 0.3, 1)` for smooth easing

### Button Styling
- All buttons (hero, project, certification) use consistent sizing
- Contact nav button size: `padding: 0.3rem 1rem`
- Other buttons: `padding: 0.4rem 1.2rem`
- Vertical alignment: `vertical-align: middle; line-height: 1.5`

### Skills Cards
- Changed from category-based layout to individual circular cards
- Used Flexbox with fixed dimensions to ensure perfect circles
- Transparent background: `rgba(30, 30, 30, 0.2)`
- No borders for clean, minimal look
- Image support for skill icons

### Equal Height Contact Sections
- Grid with `align-items: stretch`
- Flexbox layout for child elements
- Form card uses `height: 100%` and `flex-grow: 1`

### Responsive Design
- Desktop: 3-column projects, 4-column certifications
- Tablet: 2-column projects, 3-column certifications
- Mobile: Single column layout with adjusted animations

## 🛠️ Technologies Used

### Frontend
- HTML5 (Semantic markup)
- CSS3 (Custom properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (Canvas animations, scroll effects)

### Design System
- Google Fonts: Inter (body), Instrument Serif (headings)
- Color Palette:
  - `--primary-purple: #7c3aed`
  - `--light-purple: #a78bfa`
  - `--dark-bg: #000000`
  - `--text-primary: #FFFFFF`
  - `--text-secondary: #9ca3af`

### Form Integration
- Formspree for contact form handling
- Email delivery to: bhanudasmahadikijs@gmail.com

## 📁 Project Structure

```
Portfolio_Cloud/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── scripts.js          # JavaScript for animations
├── images/
│   ├── profile.jpg     # Profile photo for contact section
│   └── skills/         # Skill icon images
│       ├── aws.png
│       ├── ec2.png
│       ├── s3.png
│       ├── lambda.png
│       ├── rds.png
│       ├── terraform.png
│       ├── docker.png
│       ├── kubernetes.png
│       ├── python.png
│       ├── bash.png
│       ├── git.png
│       └── cicd.png
└── README.md           # This file
```

## 🚀 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/vallabh-13/Cloud-Portfolio.git
   cd Cloud-Portfolio
   ```

2. Add required images:
   - Profile photo: `images/profile.jpg` (recommended: 300×300px minimum)
   - Skill icons: Add PNG images to `images/skills/` folder

3. Update personal information in `index.html`:
   - GitHub username (line 501)
   - Instagram username (line 506)
   - Codedex username (line 511)
   - Phone number (line 489)
   - Formspree form ID (line 527) - Sign up at https://formspree.io

4. Open `index.html` in a modern browser

## 📝 Recent Updates

### Today's Changes:
1. **Contact Button Animation**: Changed from vertical to horizontal sliding text
2. **Button Sizing**: Standardized all button sizes across the site
3. **Navbar Transparency**: Increased transparency to 40% opacity
4. **Skills Section**:
   - Removed Core Values section
   - Added Skills section between Experience and Projects
   - Changed from category layout to individual circular cards
   - Implemented image-based skill icons
   - Made cards perfectly circular with transparent backgrounds
5. **Project Cards**: Added "View Details" buttons and image support for AWS diagrams
6. **Certification Cards**: Added "View Certificate"/"Learn More" buttons
7. **Contact Section Redesign**:
   - Premium two-column layout
   - Profile card with animated photo glow
   - Contact method cards for Email, LinkedIn, Phone
   - Integrated contact form with Formspree
   - Removed GitHub from main contact cards
   - Removed WhatsApp click functionality from phone
   - Added separate centered "Connect on Socials" section
   - Made social icon cards smaller (50px) and transparent
   - Ensured equal heights for left and right columns

## 🎓 Author

**Bhanudas Mahadik**
- AWS Certified Solutions Architect - Associate
- AWS Certified Cloud Practitioner
- Sophomore IT Student - University of Cincinnati
- IT Support Specialist with 1+ years experience

## 📄 License

This portfolio is a personal project. Feel free to use it as inspiration, but please don't copy it directly.

## 🔗 Links

- **Live Portfolio**: [Add your deployed URL here]
- **LinkedIn**: https://www.linkedin.com/in/bhanudas-mahadik/
- **GitHub**: https://github.com/vallabh-13

---

**Note**: This is a premium portfolio design worth $10,000+ in professional value. It showcases modern web development practices, smooth animations, and professional design principles suitable for senior-level cloud architects and DevOps engineers.
<p class="experience-description">
                    Built a comprehensive web security analysis platform using AWS Lambda, integrating industry-standard security tools
                    into a unified serverless application. Democratized web security testing by creating a one-click solution for vulnerability scanning.
                </p>