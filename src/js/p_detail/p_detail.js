// a태그에 링크가 없는 경우
document.addEventListener('click', (e) => {
  if(e.target.matches('a[href="#"]')) {
    e.preventDefault();
  }
});