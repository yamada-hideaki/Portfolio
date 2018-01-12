$(function() {

//ページ内スクロール
  $('a[href^="#"]').on('click', function() {
    var speed = 300,
        href = $(this.hash),
        target = $(href === '#' || href === '' ? 'html' : href),
        position = target.offset().top;
    $('html, body').animate({scrollTop: position}, speed, 'swing');
    return false;
  });

//トップへ戻るボタン
  $('body').append('<a href="#header" id="back-to-top">▲</a>');
//ボタン表示・非表示
  var button = $('#back-to-top');
  $(window).on('load scroll resize', function() {
    var position = 100;
    if($(window).scrollTop() > position) {
      button.stop().fadeIn(500);
    } else {
      button.stop().fadeOut(500);
    }
  });
//ボタン挙動
  button.on('click', function() {
    $('html, body').animate({scrollTop: 0}, 300, 'swing');
    return false;
  });

});
