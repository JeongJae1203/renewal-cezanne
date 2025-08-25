// a태그에 링크가 없는 경우
document.addEventListener('click', (e) => {
  if(e.target.matches('a[href="#"]')) {
    e.preventDefault();
  }
});

// ~바로가기 버튼
document.addEventListener('DOMContentLoaded', () => {
  // 태그 불러오기
  const menuBtn = document.querySelector('.menuBtn')
      , btnEl = menuBtn.querySelector('button');
      // , btnEl = menuBtn.querySelector('button');all
  // 불러온 태그자리.addEventListener('click', () => {
  btnEl.addEventListener('click', () => {
  //   location.href = '링크 넣기';
    location.href = '#';
  });
})

