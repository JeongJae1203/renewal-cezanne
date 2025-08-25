document.addEventListener('DOMContentLoaded', () => {
  const agreeContainer = document.querySelector('[data-agree-container]')
      , detailBtn = agreeContainer.querySelector('button')
      , btnContainer = document.querySelector('.write__btn__container')
      , sumbitBtn = btnContainer.querySelector('button');

  detailBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();

    e.currentTarget.parentElement.classList.toggle('active');
  });

  sumbitBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();

    alert('해당, 기능은 준비 중입니다.');
  });
});