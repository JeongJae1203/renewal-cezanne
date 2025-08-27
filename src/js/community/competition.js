import { totalTop } from '../function';

document.addEventListener('DOMContentLoaded', () => {
  const topEl = document.querySelector('.common__top')
      , container = document.querySelector('[data-container]')
      , eachEl = container.querySelectorAll('table > tbody > tr');

  totalTop(topEl, eachEl);
});