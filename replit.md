# House of Champions (HOC) Fitness - Online Fitness Training Website

## Project Overview
A professional single-page fitness training website for women's online fitness programs, featuring:
- Hero section with WhatsApp consultation booking
- Contact form with Gmail email delivery
- Program highlights, pricing packages, and trainer profiles
- Responsive design with vibrant green, black, and white branding matching the gym

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js, Node.js
- **Email**: Nodemailer with Gmail SMTP
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

## User Preferences
- Client wants ability to change email and WhatsApp number later
- Prefers Gmail SMTP over SendGrid for email delivery
