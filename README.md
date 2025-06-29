# Alisha Javed - Product Manager Portfolio

A modern, responsive portfolio website showcasing product management case studies, skills, and experience. Built with HTML5, CSS3, and JavaScript for optimal performance and user experience.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **Performance Optimized**: Lazy loading, optimized images, and minimal dependencies
- **Future-Proof**: Modular CSS with CSS custom properties and reusable components
- **Case Study Template**: Easy-to-use template for adding new case studies

## 📁 Project Structure

```
product-management-portfolio/
├── index.html                 # Main portfolio page
├── style.css                  # Main stylesheet with CSS custom properties
├── script.js                  # Interactive functionality
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation
├── assets/
│   ├── images/
│   │   ├── Alisha.jpg        # Profile image
│   │   ├── payroll-workflow.jpg
│   │   └── virtual-taboo.jpg
│   └── resume.pdf            # Resume file
├── case-studies/
│   ├── payroll-workflow.html  # Payroll workflow case study
│   └── virtual-taboo.html     # Virtual taboo case study
├── templates/
│   └── case-study-template.html # Template for new case studies
└── tests/
    ├── setup.js              # Jest setup configuration
    └── portfolio.test.js     # Test suite for portfolio
```

## 🛠️ Setup & Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/product-management-portfolio.git
   cd product-management-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run serve
   ```

4. Run tests:
   ```bash
   npm test
   ```

### Available Scripts
- `npm test` - Run test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run serve` - Start local development server
- `npm run lint` - Run ESLint (if configured)

## 📝 Adding New Case Studies

### Using the Template
1. Copy `templates/case-study-template.html`
2. Rename it to your case study (e.g., `my-new-case-study.html`)
3. Replace the placeholder content:
   - `[CASE_STUDY_TITLE]` - Your case study title
   - `[ROLE]` - Your role in the project
   - `[DURATION]` - Project duration
   - `[TOOLS]` - Tools and technologies used
   - `[TAG_1]`, `[TAG_2]`, `[TAG_3]` - Relevant tags
   - `[EXECUTIVE_SUMMARY]` - Brief project overview
   - `[PROBLEM_STATEMENT]` - Problem description
   - And so on...

### Adding to Main Page
1. Add a new case study card to `index.html` in the case studies section
2. Update the image path to point to your case study image
3. Update the link to point to your new case study file

### Example Case Study Card
```html
<article class="case-study-card">
    <div class="case-study-image">
        <img src="assets/images/your-case-study.jpg" alt="Your Case Study" loading="lazy">
    </div>
    <div class="case-study-content">
        <h3 class="case-study-title">Your Case Study Title</h3>
        <p class="case-study-excerpt">Brief description of your case study...</p>
        <div class="case-study-meta">
            <span class="tag">Tag 1</span>
            <span class="tag">Tag 2</span>
        </div>
        <a href="case-studies/your-case-study.html" class="case-study-link">Read Case Study →</a>
    </div>
</article>
```

## 🎨 Customization

### Colors
The color scheme is defined using CSS custom properties in `style.css`:
```css
:root {
    --primary-color: #3b82f6;
    --primary-dark: #2563eb;
    --primary-light: #60a5fa;
    --primary-lighter: #dbeafe;
    --secondary-color: #6366f1;
    --accent-color: #0ea5e9;
    --accent-light: #7dd3fc;
    /* ... more colors */
}
```

### Typography
The portfolio uses Inter font family. You can change it by updating the font import in the HTML files and the `--font-family` variable in CSS.

### Layout
The layout uses CSS Grid and Flexbox for responsive design. Breakpoints are defined for:
- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 768px

## 🧪 Testing

The project includes a comprehensive test suite covering:
- HTML structure validation
- Accessibility features
- Responsive design elements
- Link functionality
- File structure validation
- Performance metrics

Run tests with:
```bash
npm test
```

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly navigation
- Optimized images for different screen sizes

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly
- Focus indicators

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Other Platforms
The portfolio can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **LinkedIn**: [Alisha Javed](https://linkedin.com/in/alishajaved)
- **GitHub**: [@alishajaved](https://github.com/alishajaved)

---

Built with ❤️ for product management
