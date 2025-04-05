/**
 * Translation handler for index.html
 */
window.translatePage = function (language) {
  try {
    // Get page-specific translations
    const pageTranslations = translations.index[language];

    if (!pageTranslations) {
      console.error('Translations not found for language:', language);
      return;
    }

    // Update navigation
    document.querySelectorAll('.header__nav a')[0].textContent = pageTranslations['nav-curriculum'];
    document.querySelectorAll('.header__nav a')[1].textContent = pageTranslations['nav-articles'];

    // Update about section
    document.querySelector('#about h1').textContent = pageTranslations['about-title'];
    document.querySelector('.about__intro').textContent = pageTranslations['about-intro'];

    // Update journey items
    const journeyItems = document.querySelectorAll('.about__journey-item .about__journey-content p');
    journeyItems[0].textContent = pageTranslations['journey-1'];
    journeyItems[1].textContent = pageTranslations['journey-2'];
    journeyItems[2].textContent = pageTranslations['journey-3'];
    journeyItems[3].textContent = pageTranslations['journey-4'];

    // Update values
    document.querySelector('.about__values h3').textContent = pageTranslations['values-title'];
    const valueItems = document.querySelectorAll('.about__values-list li span:not(.about__value-icon)');
    valueItems[0].textContent = pageTranslations['value-1'];
    valueItems[1].textContent = pageTranslations['value-2'];
    valueItems[2].textContent = pageTranslations['value-3'];
    valueItems[3].textContent = pageTranslations['value-4'];
    valueItems[4].textContent = pageTranslations['value-5'];

    // Update skills section
    document.querySelector('#skills h1').textContent = pageTranslations['skills-title'];
    const skillTitles = document.querySelectorAll('.skills h2');
    skillTitles[0].textContent = pageTranslations['frontend-title'];
    skillTitles[1].textContent = pageTranslations['backend-title'];
    skillTitles[2].textContent = pageTranslations['technologies-title'];
    skillTitles[3].textContent = pageTranslations['testing-title'];
    skillTitles[4].textContent = pageTranslations['design-title'];
    skillTitles[5].textContent = pageTranslations['cloud-title'];

    // Update experience section
    document.querySelector('#experience h1').textContent = pageTranslations['experience-title'];
    document.querySelector('.experience__item h2').textContent = pageTranslations['experience-tino-title'];

    // Update education section
    document.querySelector('#education h1').textContent = pageTranslations['education-title'];

    // Update footer
    document.querySelector('footer p').textContent = pageTranslations['footer-made'];

    console.log('Index page translated to:', language);
  } catch (error) {
    console.error('Error translating index page:', error);
  }
}; 