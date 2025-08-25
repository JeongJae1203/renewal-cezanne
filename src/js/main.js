document.addEventListener('DOMContentLoaded', () => {
  // a링크 기본 설정 값
  document.addEventListener('click', (e) => {
    if(e.target.matches('a[href="#"]')) {
      e.preventDefault();
    }
  });

  // swiper :: mainSlide
  new Swiper('.main_visual', {
    loop:true,
    autoplay:true,

    pagination : {
      el:'.swiper-pagination',
    }
  });

  // swiper :: portfolio 
  new Swiper('.slideArea', {
    loop : true,
    effect : "coverflow",
    grabCursor : true,
    centeredSlides : true,
    slidesPerView : "auto",
    initialSlide : 1,
    coverflowEffect : {
      rotate : 30,
      stretch : 0,
      depth : 100,
      modifier : 1,
      slideShadows : true,
    },
    pagination : {
      el : ".swiper-pagination",
    }
  });

});