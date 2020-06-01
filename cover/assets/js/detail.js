$(function () {

  $(document).on('click', function (e) {
    if ($(e.target).hasClass('top-btn')) { // top 버튼 클릭
      $('html').animate({
        scrollTop: 0
      });
    }
  });

});