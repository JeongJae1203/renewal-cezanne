import { createTab, totalTop } from '../function';

// a태그에 링크가 없는 경우
document.addEventListener('click', (e) => {
  if(e.target.matches('a[href="#"]')) {
    e.preventDefault();
  }
});


const licenseEl = document.querySelector('.common__tab')
      , tabEls = licenseEl.querySelectorAll('.portfolio__tab')
      , tabWrap = licenseEl.querySelector('.tab__contents')
      , tabContentEls = licenseEl.querySelectorAll('.tab__content')
      , clazz = 'active';

createTab(tabEls, tabWrap, tabContentEls, clazz);


tabContentEls.forEach(tabContentEl => {
  const topEl = tabContentEl.querySelector('.common__top')
      , liEls = tabContentEl.querySelectorAll('.portfolio__list > li');
  
  totalTop(topEl, liEls);
})