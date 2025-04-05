/**
 * Translation handler for curriculo.html
 */
window.translatePage = function (language) {
  try {
    // Get page-specific translations
    const pageTranslations = translations.curriculo[language];

    if (!pageTranslations) {
      console.error('Translations not found for language:', language);
      return;
    }

    // Update back button and download button
    document.querySelector('header a').textContent = pageTranslations['back-button'];
    document.querySelector('#download-pdf').textContent = pageTranslations['download-button'];

    // Update intro section
    const sections = document.querySelectorAll('section');

    // First section (intro)
    sections[0].querySelector('h1').textContent = pageTranslations['name'];
    sections[0].querySelector('p:nth-child(2)').textContent = pageTranslations['title'];
    sections[0].querySelector('p:nth-child(3)').textContent = pageTranslations['intro'];

    // Experience section
    sections[1].querySelector('h2').textContent = pageTranslations['experience-heading'];

    const experienceItems = sections[1].querySelectorAll('div > div');

    // First experience item
    experienceItems[0].querySelector('p:nth-child(1)').textContent = pageTranslations['experience-1-date'];
    experienceItems[0].querySelector('h3').textContent = pageTranslations['experience-1-title'];
    experienceItems[0].querySelector('p:nth-child(3)').textContent = pageTranslations['experience-1-company'];
    experienceItems[0].querySelector('p:nth-child(4)').textContent = pageTranslations['experience-1-desc'];

    const exp1Bullets = experienceItems[0].querySelectorAll('ul li');
    exp1Bullets[0].textContent = pageTranslations['experience-1-bullet-1'];
    exp1Bullets[1].textContent = pageTranslations['experience-1-bullet-2'];
    exp1Bullets[2].textContent = pageTranslations['experience-1-bullet-3'];
    exp1Bullets[3].textContent = pageTranslations['experience-1-bullet-4'];

    // Second experience item
    experienceItems[1].querySelector('p:nth-child(1)').textContent = pageTranslations['experience-2-date'];
    experienceItems[1].querySelector('h3').textContent = pageTranslations['experience-2-title'];
    experienceItems[1].querySelector('p:nth-child(3)').textContent = pageTranslations['experience-2-company'];
    experienceItems[1].querySelector('p:nth-child(4)').textContent = pageTranslations['experience-2-desc'];

    const exp2Bullets = experienceItems[1].querySelectorAll('ul li');
    exp2Bullets[0].textContent = pageTranslations['experience-2-bullet-1'];
    exp2Bullets[1].textContent = pageTranslations['experience-2-bullet-2'];
    exp2Bullets[2].textContent = pageTranslations['experience-2-bullet-3'];

    // Third experience item
    experienceItems[2].querySelector('p:nth-child(1)').textContent = pageTranslations['experience-3-date'];
    experienceItems[2].querySelector('h3').textContent = pageTranslations['experience-3-title'];
    experienceItems[2].querySelector('p:nth-child(3)').textContent = pageTranslations['experience-3-company'];
    experienceItems[2].querySelector('p:nth-child(4)').textContent = pageTranslations['experience-3-desc'];

    const exp3Bullets = experienceItems[2].querySelectorAll('ul li');
    exp3Bullets[0].textContent = pageTranslations['experience-3-bullet-1'];
    exp3Bullets[1].textContent = pageTranslations['experience-3-bullet-2'];
    exp3Bullets[2].textContent = pageTranslations['experience-3-bullet-3'];

    // Education section
    sections[2].querySelector('h2').textContent = pageTranslations['education-heading'];

    const educationItems = sections[2].querySelectorAll('div > div');
    educationItems[0].querySelector('p:nth-child(1)').textContent = pageTranslations['education-1-date'];
    educationItems[0].querySelector('h3').textContent = pageTranslations['education-1-degree'];
    educationItems[0].querySelector('p:nth-child(3)').textContent = pageTranslations['education-1-school'];

    // Skills section
    sections[3].querySelector('h2').textContent = pageTranslations['skills-heading'];

    const skillCategories = sections[3].querySelectorAll('div > div > h3');
    skillCategories[0].textContent = pageTranslations['skills-frontend'];
    skillCategories[1].textContent = pageTranslations['skills-backend'];
    skillCategories[2].textContent = pageTranslations['skills-technologies'];
    skillCategories[3].textContent = pageTranslations['skills-testing'];
    skillCategories[4].textContent = pageTranslations['skills-design'];
    skillCategories[5].textContent = pageTranslations['skills-cloud'];

    console.log('Curriculo page translated to:', language);
  } catch (error) {
    console.error('Error translating curriculo page:', error);
  }
}; 