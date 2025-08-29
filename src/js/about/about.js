// 스와이퍼
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.about_visual', {
    // loop : 반복
    // autoplay : 자동재생
    // loopAdditionalSlides: 0,
    // init: true,
    // initialSlide: 0,
    // loopedSlides:16,
    autoplay: {
      delay: 3000,
      // disableOnlnteration: true,
    },
    loop: true,
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