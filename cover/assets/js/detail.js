
$(function () {
  if (!sessionStorage.getItem("check")) {
    $('.main__detail').addClass('animate');
  }

  sessionStorage.setItem("check", "ok");

  let prjNum = $(location).attr('href').split('=')[1];
  $('.back_img').css({
    'background': `#2f3435 url(/assets/img/detail/back/img_back${prjNum}.jpg) no-repeat top`
  });

  $('.main__detail').on('click', function (e) {
    if ($(e.target).hasClass('top-btn')) { // top 버튼 클릭
      $('body').animate({
        scrollTop: 0
      });
    }
    e.preventDefault();

    if($(e.target).hasClass('linkBtn')) {
      $(this).addClass('deactive');
      setTimeout(function() {
        location.href = $(e.target).parent().attr('href');
      }, 500);
    }


    let hrefNum;

    if ($(e.target).attr('href')) { // prev, next 버튼 클릭
      $(e.target).text() == 'prev' ? hrefNum = 0 : hrefNum = 1;

      $('.main__detail').addClass('deactive');
      sessionStorage.removeItem("check");

      setTimeout(function () {
        location.href = $('.main__detail_btn a').eq(hrefNum).attr('href');

      }, 1000);
    }
  });


});