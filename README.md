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

## 📝 Adding New Case Studies - Step by Step Guide

This guide will help you add new case studies to your portfolio, even if you're not technical. Follow these steps carefully to ensure everything works correctly.

### 🎯 Overview
When you add a new case study, you'll need to:
1. Add an image for the case study
2. Create a new HTML page for the case study
3. Add a card to the homepage to showcase the case study

### 📋 Step 1: Prepare Your Case Study Image

**What you need:**
- A high-quality image related to your case study (JPG or PNG format)
- Recommended size: 800x600 pixels or similar aspect ratio
- File size: Keep under 2MB for fast loading

**How to do it:**
1. Save your image with a descriptive name (e.g., `my-new-project.jpg`)
2. Place the image in the `assets/images/` folder
3. Make sure the filename has no spaces (use hyphens instead)

**Example:**
```
assets/images/
├── Alisha.jpg
├── payroll-workflow.jpg
├── virtual-taboo.jpg
└── my-new-project.jpg  ← Your new image here
```

### 📄 Step 2: Create the Case Study HTML Page

**What you need:**
- The case study template file
- Your case study content

**How to do it:**

1. **Open the template file:**
   - Navigate to the `templates/` folder
   - Open `case-study-template.html` in any text editor (Notepad, TextEdit, VS Code, etc.)

2. **Save as a new file:**
   - Click "File" → "Save As"
   - Navigate to the `case-studies/` folder
   - Name your file: `your-case-study-name.html` (use hyphens, no spaces)
   - Example: `customer-onboarding.html`

3. **Replace the placeholder content:**
   Find and replace these placeholders with your actual content:

   **Page Title and Meta Information:**
   ```html
   <title>[CASE_STUDY_TITLE] - Alisha Javed</title>
   ```
   Replace `[CASE_STUDY_TITLE]` with your actual title (e.g., "Customer Onboarding Optimization")

   **Breadcrumb Navigation:**
   ```html
   <span>[CASE_STUDY_TITLE]</span>
   ```
   Replace with your case study title

   **Case Study Header:**
   ```html
   <h1 class="case-study-title">[CASE_STUDY_TITLE]</h1>
   ```
   Replace with your case study title

   **Project Details:**
   ```html
   <span class="meta-value">[ROLE]</span>
   <span class="meta-value">[DURATION]</span>
   <span class="meta-value">[TOOLS]</span>
   ```
   Replace with:
   - `[ROLE]`: Your role (e.g., "Product Manager", "Product Analyst")
   - `[DURATION]`: Project duration (e.g., "3 months", "6 weeks")
   - `[TOOLS]`: Tools used (e.g., "Figma, Jira, Google Analytics")

   **Tags:**
   ```html
   <span class="tag">[TAG_1]</span>
   <span class="tag">[TAG_2]</span>
   <span class="tag">[TAG_3]</span>
   ```
   Replace with relevant tags (e.g., "User Research", "Process Improvement", "Data Analysis")

   **Content Sections:**
   Replace each section with your actual content:
   - `[EXECUTIVE_SUMMARY]` - Brief overview of the project
   - `[PROBLEM_STATEMENT]` - What problem you solved
   - `[RESEARCH_&_DISCOVERY]` - Your research process
   - `[SOLUTION_DESIGN]` - How you designed the solution
   - `[IMPLEMENTATION]` - How you implemented it
   - `[RESULTS_&_IMPACT]` - The results and impact
   - `[LESSONS_LEARNED]` - What you learned
   - `[NEXT_STEPS]` - Future plans

4. **Update the navigation links:**
   - Find the navigation section at the bottom
   - Update the "Previous Case Study" and "Next Case Study" links to point to the correct files

### 🏠 Step 3: Add Case Study Card to Homepage

**What you need:**
- The main `index.html` file
- Your case study details

**How to do it:**

1. **Open the homepage:**
   - Open `index.html` in your text editor

2. **Find the case studies section:**
   - Look for the section that starts with `<section id="case-studies" class="case-studies">`
   - Find the `<div class="case-studies-grid">` section

3. **Add your new case study card:**
   - Copy one of the existing case study cards
   - Paste it before the closing `</div>` of the case studies grid
   - Update the content with your case study information

**Example of what to add:**
```html
<article class="case-study-card">
    <div class="case-study-image">
        <img src="assets/images/your-case-study-image.jpg" alt="Your Case Study Description" loading="lazy">
    </div>
    <div class="case-study-content">
        <h3 class="case-study-title">Your Case Study Title</h3>
        <p class="case-study-excerpt">
            Brief description of your case study (1-2 sentences).
        </p>
        <div class="case-study-meta">
            <span class="tag">Tag 1</span>
            <span class="tag">Tag 2</span>
        </div>
        <a href="case-studies/your-case-study-name.html" class="case-study-link">Read Case Study →</a>
    </div>
</article>
```

**What to replace:**
- `your-case-study-image.jpg` → Your actual image filename
- `Your Case Study Description` → Brief description for the image
- `Your Case Study Title` → Your actual case study title
- `Brief description of your case study` → 1-2 sentence summary
- `Tag 1`, `Tag 2` → Your relevant tags
- `your-case-study-name.html` → Your actual HTML filename

### ✅ Step 4: Test Your Changes

1. **Open the homepage in a web browser:**
   - Double-click on `index.html` to open it
   - Check that your new case study card appears
   - Click on the "Read Case Study →" link to make sure it opens your new page

2. **Check the case study page:**
   - Verify all content displays correctly
   - Check that navigation links work
   - Ensure the image appears properly

### 🔧 Troubleshooting Common Issues

**Image not showing:**
- Check that the image filename matches exactly (case-sensitive)
- Make sure the image is in the `assets/images/` folder
- Verify the file extension is correct (.jpg, .png, etc.)

**Link not working:**
- Check that the HTML filename matches exactly
- Make sure the file is in the `case-studies/` folder
- Verify there are no spaces in the filename

**Page looks broken:**
- Check that all HTML tags are properly closed
- Make sure you didn't accidentally delete any important code
- Verify that quotes and brackets are properly matched

### 📝 Example: Adding "Customer Onboarding" Case Study

Here's a complete example of adding a new case study:

1. **Image:** Save `customer-onboarding.jpg` in `assets/images/`

2. **HTML File:** Create `case-studies/customer-onboarding.html` using the template

3. **Homepage Card:** Add this to `index.html`:
```html
<article class="case-study-card">
    <div class="case-study-image">
        <img src="assets/images/customer-onboarding.jpg" alt="Customer Onboarding Process" loading="lazy">
    </div>
    <div class="case-study-content">
        <h3 class="case-study-title">Customer Onboarding Optimization</h3>
        <p class="case-study-excerpt">
            Reduced onboarding time by 40% through process redesign and automation.
        </p>
        <div class="case-study-meta">
            <span class="tag">Process Optimization</span>
            <span class="tag">User Experience</span>
        </div>
        <a href="case-studies/customer-onboarding.html" class="case-study-link">Read Case Study →</a>
    </div>
</article>
```

### 💡 Tips for Success

- **Keep filenames simple:** Use hyphens, no spaces or special characters
- **Test as you go:** Check your changes in a browser frequently
- **Backup your work:** Make copies of files before making major changes
- **Use consistent naming:** Follow the same pattern for all your case studies
- **Optimize images:** Compress large images to keep the site fast

### 🆘 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Compare your files with the existing case studies
3. Make sure all file paths and names match exactly
4. Test each step before moving to the next one

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
