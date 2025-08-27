// 스와이퍼
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.about_visual', {
    // loop : 반복
    // autoplay : 자동재생
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    }
  });
});


// ScrollMagic
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic
  .Scene({

    triggerElement : spyEl,

    triggerHook : .9
  })
  // show 클래스를 추가/삭제
  .setClassToggle(spyEl, 'show') 
  .addTo(new ScrollMagic.Controller());
});