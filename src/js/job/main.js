const container = document.querySelector('.detail__btn__container')
    , button = container.querySelector('button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();

  location.href = '../../html/job/job.html';
});