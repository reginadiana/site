/**
 * Language switching functionality for the portfolio
 */
document.addEventListener('DOMContentLoaded', function () {
  const languageSwitch = document.getElementById('language-switch');
  console.log('Language switch element:', languageSwitch);

  if (!languageSwitch) {
    console.error('Language switch element not found!');
    return;
  }

  // Always set Portuguese as default, but respect saved preferences
  const savedLanguage = localStorage.getItem('language');
  const currentLanguage = savedLanguage || 'pt';
  console.log('Current language:', currentLanguage);

  // Apply the language
  document.body.setAttribute('data-language', currentLanguage);
  languageSwitch.checked = currentLanguage === 'en';

  // If saved language is English, update content accordingly
  if (currentLanguage === 'en') {
    updateContent(currentLanguage);
  } else {
    // Force Portuguese otherwise
    localStorage.setItem('language', 'pt');
  }

  // Toggle language on switch change
  languageSwitch.addEventListener('change', function () {
    console.log('Toggle clicked, new state:', this.checked);
    const newLanguage = this.checked ? 'en' : 'pt';
    document.body.setAttribute('data-language', newLanguage);
    localStorage.setItem('language', newLanguage);
    updateContent(newLanguage);
  });
});

/**
 * Updates the page content based on the selected language
 * @param {string} language - The language code ('en' or 'pt')
 */
function updateContent(language) {
  console.log('Updating content to language:', language);
  // This function will be defined in each page's script
  if (window.translatePage) {
    window.translatePage(language);
  } else {
    console.error('translatePage function not found');
  }
} 