document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('[data-container]')
      , tab_list = container.querySelector('[data-tab-list]')
      , tabEl = tab_list.querySelectorAll('.license__tab')
      , tab_contents = container.querySelector('.tab__contents')
      , tab_contentEls = tab_contents.querySelectorAll('.tab__content');

  tabEl.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      const TARGET = e.currentTarget.dataset.target || ''
          , contentEl = tab_contents.querySelector('#' + TARGET);

      tabEl.forEach(tabEl => {
        tabEl.parentElement.classList.remove('active');
      });

      tab_contentEls.forEach(tabContEl => {
        tabContEl.classList.remove('active');
      })

      e.currentTarget.parentElement.classList.add('active');
      contentEl.classList.add('active');
    });
  })
});