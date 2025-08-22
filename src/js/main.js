document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.main_visual', {
    loop:true,
    autoplay:true,

    pagination : {
      el:'.swiper-pagination',
    }
  });
});