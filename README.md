# Central Peel DECA Website

A modern, responsive website for Central Peel Secondary School's DECA chapter built with React.

## Features

- **Home Page**: Hero section with chapter overview and member testimonials
- **Clusters Page**: Interactive exploration of all four DECA clusters (Marketing, Business Admin, Hospitality, Finance)
- **Executives Page**: Meet the leadership team with organized hierarchy
- **Memories Page**: Photo gallery with achievements timeline and member spotlights
- **Contact Page**: Join form with FAQ section and meeting information
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Blue Theme**: Professional color scheme matching DECA branding

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd decawebsitewindsurf
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation bar
│   ├── Footer.js       # Site footer
│   └── *.css          # Component styles
├── pages/              # Main page components
│   ├── Home.js         # Landing page
│   ├── Clusters.js     # Cluster information
│   ├── Executives.js   # Team members
│   ├── Memories.js     # Photo gallery & timeline
│   ├── Contact.js      # Contact form & info
│   └── *.css          # Page styles
├── data/
│   └── info.js         # Editable site content
├── App.js              # Main app component
└── index.js            # App entry point
```

## Editing Content

All website content can be easily edited in `/src/data/info.js`. This includes:

- Site information and descriptions
- Executive team members
- Cluster details and resources
- Testimonials and memories
- Contact information

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run build && npm run deploy`

### Netlify
1. Run: `npm run build`
2. Drag the `build` folder to Netlify

## Customization

### Colors
The blue theme can be customized in `/src/App.css` by modifying the CSS variables:
```css
:root {
  --primary-blue: #1e40af;
  --secondary-blue: #3b82f6;
  --light-blue: #dbeafe;
  --dark-blue: #1e3a8a;
  --accent-blue: #60a5fa;
}
```

### Adding Images
Replace placeholder images by:
1. Adding images to `/public/images/` folder
2. Updating image paths in `/src/data/info.js`

## Built With

- **React** - Frontend framework
- **React Router** - Client-side routing
- **CSS3** - Styling with custom properties
- **Inter Font** - Typography

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions about the website, contact:
- Email: cpssdeca@gmail.com
- Instagram: @cpss.deca

---

Built with ❤️ for Central Peel DECA
