document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (navToggle) {
    console.log('navToggle element found:', navToggle);
  } else {
    console.error('navToggle element not found');
  }

  if (navLinks) {
    console.log('navLinks element found:', navLinks);
  } else {
    console.error('navLinks element not found');
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      console.log('Hamburger clicked');
      navLinks.classList.toggle('show');
    });
  } else {
    console.error('One or more elements not found');
  }
});
