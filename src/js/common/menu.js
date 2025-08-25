$(function() {
  const mobileBtn = $('header .m_gnbBtn > button')
      , mobileMenu = $('header .m_gnb');

  $('#header .inner .m_gnbBtn').on('click', mobileBtn, function() {
    mobileMenu.slideToggle();

    $('body').toggleClass('open');
  });

  const sitemapBtn = $('header .sitemapBtn > button')
      , sitemap = $('#sitemap');

  $('header .sitemapBtn').on('click', sitemapBtn, function(e) {
    e.preventDefault();

    sitemap.addClass('on');
    $('body').addClass('open');
  });
  
  $('#sitemap').on('click', '.btn__close', function() {
    sitemap.removeClass('on');
    $('body').removeClass('open');
  });
});