# WPForms - Form Pages (Static Layout)

This project is a static HTML/CSS layout for a landing page promoting the "Form Pages" feature of WPForms.

## 📁 Project Structure

```
/
├── index.html          # Main HTML file with all sections
├── style.css           # Custom styling for layout and responsiveness
├── gulpfile.js         # Gulp setup for asset pipeline (if used)
├── composer.json       # PHP package file (likely unused here, but included)
├── package.json        # Node dependencies
└── src/                # Assets directory
    └── assets/
        └── images/     # Contains image assets like form-pages.svg
        └── css/        # Additional styles if any
```

## 📐 Layout Sections

The `index.html` includes the following sections:

1. **Hero Section**: Title, description, and two CTA buttons.
2. **Intro Video**: Split background with embedded video poster.
3. **Feature Grid**: Three-column layout of feature descriptions.
4. **Testimonials**: Customer feedback cards with rating stars.
5. **Feature Highlight**: Image and text side-by-side.
6. **Image Pair**: Two side-by-side images.
7. **Closing Section**: Final CTAs and feature summary.

## 📱 Responsiveness

- Mobile-first responsive design using media queries.
- Breakpoints are defined at `900px` and `600px` for tablet and mobile stacking.
- Includes adjustments for iPad portrait/landscape and iPhone landscape widths.

## 🛠 Usage

To preview:
- Open `index.html` directly in your browser.

To customize:
- Modify `style.css` for layout/styling.
- Replace assets in `src/assets/images/`.

---

© WPForms Layout Demo


## 🛠 Task

### Challenge: Design to Landing Page

Overview:

You’ll create a simple landing page (.html is fine) that follows the design provided.

Specifications:

- Create an HTML landing page from our Figma design.
- Use modern markup and styling techniques/methods.
- Please do not use any markup or CSS frameworks (Bootstrap, Tailwind, etc).
- The featured image should play this YouTube video when the play button is clicked. How you implement that is up to you!
- The page should be fully responsive – so shift and size down elements as you see fit. We’ll view this in desktop, tablet, and mobile viewports.
- CSS should be written using SASS and both the source and compiled files should be included. Method of compiling (gulp, grunt, etc) is up to you.
- Please include all development resources (.git files, composer.json, package.json, etc., if/where applicable).
- Use your name in the folder name, etc.

Notes:

- If you don’t have a Figma account (free), sign up to access the inspector view.
- You can download and use the prepared asset files (images and icons).
- Do not rush! Strive for attention to detail (one of our core values) – we’ll compare the HTML template to the design file provided 🙂
