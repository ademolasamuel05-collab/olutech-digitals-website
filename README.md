# Olutech Digitals — standalone website starter

## Pages included
- `index.html` — home
- `about.html` — founder story, business motivation, mission, vision, and values
- `services.html` — service overview
- `booking.html` — consultation booking page with a placeholder for your real calendar link
- `contact.html` — contact form
- `styles.css` and `script.js` — responsive styling and interactions

The O+ monogram has been removed. The brand name is **Olutech Digitals**.

## First tasks before launch
1. Founder portrait is included at `assets/ademola-oluwole.jpg` on the Home and About Us pages.
2. Send your public calendar booking URL (Calendly, Cal.com, GoHighLevel calendar, or another provider) so the booking page can embed it.
3. Replace `hello@YOUR-DOMAIN.com` in `script.js` with your real business inbox. This will be updated again when your domain/email is ready.
4. Review the founder story and confirm any wording you want changed.
5. The contact form currently opens an email draft; it does not store form submissions. Connect a form endpoint or backend before launch if you want submissions delivered without the visitor opening an email app.

## Preview
Extract the ZIP and open `index.html` in a browser. For a better local development experience, use Visual Studio Code with Live Server.

## Later: publish and connect a domain
1. Upload these files to a GitHub repository.
2. Import the repository into Vercel as a static site (framework: Other; no build command; output directory is the repository root).
3. Deploy and test the temporary Vercel URL.
4. After purchasing a domain, add it in Vercel project settings and enter the exact DNS records Vercel gives you in the domain registrar.
5. Test the custom domain, HTTPS, links, booking calendar, and contact flow.


## LinkedIn
The LinkedIn links currently point to the LinkedIn homepage as a placeholder. Replace `https://www.linkedin.com/` with your actual public LinkedIn profile URL in the HTML files before launch.

## Platform ticker
The homepage includes a continuously scrolling tools strip for GoHighLevel, Jobber, BookingKoala, ServiceM8, Make, n8n, Zapier, and ManyChat. It uses text-based brand labels rather than third-party logo files.


## Floating chat widget
A floating contact widget is now present on all pages. Email links use `ademolasamuel05@gmail.com`. The WhatsApp link is configured for the supplied business number `2348165916030`, with a pre-filled greeting. Verify the number is registered to WhatsApp Business and test the link before launch.


## Latest visual update
- Homepage founder image now uses the supplied seated office portrait (`assets/ademola-homepage.jpg`) to create a more personal, professional first impression.
- About Us page keeps the original headshot.
- Animated platform ticker expanded to include HubSpot, Zoho CRM, ActiveCampaign, Housecall Pro, Twilio, Stripe, Respond.io, and WATI, in addition to the previous platforms.
- Platform icons are text-based badges rather than official logo artwork.

- Founder quote card on About Us has been moved below the photo to prevent text covering the face.


## Contact form integration
The Contact page embeds the Olutech Digitals Google Form. Responses are collected in the Google account that owns the form; link the form to Google Sheets from its Responses tab to manage enquiries in a spreadsheet. Test the published form after deployment.


## Booking calendar
The booking page embeds the public Calendly event at https://calendly.com/ademolasamuel05/30min. Visitors can book from booking.html; a direct Calendly link is provided as a fallback.
