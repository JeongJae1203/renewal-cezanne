$(function() {
  const mobileBtn = $('header .mobileWrap > .m_gnbBtn > button')
      , mobileMenu = $('header .m_gnb');

  $('header .mobileWrap').on('click', mobileBtn, function() {
    mobileMenu.slideToggle();

    $('body').toggleClass('open');
  });
});