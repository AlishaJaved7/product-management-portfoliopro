const fs = require('fs');
const path = require('path');

// Test suite for Portfolio Website
describe('Portfolio Website Tests', () => {
  let indexHtml;
  let styleCss;

  beforeAll(() => {
    indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
    styleCss = fs.readFileSync(path.join(__dirname, '../style.css'), 'utf8');
  });

  describe('HTML Structure Tests', () => {
    test('should have proper HTML5 doctype', () => {
      expect(indexHtml).toMatch(/<!DOCTYPE html>/);
    });

    test('should have valid HTML structure with head and body', () => {
      expect(indexHtml).toMatch(/<html[^>]*>/);
      expect(indexHtml).toMatch(/<head[^>]*>/);
      expect(indexHtml).toMatch(/<body[^>]*>/);
    });

    test('should have proper meta tags for responsive design', () => {
      expect(indexHtml).toMatch(/<meta name="viewport"/);
      expect(indexHtml).toMatch(/content="width=device-width, initial-scale=1.0"/);
    });

    test('should have proper title tag', () => {
      expect(indexHtml).toMatch(/<title>Alisha Javed.*Product Manager.*<\/title>/);
    });

    test('should link to CSS file', () => {
      expect(indexHtml).toMatch(/<link[^>]*href="style\.css"[^>]*>/);
    });
  });

  describe('Content Structure Tests', () => {
    test('should have main heading with name', () => {
      expect(indexHtml).toMatch(/<h1[^>]*>[^<]*Hello, I['']m\s*<span[^>]*>Alisha Javed<\/span>[^<]*<\/h1>/);
    });

    test('should have profile image', () => {
      expect(indexHtml).toMatch(/<img[^>]*src="[^"]*Alisha\.jpg"[^>]*>/);
    });

    test('should have case studies section', () => {
      expect(indexHtml).toMatch(/<h2[^>]*>.*Case Studies.*<\/h2>/);
    });

    test('should have resume download link', () => {
      expect(indexHtml).toMatch(/href="[^"]*resume[^"]*\.pdf"/);
    });

    test('should have navigation menu', () => {
      expect(indexHtml).toMatch(/<nav[^>]*>/);
    });
  });

  describe('Accessibility Tests', () => {
    test('should have alt text for images', () => {
      const imgTags = indexHtml.match(/<img[^>]*>/g) || [];
      imgTags.forEach(imgTag => {
        expect(imgTag).toMatch(/alt="[^"]*"/);
      });
    });

    test('should have semantic HTML elements', () => {
      expect(indexHtml).toMatch(/<header[^>]*>/);
      expect(indexHtml).toMatch(/<main[^>]*>/);
      expect(indexHtml).toMatch(/<footer[^>]*>/);
    });

    test('should have proper heading hierarchy', () => {
      const h1Count = (indexHtml.match(/<h1[^>]*>/g) || []).length;
      expect(h1Count).toBeGreaterThan(0);
      expect(h1Count).toBeLessThanOrEqual(1); // Only one h1 per page
    });
  });

  describe('Responsive Design Tests', () => {
    test('should have CSS media queries', () => {
      expect(styleCss).toMatch(/@media/);
    });

    test('should have mobile-first responsive design', () => {
      expect(styleCss).toMatch(/max-width/);
      expect(styleCss).toMatch(/flexbox|grid/);
    });

    test('should have proper font sizing units', () => {
      expect(styleCss).toMatch(/rem|em|%/);
    });
  });

  describe('Link Functionality Tests', () => {
    test('should have working case study links', () => {
      const caseStudyLinks = indexHtml.match(/href="case-studies\/[^"]*\.html"/g) || [];
      expect(caseStudyLinks.length).toBeGreaterThan(0);
    });

    test('should have working resume link', () => {
      expect(indexHtml).toMatch(/href="[^"]*resume[^"]*\.pdf"/);
    });

    test('should have external links with target="_blank"', () => {
      const externalLinks = indexHtml.match(/href="https?:\/\/[^"]*"[^>]*target="_blank"/g) || [];
      expect(externalLinks.length).toBeGreaterThan(0);
    });
  });

  describe('File Structure Tests', () => {
    test('should have case study template file', () => {
      const templateExists = fs.existsSync(path.join(__dirname, '../templates/case-study-template.html'));
      expect(templateExists).toBe(true);
    });

    test('should have assets directory structure', () => {
      const assetsExists = fs.existsSync(path.join(__dirname, '../assets'));
      const imagesExists = fs.existsSync(path.join(__dirname, '../assets/images'));
      expect(assetsExists).toBe(true);
      expect(imagesExists).toBe(true);
    });
  });

  describe('Performance Tests', () => {
    test('should have optimized images', () => {
      const imgTags = indexHtml.match(/<img[^>]*>/g) || [];
      imgTags.forEach(imgTag => {
        expect(imgTag).toMatch(/loading="lazy"/);
      });
    });

    test('should have minimal CSS file size', () => {
      const cssSize = styleCss.length;
      expect(cssSize).toBeLessThan(50000); // Less than 50KB
    });
  });
}); 