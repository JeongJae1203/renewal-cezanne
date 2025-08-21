document.addEventListener('DOMContentLoaded', () => {
  const noticeContainer = document.querySelector('[data-container]')
      , countEl = document.querySelector('[data-count]')
      , tableEl = noticeContainer.querySelector('table')
      , tbodyTrEl = tableEl.querySelectorAll('tbody > tr');

  // total 개수 표출
  countEl.textContent = tbodyTrEl.length;

});

document.addEventListener('click', (e) => {
  if (e.target.matches('a[href="#"]')) {
    e.preventDefault();
  }
});