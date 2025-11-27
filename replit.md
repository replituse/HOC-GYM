# House of Champions (HOC) Fitness - Online Fitness Training Website

## Project Overview
A professional single-page fitness training website for women's online fitness programs, featuring:
- Hero section with WhatsApp consultation booking
- Contact form with Gmail email delivery
- Program highlights, pricing packages, and trainer profiles
- Responsive design with vibrant green, black, and white branding matching the gym

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js, Node.js (local dev), Netlify Functions (production)
- **Email**: Nodemailer with Gmail SMTP
- **Deployment**: Netlify-ready with serverless functions
- **Styling**: Clean white and green color scheme - white backgrounds with bright fitness green (#00C853) accents for a modern, premium aesthetic

## Email Configuration
The contact form sends emails using Gmail SMTP via Nodemailer. Required environment variables:
- `GMAIL_USER`: The Gmail address (abhijeet18012001@gmail.com)
- `GMAIL_APP_PASSWORD`: Gmail App Password (16-character password from Google Account settings)

**Note**: User opted not to use SendGrid integration and will use Gmail SMTP with app passwords instead.

## WhatsApp Integration
- WhatsApp number: +91 8374627462
- Opens WhatsApp with pre-filled message for consultations

## Contact Information
- Email: hoc@gmail.com
- Phone: +91 8374627462
- Location: Bengaluru, Karnataka

## Recent Changes
- Implemented complete frontend with all sections
- Added backend API endpoint for contact form
- Integrated Nodemailer for Gmail email delivery
- Updated color scheme to vibrant green, black, and white matching gym branding
- Replaced hero image with professional Indian fitness photo
- Updated trainer section with Indian trainer photos (Snata Pattnaik, Neha Kashyap, Manisha)
- **Continuous Scrolling Testimonials Section** (November 2025):
  - Implemented three-row auto-scrolling testimonials carousel
  - Row 1: Scrolls left to right (40s duration)
  - Row 2: Scrolls right to left (45s duration)
  - Row 3: Scrolls left to right (40s duration)
  - Created reusable TestimonialCard component with proper test IDs
  - Added 15 dummy customer reviews with diverse profiles
  - CSS keyframe animations for smooth, continuous scrolling
  - Pause animation on hover for better UX
  - Respects prefers-reduced-motion accessibility setting
- **Netlify Deployment Ready** (November 2025):
  - Created serverless function for contact form API
  - Added netlify.toml configuration
  - Updated build scripts for Netlify
  - Added _redirects file for SPA routing
  - Comprehensive deployment guide in NETLIFY_DEPLOY.md
- **Training Programs Section Redesign** (November 2025):
  - Changed section background to solid black matching website theme
  - Updated to white cards with green headers and black body text
  - Replaced 6 training programs with new content:
    1. Cardio Training - Heart health and endurance
    2. Strength Training - Muscle building with weights
    3. Flexibility & Mobility Training - Joint movement and injury prevention
    4. Core Training - Abs, obliques, and lower back strengthening
    5. Functional Training - Daily life movement activities
    6. Balance & Stability Training - Coordination and posture
  - Added motion animations for card entry
  - Faster testimonial animations (20s/25s instead of 30s/35s)
  - Split testimonials into 3 different review groups per row
- **Latest Content Updates** (November 25, 2025):
  - Updated hero section with founder's mission statement: "With years of experience in fitness training and a deep passion for empowering people, our founder created House of Champions to share professional fitness expertise with everyone around the world."
  - Added motivational quote: "Your transformation is our mission. Every rep, every session, every victory — we celebrate it all with you."
  - Updated statistics: Changed client count from 1250+ to 2000+, removed "Smart Machines" metric
  - Converted transformation gallery to auto-scrolling horizontal slider with pause-on-hover functionality (30s animation duration)
  - Renamed "Programs" to "Services" throughout navigation menu (desktop and mobile)
  - Updated section heading from "Our Training Programs" to "Our Services"
  - Replaced first 3 program items with new service offerings:
    1. Personalised Training - Custom workout plans and weekly progress check-ins
    2. Personal Guidance - Expert nutrition advice and habit coaching
    3. Proven Transformation - Science-backed methods with visible results
  - Added "Why Choose Train With Winston" section with 5 key features:
    1. Expert Coaching - Professional trainers with experience
    2. Flexible Training - Workout on your schedule
    3. Nutrition Support - Personalized meal guidance
    4. Progress Tracking - Monitor your improvements
    5. Community Support - Join a supportive fitness family
  - Added FAQ section with 4 common questions
  - Added final CTA section before footer with "Join Now" button and WhatsApp link
- **UI/UX Improvements** (November 25, 2025):
  - Fixed "Why Choose Train With Winston" flip cards display issue by adding min-height: 280px to prevent card collapse
  - Updated Transformation gallery: reduced image sizes while maintaining card heights (cards: 450/500/550px, images: max 380/420/460px with padding)
  - Enhanced package cards hover effects with normal shadow lift and translate animations (removed hover-elevate utility)
  - All changes maintain responsive design across breakpoints
- **Transformation & Flip Card Enhancements** (November 26, 2025):
  - Fixed Transformation section image alignment: using aspect-[3/4] ratio with object-cover to fill cards completely
  - All transformation cards now have same width, height, and perfect alignment with consistent borders
  - Enhanced "Why Choose Train With Winston" flip cards with gym image backgrounds on back faces
  - Flip card backs feature: gym equipment stock images, gradient overlay for legibility, floating icon animation, title and subtitle text
  - Added 5 different gym stock images for variety across the 5 flip cards
  - Maintained smooth 3D flip animation on hover with responsive design
- **Contact Form & Transformation Updates** (November 26, 2025):
  - Phone validation: Exactly 10 digits, numbers only (no letters or special characters)
  - Green checkmark icon appears in phone input when valid 10-digit number is entered
  - Phone input filters out non-numeric characters as user types
  - Email recipient changed to: replituse32@gmail.com
  - Email format updated to: "Name:-, Email:-, Phone:-, Service:-"
  - Transformation carousel speed increased (10s animation, faster scrolling)
  - Transformation images now use object-cover to fill cards completely (no empty space)
- **White and Green Color Theme Update** (November 26, 2025):
  - Implemented clean white and green color scheme throughout the site
  - Updated CSS variables in index.css for consistent white (#FFFFFF) and green (#00C853) theme
  - Changed all section backgrounds from black to white or light green tints (bg-primary/5)
  - Updated text colors: headings use text-primary (green), body text uses text-gray-700/900
  - Updated all buttons: green background with white text, or white with green border
  - Social link buttons now use green borders instead of white
  - FAQ cards updated with white backgrounds and green accents
  - Testimonials section uses light green background (bg-primary/5)
  - Contact section uses white background with green accents
  - Final CTA section uses solid green background with white text and button
  - Mobile navigation updated with dark text on white background
  - Pricing cards use green borders and green accent colors
  - Trainers section uses white background with green borders on images
  - All sections have subtle green border separators (border-primary/10)
- **UI Updates** (November 27, 2025):
  - Removed dark mode toggle completely - website stays in white + green theme only
  - Added scroll-to-top button on bottom-left (white bg, green border/icon, rounded shape, hover effects)
  - Updated contact details: Phone +91 8374627462, Email hoc@gmail.com
  - Fixed transformation images to show full body (object-contain instead of object-cover)
- **Mobile Responsiveness & UI Fixes** (November 27, 2025):
  - Fixed Review/Testimonials section on mobile: white card background with proper text contrast
  - Enlarged navigation dots for better visibility and touch interaction on mobile
  - Updated About section statistics: reduced to 3 counters (2,000+ Clients Transformed, 18 Certified Coaches, 32,000+ Training Hours)
  - Statistics now display in responsive 3-column grid with proper text sizing for mobile
  - Footer links (Privacy Policy & Terms of Service) now redirect to home page with smooth scroll
  - Enhanced overall mobile responsiveness across all sections

## Deployment
This project is configured for Netlify deployment. See **NETLIFY_DEPLOY.md** for complete deployment instructions.

**Quick deployment:**
1. Push to GitHub/GitLab
2. Connect to Netlify
3. Set environment variables: `GMAIL_USER`, `GMAIL_APP_PASSWORD`
4. Deploy automatically

## User Preferences
- Client wants ability to change email and WhatsApp number later
- Prefers Gmail SMTP over SendGrid for email delivery
