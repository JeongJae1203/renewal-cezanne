const job = document.querySelector('.job')
  , top = job.querySelector('.job__top')
  , countEl = top.querySelector('[data-count]')
  , wrap = job.querySelector('.job__wrap')
  , items = wrap.querySelectorAll('.job__item');

countEl.textContent = items.length;