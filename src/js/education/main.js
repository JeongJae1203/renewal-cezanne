import { createTab } from '../function';

document.addEventListener('DOMContentLoaded', (e) => {
  const tabContainer = document.querySelector('[data-tab-container]')
      , tabListLi = tabContainer.querySelector('.tab__list')
      , tabList = tabListLi.querySelectorAll('li > a')
      , tabWrap = tabContainer.querySelector('.tab__contents')
      , tabContentEls = tabWrap.querySelectorAll('.tab__content')
      , clazz = 'active';

  createTab(tabList, tabWrap, tabContentEls, clazz);
});