# MANTRA 2026 Summer School | Frontend Website Assignment
**Topic:** Travel Website Design, SEO, Responsiveness & Netlify Hosting  
**Submission Date:** 2nd July 2026  
**Maximum Marks:** 10  

---

## Student details
- **Student Name:** [Your Name Here]  
- **Registration / Roll Number:** [Your Roll Number Here]  
- **Selected Website Topic:** Travel Website  
- **Project Name:** Mantra Travels  

---

## 1. Project Overview
**Mantra Travels** is a premium, fully responsive, and SEO-optimized multi-page static website designed and developed for the MANTRA 2026 Summer School Frontend Assignment. The website acts as a gateway for travelers looking for high-quality, curated tour packages in destinations like the Maldives, the Swiss Alps, Cappadocia, and Paris.

The site is built from scratch utilizing standard semantic **HTML5**, modern **CSS3** layout techniques (Flexbox, Grid, and Media Queries), and interactive **Vanilla JavaScript** to provide animations, image lightboxes, filters, and form validations.

---

## 2. Page Directory Structure
The project contains the following file structure:
```text
/mantra
│  index.html        # Home Page (Hero, Value highlights, popular trips preview, client testimonials)
│  about.html        # About Us Page (Company story, team cards, FAQ accordion)
│  packages.html     # Packages Page (Tour package cards with interactive category tabs)
│  gallery.html      # Gallery Page (Grid of destinations with JavaScript Lightbox popup)
│  contact.html      # Booking Page (Contact info, animated mock map, validated booking form)
│  README.md         # Project documentation and deployment guides
│
├───css
│       style.css     # Central CSS stylesheet (Color variables, responsive reset, layout grids)
│
├───js
│       main.js       # Main script (Mobile navbar toggle, testimonials slider, filter tabs, modal, form validation)
│
└───images            # Image folder containing generated travel photographs
        hero.jpg
        about-banner.jpg
        gallery1.jpg
        gallery2.jpg
        gallery3.jpg
        gallery4.jpg
```

---

## 3. Implemented JavaScript Features
We have incorporated several interactive JavaScript components across the website inside [main.js](file:///c:/Users/VENNA/OneDrive/Documents/mantra/js/main.js):
1. **Responsive Mobile Hamburger Menu:** Converts the navigation bar into a slide-out drawer on tablets and mobile screens, changing the icon shape on active states.
2. **Sticky Header Transition:** Toggles background styling and blurs on the header dynamically as the user scrolls.
3. **Interactive Testimonial Slider (Home Page):** Automatically rotates client reviews every 5 seconds, featuring manual dot selectors.
4. **FAQ Accordion (About Page):** Toggles open/close transitions for company policies, automatically collapsing previous answers when a new query is clicked.
5. **Packages Filtration (Packages Page):** Allows the traveler to filter active tours (Beach, Mountains, Adventure/Cultural) instantly without reloading the page.
6. **Gallery Lightbox (Gallery Page):** Opens selected travel pictures in a centered popup overlay with dark blur background, displaying custom subtitles and closing on Escape key press, click out, or via the `X` button.
7. **Contact Booking Form Validation (Contact Page):** Checks user input fields during blur/submission:
   - Verifies email formats using Regular Expressions.
   - Restricts telephone numbers to exactly 10 digits.
   - Prevents selecting travel dates in the past.
   - Checks traveler counts to be at least 1.
   - Displays inline visual error messages if invalid.
   - Triggers an attractive success confirmation modal upon successful booking submissions.

---

## 4. Basic SEO Checklist Compliance
The website strictly follows the evaluation rubric's SEO guidelines:
- [x] **Page Titles:** Each page has a unique, descriptive `<title>` tag in its header.
- [x] **Meta Descriptions & Keywords:** Standard viewport, keyword tags, and customized page descriptions are added to all HTML heads.
- [x] **Heading Hierarchy:** Each page contains **exactly one** `<h1>` tag representing the main title, followed chronologically by section headers `<h2>` and cards `<h3>`.
- [x] **Alt Texts:** Every image contains descriptive `alt` tags to support web accessibility.
- [x] **Clean Filenames:** File names are clean and lowercase (`index.html`, `about.html`, etc.) for direct SEO crawling.
- [x] **Semantic HTML:** Code is structured using layout tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

---

## 5. Deployment Instructions

### Step 1: Uploading to GitHub
1. Create a public repository on your GitHub account called `mantra-travels-website`.
2. Open Git Bash/terminal in the local project directory and execute:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mantra Travels website files"
   git branch -M main
   git remote add origin https://github.com/your-username/mantra-travels-website.git
   git push -u origin main
   ```

### Step 2: Hosting Live on Netlify
1. Go to [Netlify](https://www.netlify.com/) and sign in with your GitHub account.
2. Click on **Add new site** -> **Import an existing project**.
3. Select your git provider as **GitHub** and authorize access.
4. Choose the repository `mantra-travels-website`.
5. In the configuration fields, keep the settings at default (leave **Build command** and **Publish directory** empty as this is a simple static project).
6. Click **Deploy Site**.
7. Netlify will generate a custom live link for your website. (You can customize the domain prefix under **Site configuration** -> **Change site name** to match your credentials, e.g. `mantra-travels-[name].netlify.app`).
