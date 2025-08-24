$(function() {
  const mobileBtn = $('header .mobileWrap > .m_gnbBtn > button')
      , mobileMenu = $('header .m_gnb');

  $('header .mobileWrap').on('click', mobileBtn, function() {
    mobileMenu.slideToggle();

    $('body').toggleClass('open');
  });

  const sitemapBtn = $('header .sitemapBtn > button')
      , sitemap = $('#sitemap');

  $('header .sitemapBtn').on('click', sitemapBtn, function(e) {
    e.preventDefault();

    sitemap.addClass('on');
  });
  
  $('#sitemap').on('click', '.btn__close', function() {
    sitemap.removeClass('on');
  });
});