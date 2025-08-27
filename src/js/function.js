// function 만 서술
/**
 * @name totalTop
 * @description total 구현
 * 
 * @param {*} topEl : top 요소
 * @param {*} eachEl : legnth 표현할 요소
 */
export const totalTop = (topEl, eachEl) => {
  const commonTop = topEl
      , countEl = commonTop.querySelector('[data-count]')
      , items = eachEl;

  return countEl.textContent = items.length;
}

/**
 * @name createTab
 * @description 공통 탭 구현
 * 
 * @param {*} tabEls : 탭 요소들
 * @param {*} tabWrap : Tab Content들 감싸는 요소
 * @param {*} tabContentEls : Tab Content들
 * @param {*} clazz : 제어할 클래스명
 */
export const createTab = (tabEls, tabWrap, tabContentEls, clazz) => {
  tabEls.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      
      const TARGET = e.currentTarget.dataset.target || ''
          , contentEl = tabWrap.querySelector('#' + TARGET);

      tabEls.forEach(tabEl => {
        tabEl.parentElement.classList.remove(clazz);
      });

      tabContentEls.forEach(tabContEl => {
        tabContEl.classList.remove(clazz);
      });

      e.currentTarget.parentElement.classList.add(clazz);
      contentEl.classList.add(clazz);
    });
  });
}