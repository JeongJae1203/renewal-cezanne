document.addEventListener('click', (e) => {
  if (e.target.matches('a[href="#"]')) {
    e.preventDefault();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const topBtn = document.querySelector('#topBtn')
      , btnEl = topBtn.querySelector('button');

  /**
   * Window Event Scroll
   */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  });

  /**
   * Top Button Click Event
   */
  btnEl.addEventListener('click', (e) => {
    e.stopPropagation();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});