$(function() {
  $(document).on('click', function (e) {
    e.preventDefault();

    if($(e.target).hasClass('top-btn')) { // top 버튼 클릭
      $('html').animate({
        scrollTop: 0
      });
    }

    let hrefTxt = $(location).attr('href');
    let strNum = parseInt(hrefTxt.split('=')[1]);
    let hrefNum = 0;

    if($(e.target).attr('href')) {
      switch($(e.target).text()) {
        case 'prev':
          hrefNum = strNum - 1;
          break;
        case 'next':
          hrefNum = strNum + 1;
          break;
        default:
          return;
      }

      $('.main__detail').addClass('deactive');

      setTimeout(function() {
        $(location).attr('href', `detail.php?num=${hrefNum}`);
      }, 1000);
    }
  });
});