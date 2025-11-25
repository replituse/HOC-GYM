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
- **Styling**: Custom vibrant green (hsl(100, 85%, 50%)), black, and white color scheme matching HOC Fitness gym branding

## Email Configuration
The contact form sends emails using Gmail SMTP via Nodemailer. Required environment variables:
- `GMAIL_USER`: The Gmail address (abhijeet18012001@gmail.com)
- `GMAIL_APP_PASSWORD`: Gmail App Password (16-character password from Google Account settings)

**Note**: User opted not to use SendGrid integration and will use Gmail SMTP with app passwords instead.

## WhatsApp Integration
- WhatsApp number: +91 8600126395
- Opens WhatsApp with pre-filled message for consultations

## Contact Information
- Email: abhijeet18012001@gmail.com
- Phone: +91 8600126395
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
