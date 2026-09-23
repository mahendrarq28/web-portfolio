# Mahendra Arqudanta — Personal Portfolio

Personal portfolio website built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

The static output is generated in `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
├── components/      # UI sections (Navbar, Hero, About, Skills, ...)
├── data/             # Static content: projects, skills, experience, design works
├── pages/             # Home.jsx and CaseStudy.jsx (routed with react-router-dom)
├── hooks/            # useReveal (scroll fade-in)
├── lib/              # contact.js — swap this to wire the contact form to a real backend
└── index.css          # design tokens and global styles

public/
└── assets/
    ├── profile/
    ├── projects/
    ├── design/
    ├── icons/
    └── documents/     # cv-mahendra-arqudanta.pdf
```

## Replacing placeholder content

- **Hero illustration**: replace `public/assets/profile/illustration-placeholder.png` with your
  own portrait or illustration. Any image works — the frame in `Hero.jsx` crops it to a 4:5
  rounded card automatically.
- **Project & design images**: replace the placeholder PNGs in `public/assets/projects/` and
  `public/assets/design/` with real images, keeping the same filenames (or update the paths in
  `src/data/projects.js` and `src/data/designWorks.js`).
- **CV**: replace `public/assets/documents/cv-mahendra-arqudanta.pdf` with the real CV.
- **Social links & email**: update the placeholder `href="#"` links and the email address in
  `src/components/Hero.jsx` and `src/components/Contact.jsx`.
- **Design works**: the six entries in `src/data/designWorks.js` are placeholders — swap in real
  work with its own name, category, description, and image.

## Contact form

The form validates input and shows a simulated success state — there's no backend yet. To connect
a real service, edit `src/lib/contact.js` (examples for Formspree, EmailJS, and a custom API are
included as comments there). No changes are needed in `Contact.jsx` itself.

## Deployment

The project builds to a static site and works out of the box on Vercel, Netlify, or GitHub Pages.
Build command: `npm run build`. Output directory: `dist`.
