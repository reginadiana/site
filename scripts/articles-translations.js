/**
 * Translation handler for articles.html
 */
window.translatePage = function (language) {
  try {
    // Get page-specific translations
    const pageTranslations = translations.articles[language];

    if (!pageTranslations) {
      console.error('Translations not found for language:', language);
      return;
    }

    // Update back button
    document.querySelector('.header__btn').textContent = pageTranslations['back-button'];

    // Update article cards - Snowplow
    document.querySelector('#article-snowplow .article__tag:nth-child(1)').textContent = pageTranslations['article-tag-analytics'];
    document.querySelector('#article-snowplow .article__tag:nth-child(2)').textContent = pageTranslations['article-tag-frontend'];
    document.querySelector('#article-snowplow .article__tag:nth-child(3)').textContent = pageTranslations['article-tag-data-driven'];
    document.querySelector('#article-snowplow h1').textContent = pageTranslations['article-snowplow-title'];
    document.querySelector('#article-snowplow p').textContent = pageTranslations['article-snowplow-content'];
    document.querySelector('#article-snowplow .article__link').textContent = pageTranslations['article-link'];

    // Update article cards - HTML
    document.querySelector('#article-html .article__tag:nth-child(1)').textContent = pageTranslations['article-tag-html'];
    document.querySelector('#article-html .article__tag:nth-child(2)').textContent = pageTranslations['article-tag-frontend'];
    document.querySelector('#article-html .article__tag:nth-child(3)').textContent = pageTranslations['article-tag-first-steps'];
    document.querySelector('#article-html h1').textContent = pageTranslations['article-html-title'];
    document.querySelector('#article-html p').textContent = pageTranslations['article-html-content'];
    document.querySelector('#article-html .article__link').textContent = pageTranslations['article-link'];

    // Update article cards - Realtime
    document.querySelector('#article-real-time .article__tag:nth-child(1)').textContent = pageTranslations['article-tag-devtools'];
    document.querySelector('#article-real-time .article__tag:nth-child(2)').textContent = pageTranslations['article-tag-frontend'];
    document.querySelector('#article-real-time .article__tag:nth-child(3)').textContent = pageTranslations['article-tag-css'];
    document.querySelector('#article-real-time h1').textContent = pageTranslations['article-realtime-title'];
    document.querySelector('#article-real-time p').textContent = pageTranslations['article-realtime-content'];
    document.querySelector('#article-real-time .article__link').textContent = pageTranslations['article-link'];

    // Update article cards - Arduino
    document.querySelector('#article-arduino .article__tag:nth-child(1)').textContent = pageTranslations['article-tag-arduino'];
    document.querySelector('#article-arduino .article__tag:nth-child(2)').textContent = pageTranslations['article-tag-electronics'];
    document.querySelector('#article-arduino .article__tag:nth-child(3)').textContent = pageTranslations['article-tag-c'];
    document.querySelector('#article-arduino h1').textContent = pageTranslations['article-arduino-title'];
    document.querySelector('#article-arduino p').textContent = pageTranslations['article-arduino-content'];
    document.querySelector('#article-arduino .article__link').textContent = pageTranslations['article-link'];

    // Update article cards - Mindflex
    document.querySelector('#article-mindflex .article__tag:nth-child(1)').textContent = pageTranslations['article-tag-arduino'];
    document.querySelector('#article-mindflex .article__tag:nth-child(2)').textContent = pageTranslations['article-tag-mindflex'];
    document.querySelector('#article-mindflex .article__tag:nth-child(3)').textContent = pageTranslations['article-tag-c'];
    document.querySelector('#article-mindflex h1').textContent = pageTranslations['article-mindflex-title'];
    document.querySelector('#article-mindflex p').textContent = pageTranslations['article-mindflex-content'];
    document.querySelector('#article-mindflex .article__link').textContent = pageTranslations['article-link'];

    // Update article cards - README
    document.querySelector('#article-readme .article__tag:nth-child(1)').textContent = pageTranslations['article-tag-github'];
    document.querySelector('#article-readme .article__tag:nth-child(2)').textContent = pageTranslations['article-tag-readme'];
    document.querySelector('#article-readme .article__tag:nth-child(3)').textContent = pageTranslations['article-tag-projects'];
    document.querySelector('#article-readme h1').textContent = pageTranslations['article-readme-title'];
    document.querySelector('#article-readme p').textContent = pageTranslations['article-readme-content'];
    document.querySelector('#article-readme .article__link').textContent = pageTranslations['article-link'];

    // Update footer
    document.querySelector('footer p').textContent = pageTranslations['footer-made'];

    console.log('Articles page translated to:', language);
  } catch (error) {
    console.error('Error translating articles page:', error);
  }
}; 