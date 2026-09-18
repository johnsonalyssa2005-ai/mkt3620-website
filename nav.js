document.addEventListener('DOMContentLoaded', () => {
  const primaryNav = document.querySelector('#primary-nav-top');
  const secondaryNav = document.querySelector('#secondary-nav-top');
  const sideNav = document.querySelector('#side-nav-container');

  if (primaryNav) {
    primaryNav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="portfolio.html">Portfolio</a>
      <a href="contact.html">Contact</a>
    `;
  }

  if (secondaryNav) {
    secondaryNav.innerHTML = `
      <a href="https://www.iastate.edu/" target="_blank" rel="noopener">Iowa State University</a>
      <a href="https://www.ivybusiness.iastate.edu/" target="_blank" rel="noopener">Ivy Business</a>
      <a href="contact.html">Google Form</a>
    `;
  }

  if (sideNav) {
    sideNav.innerHTML = `
      <h3>Portfolio Sections</h3>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#leadership">Leadership &amp; Teamwork</a></li>
        <li><a href="#involvement">Campus Involvement</a></li>
        <li><a href="#goals">Career Goals</a></li>
      </ul>
      <h3>Resources</h3>
      <ul>
        <li><a href="Resume2025AlyssaJohnson.html">View Resume</a></li>
        <li><a href="contact.html">Complete Google Form</a></li>
      </ul>
    `;
  }
});
