$(function () {
  var bln = true;
  let destination;

  if($.cookie('intro')) {
    loadIntro();
  }

  setTimeout(function() {
    $.cookie('intro', 'off', {expires: 1});
  }, 5000);

  function loadIntro() {
    $('.main__intro').addClass('deactive');
    $('.main__works').removeClass('active');
  }
  
  $(document).on('click', function (e) {
    e.preventDefault();

    if($(e.target).parent().hasClass('header__logo')) {
      destination = $(e.target).attr('href');
      clickLogo(destination);
    } else if($(e.target).parent().parent().hasClass('header__logo')) {
      destination = $(e.target).parent().attr('href');
      clickLogo(destination);
    }
    
    function clickLogo(link) {
      $('.main__works').addClass('deactive');
      setTimeout(function() {
        $(location).attr('href', link);
      }, 500);
    }


    let className = $('section').eq(0).attr('class').split(' ')[0];
    let targetElmt;

    if ($(e.target).hasClass('header__btn')) { // about 클릭
      switch (className) {
        case 'main__works': // index 페이지일 때
          targetElmt = '.main__works';
          break;

        case 'main__detail': // detail 페이지일 때
          targetElmt = '.main__detail';
          break;
      }
      clickAbout(); // about 클래스 조정
    }

    function clickAbout() { // about 클래스 조정
      $(targetElmt).toggleClass('deactive');
      $('.main__about').toggleClass('active');
      $('.header__btn').text('close');

      if (!$('.main__about').hasClass('active')) {
        $('.header__btn').text('about');
      }
    }

    let imgUrl;

    if ($(e.target).hasClass('aside__btn')) { // aside 클릭
      if (bln) {
        imgUrl = '/assets/img/ic_message2.png'; // on
        bln = false;
      } else {
        imgUrl = '/assets/img/ic_message.png'; // off
        bln = true;
      }

      // aside 이미지 교체
      $(e.target).css('background', `url(${imgUrl}) no-repeat center`);
      $('.aside__modal').toggleClass('active');
    }
  });
});