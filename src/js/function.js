// function 만 서술
/**
 * @name totalTop
 * @description total 구현
 * 
 * @param {*} topEl : top 요소
 * @param {*} eachEl : legnth 표현할 요소
 */
const totalTop = (topEl, eachEl) => {
  const commonTop = topEl
      , countEl = commonTop.querySelector('[data-count]')
      , items = eachEl;

  return countEl.textContent = items.length;
}