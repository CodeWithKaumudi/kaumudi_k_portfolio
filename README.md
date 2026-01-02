# Kaumudi Kalikar - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and clean UI/UX design
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🎯 Sections: Hero, About, Skills, Experience, Projects, Achievements, Contact
- 💼 Professional presentation of work experience and projects
- 📧 Contact form for inquiries

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter & Space Grotesk (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Content

Update personal information in the respective component files:
- Personal details: `Hero.jsx`
- Career profile: `About.jsx`
- Skills: `Skills.jsx`
- Work experience: `Experience.jsx`
- Projects: `Projects.jsx`
- Achievements: `Achievements.jsx`
- Contact info: `Contact.jsx`

## Contact

Kaumudi Kalikar
- Email: kaumudikalikar6@gmail.com
- Phone: +91 9766 874 1197
- Location: Pune, India

## License

This project is open source and available for personal use.
