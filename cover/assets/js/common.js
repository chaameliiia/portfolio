$(function () {
  var bln = true;
  let url;

  if ($.cookie('intro')) { // 쿠키 있을 경우 인트로 재생 정지
    loadIntro();
  }

  setTimeout(function () { // 페이지 최초 로딩 시 쿠키 입력
    $.cookie('intro', 'off', { expires: 1 });
  }, 5000);

  function loadIntro() { // 인트로 재생 안할 때 화면 출력 효과 지정
    $('.main__intro').addClass('deactive');
    $('.main__works').removeClass('post_intro');
  }

  $(document).on('click', function (e) {
    e.preventDefault();

    if ($(e.target).parents().hasClass('header__logo')) {
      clickLogo();
    }

    function clickLogo() { // 로고 클릭
      if ($(e.target).attr('href')) { // 클릭 대상에 따른 이동 페이지 주소 지정
        url = $(e.target).attr('href');
      } else {
        url = $(e.target).parent().attr('href');
      }

      if(!$('.main__about').hasClass('deactive')) { // 화면 전환 적용 대상 지정
        targetElmt = $('.main__about');
      } else {
        switchSect();
      }

      targetElmt.addClass('deactive'); // 화면 전환 적용

      setTimeout(function () { // 페이지 이동
        $(location).attr('href', url);
      }, 1000);
    }

    function switchSect() {
      switch($('.main').find('.main__works').length) {
        case 0:
          targetElmt = $('.main__detail');
          break;
        
        case 1:
          targetElmt = $('.main__works');
          break;
      }
      return targetElmt;
    }

    var targetElmt;

    if ($(e.target).hasClass('header__btn')) { // about 클릭
      switchSect();
      setTimeout(clickAbout, 10); // about 클래스 조정
    }

    function clickAbout() { // about 클래스 조정
      $(targetElmt).toggleClass('deactive');
      $('.main__about').toggleClass('deactive');
      $('.header__btn').text('close');

      if ($('.main__about').hasClass('deactive')) {
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