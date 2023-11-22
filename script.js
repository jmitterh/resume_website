// Load Sidebar and Markdown Langauge
document.addEventListener('DOMContentLoaded', function() {
    // Define the fetchAndDisplayMarkdown function here
    function fetchAndDisplayMarkdown(elementId, filePath) {
        const element = document.getElementById(elementId);
        if (element) {
            fetch(filePath)
                .then(response => response.text())
                .then(markdown => {
                    const converter = new showdown.Converter();
                    const dirtyHtml = converter.makeHtml(markdown);
                    const cleanHtml = DOMPurify.sanitize(dirtyHtml);
                    element.innerHTML = cleanHtml;
                })
                .catch(error => console.error(`Error fetching Markdown for #${elementId}:`, error));
        }
    }
    // Promise array to hold fetch promises
    const markdownPromises = [
    // Work Experience
    fetchAndDisplayMarkdown('card-text-innowatts', './cards_markdown/work/card-innowatts.md'),
    fetchAndDisplayMarkdown('card-text-gw', './cards_markdown/work/card-gw.md'),
    fetchAndDisplayMarkdown('card-text-lti', './cards_markdown/work/card-lti.md'),
    fetchAndDisplayMarkdown('card-text-bot', './cards_markdown/work/card-bot.md'),
    fetchAndDisplayMarkdown('card-text-hgac', './cards_markdown/work/card-hgac.md'),
    // Skills Overview
    fetchAndDisplayMarkdown('card-text-overview', './cards_markdown/skills/card-overview.md'),
    fetchAndDisplayMarkdown('card-text-uh', './cards_markdown/skills/card-uh.md'),
    fetchAndDisplayMarkdown('card-text-rice', './cards_markdown/skills/card-rice.md'),
    // About
    fetchAndDisplayMarkdown('card-text-about-me', './cards_markdown/about/card-about-me.md'),
    ];

    // Fetch the sidebar and add to promise array
    const sidebarPromise = fetch('sidebar.html')
        .then(response => response.text())
        .then(text => {
            const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
            sidebarPlaceholder.innerHTML = text;

            // Attach event handlers to sidebar links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', setActiveLink);
            });

            // Highlight the active link
            highlightActiveLink();
        })
        .catch(error => console.error('Error loading sidebar:', error));

    // Add sidebar promise to promises array
    markdownPromises.push(sidebarPromise);

    // Use Promise.all to wait for all promises to resolve
    Promise.all(markdownPromises).then(() => {
        hideSpinner();
        highlightActiveLink();
    });
});
// Fetch & Display Markdown
function fetchAndDisplayMarkdown(elementId, filePath) {
    const element = document.getElementById(elementId);
    if (element) {
        // Return the fetch promise so Promise.all can wait for it
        return fetch(filePath)
            .then(response => response.text())
            .then(markdown => {
                const converter = new showdown.Converter();
                const dirtyHtml = converter.makeHtml(markdown);
                const cleanHtml = DOMPurify.sanitize(dirtyHtml);
                element.innerHTML = cleanHtml;
            })
            .catch(error => console.error(`Error fetching Markdown for #${elementId}:`, error));
    } else {
        // If the element does not exist, return a resolved promise
        return Promise.resolve();
    }
}
// Hide Spinner
function hideSpinner() {
  // You may want to set a timeout to ensure the spinner is visible
  // for at least a few hundred milliseconds, so it doesn't flash too quickly.
  setTimeout(() => {
    document.getElementById('loadingSpinner').style.display = 'none';
  }, 500); // Adjust time as necessary
}

// Function to highlight the active section on the sidebar
function highlightActiveLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentUrl = window.location.pathname.split('/').pop(); // this gets the current file name

    // console.log("Current URL:", currentUrl);

    // Check if on index.html or root path
    if (currentUrl === 'index.html' || currentUrl === '') {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    } else {
        navLinks.forEach(link => {
            // console.log("Link href:", link.getAttribute('href'));
            if (link.getAttribute('href').includes(currentUrl)) {
                link.classList.add('active');
                // console.log("Active class added to:", link);
            } else {
                link.classList.remove('active');
            }
        });
    }
}


// Function to handle click event on each nav link
function setActiveLink(event) {
    // Prevent default anchor behavior
    event.preventDefault();

    // Remove 'active' class from all links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    event.currentTarget.classList.add('active');

    // Optionally, navigate to the href of the clicked link
    window.location.href = event.currentTarget.getAttribute('href');
}
