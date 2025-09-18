# Jean-Paul's Resume Website
![Website Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Theme](https://img.shields.io/badge/Theme-Dark%2FLight-blue) ![Responsive](https://img.shields.io/badge/Design-Responsive-orange)

A responsive personal portfolio website featuring a modern dark/light theme toggle, showcasing professional experience in data engineering and analysis. It is hosted on [Bytehost](https://jpm.social-networking.me/).

Website to showcase my resume


## 🌟 Features

### Theme System
- **Dark/Light Mode Toggle**: Seamless switching between dark and light themes
- **Persistent Theme**: User preference saved in localStorage
- **Circuit Board Background**: Custom background with theme-appropriate styling
- **Smooth Transitions**: Animated theme changes for professional appearance

### Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Collapsible Sidebar**: Hamburger menu for mobile navigation
- **Touch-Friendly**: Large touch targets and intuitive interactions
- **Bootstrap Integration**: Built on Bootstrap 5.3.2 framework

### Content Management
- **Markdown Integration**: Dynamic content loading from markdown files
- **Modular Structure**: Organized content in separate markdown files
- **Sanitized Output**: DOMPurify integration for security
- **Loading States**: Smooth loading animations

## 🚀 Live Demo

Visit the live website: [jpm.social-networking.me](https://jpm.social-networking.me/)

## 📁 Project Structure

```
├── index.html                 # Landing page
├── about.html                # About me page
├── my_skills.html            # Skills and education
├── work.html                 # Work experience
├── contact.html              # Contact information
├── contact_form.html         # Contact form (alternative)
├── sidebar.html              # Reusable sidebar component
├── style.css                 # Main stylesheet with theme system
├── script.js                 # JavaScript functionality
├── sendemail.php            # Email handling (not implemented)
├── background.png           # Circuit board background image
├── .htaccess               # Apache server configuration
├── cards_markdown/         # Content directory
│   ├── about/
│   │   └── card-about-me.md
│   ├── skills/
│   │   ├── card-overview.md
│   │   ├── card-uh.md
│   │   └── card-rice.md
│   └── work/
│       ├── card-innowatts.md
│       ├── card-gw.md
│       ├── card-lti.md
│       ├── card-bot.md
│       └── card-hgac.md
└── favicon_io/             # Favicon files
```

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and accessibility
- **CSS3**: Custom properties (variables) for theming
- **JavaScript (ES6+)**: Modern JavaScript features
- **Bootstrap 5.3.2**: Responsive framework

### Libraries & Tools
- **Showdown.js 2.1.0**: Markdown to HTML conversion
- **DOMPurify 3.0.6**: XSS protection for dynamic content
- **Font Awesome 5.15.1**: Social media icons
- **Apache**: Web server with custom .htaccess configuration

### Development
- **Modular Architecture**: Reusable components and content separation
- **Version Control**: Git integration
- **IDE Support**: Microsoft VS-Code project files included

## 🎨 Theme System

### CSS Custom Properties
The website uses CSS custom properties for comprehensive theming:

```css
:root {
    --bg-primary: #000000;
    --text-primary: #ffffff;
    --accent-color: #e63946;
    /* ... more variables */
}

[data-theme="light"] {
    --bg-primary: #f8f9fa;
    --text-primary: #212529;
    --accent-color: #007bff;
    /* ... light theme overrides */
}
```

### Theme Features
- **Automatic Persistence**: Theme choice saved across sessions
- **Smooth Transitions**: 0.3s ease transitions between themes
- **Background Overlay**: Circuit board visible in both themes with appropriate opacity
- **Component Theming**: All UI elements adapt to selected theme

## 📱 Installation & Setup

### Prerequisites
- Web server (Apache recommended)
- Modern web browser with ES6+ support

### Local Development
1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd portfolio
   ```

2. **Install Live Server Extension** (VS Code)
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"


### Production Deployment
1. Upload all files to web server
2. Ensure `.htaccess` is properly configured
3. Verify all markdown files are accessible
4. Test theme toggle functionality

## 📝 Content Management

### Adding New Content
1. Create markdown files in appropriate `cards_markdown/` subdirectory
2. Update `script.js` to include new markdown file:
   ```javascript
   fetchAndDisplayMarkdown('element-id', './path/to/file.md')
   ```
3. Add corresponding HTML element with matching ID

### Markdown File Structure
- **Work Experience**: `cards_markdown/work/`
- **Skills & Education**: `cards_markdown/skills/`
- **About Information**: `cards_markdown/about/`

>.gitignore is used for the above

## 🔧 Configuration

### Theme Customization
Modify CSS custom properties in `style.css`:
- Colors: Update `--accent-color`, `--bg-primary`, etc.
- Typography: Adjust font sizes and families
- Spacing: Modify margins and padding variables
- Animations: Customize transition timings

### Background Customization
- Replace `background.png` with your preferred image
- Adjust opacity in light theme overlay:
  ```css
  background: rgba(248, 249, 250, 0.9); /* Adjust 0.85 opacity */
  ```

## 🌐 Browser Support

- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **CSS Features**: CSS Grid, Flexbox, Custom Properties
- **JavaScript**: ES6+ features, localStorage API
- **Mobile**: iOS 13+, Android 8+

## 📊 Performance

- **Lightweight**: ~50KB total size (excluding background image)
- **Fast Loading**: Optimized images and minimal dependencies
- **Caching**: Configured via .htaccess for optimal performance
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers and devices
5. Submit a pull request

### Code Style
- Use semantic HTML5 elements
- Follow CSS BEM methodology where applicable
- Write descriptive commit messages
- Maintain responsive design principles

## 📞 Contact

**Jean Paul Mitterhofer**
- **LinkedIn**: [jeanpaulmitterhofer](https://www.linkedin.com/in/jeanpaulmitterhofer/)
- **GitHub**: [jmitterh](https://github.com/jmitterh)
- **Email**: jp86mitter@gmail.com

## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## 🔮 Future Enhancements

- [ ] Blog section implementation
- [ ] Contact form backend integration
- [ ] SEO optimization and meta tags
- [ ] Analytics integration
- [ ] Performance monitoring
- [ ] Accessibility improvements (WCAG compliance)
- [ ] Progressive Web App (PWA) features
- [ ] Multi-language support

## 📈 Changelog

### Version 2.0 - Current
- ✅ Added dark/light theme toggle
- ✅ Improved mobile responsiveness
- ✅ Enhanced loading animations
- ✅ CSS custom properties implementation
- ✅ Theme persistence with localStorage

### Version 1.0 - Initial Release
- ✅ Basic portfolio structure
- ✅ Markdown content integration
- ✅ Mobile navigation
- ✅ Social media links
- ✅ Bootstrap integration

---

*Built with ❤️ by Jean Paul Mitterhofer - Data Engineer & Python Developer*


## Usage
- All html, css, and javascript are on root directory. 
- All written summaries are stored in folder `cards_markdown`.
- sendemail.php works as expected.


## Dependencies

- bootstrap@5.3.2/dist/css/bootstrap.min.css
- bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js
- font-awesome/5.15.1 _(social media icons)_
- showdown@2.1.0/dist/showdown.min.js _(markdown to HTML)_
- dompurify@3.0.6/dist/purify.min.js _(DOMPurify production version)_
