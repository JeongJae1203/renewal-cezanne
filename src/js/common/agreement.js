const contents_body = document.querySelector('#contents_body')
    , tabMenu = contents_body.querySelector('.tab__menu')
    , buttonEls = tabMenu.querySelectorAll('button')
    , tabContentEls = contents_body.querySelectorAll('.tab__content');


buttonEls.forEach((button) => {
  button.addEventListener('click', (e) => {
    const TARGET = e.currentTarget.dataset.target || ''
        , contentEl = contents_body.querySelector(TARGET);

    buttonEls.forEach(btn => {
      btn.classList.remove('active');
    });

    tabContentEls.forEach(tabContent => {
      tabContent.classList.remove('active');
    })

    e.target.classList.add('active');
    contentEl.classList.add('active');
  });
});