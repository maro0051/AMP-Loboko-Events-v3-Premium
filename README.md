# AMP Loboko Events — Premium Multi-Page React Website

## Run
npm install
npm run dev

## Pages
- / — Home
- /about — About
- /services — Services
- /gallery — Gallery
- /book — Booking
- /contact — Contact

## Contact
Phone: +243 812 467 466
Call: tel:+243812467466
SMS: sms:+243812467466
WhatsApp: https://wa.me/243812467466

## Email booking
This frontend uses EmailJS so no custom backend/database is required.
1. Create an EmailJS account.
2. Connect the email provider.
3. Create one template for client confirmation and one for owner notification.
4. Copy `.env.example` to `.env`.
5. Fill in the EmailJS IDs and real business email.
6. The booking form sends the client confirmation first, then the owner notification.

Recommended EmailJS template variables:
{{name}}, {{email}}, {{phone}}, {{type}}, {{date}}, {{time}}, {{guests}}, {{location}}, {{services}}, {{budget}}, {{message}}, {{business_email}}.
