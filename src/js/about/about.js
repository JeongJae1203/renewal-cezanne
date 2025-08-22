// 스와이퍼
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.about_visual', {
    // option
    // loop : 반복
    // autoplay : 자동재생
    loop: true,
    autoplay: true,
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

// ~바로가기 버튼
document.addEventListener('DOMContentLoaded', () => {
  // 태그 불러오기
  // 불러온 태그자리.addEventListener('click', () => {
  //   location.href = '링크 넣기';
  // });
})


// ScrollMagic
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic
  .Scene({

    triggerElement : spyEl,

    triggerHook : .5
  })
  // show 클래스를 추가/삭제
  .setClassToggle(spyEl, 'show') 
  .addTo(new ScrollMagic.Controller())
});