$(function() {

  $(document).on('click', function (e) {
    if($(e.target).hasClass('top-btn')) { // top 버튼 클릭
      $('html').animate({
        scrollTop: 0
      });
    }

    if($(e.target).attr('href')) {
      console.log('o');
      let hrefTxt = $(location).attr('href');
      let strNum = parseInt(hrefTxt.split('=')[1]);
      let hrefNum = 0;

      switch($(e.target).text()) {
        case 'prev':
          hrefNum = strNum - 1;
          break;
        case 'next':
          hrefNum = strNum + 1;
          break;
      }

      $('.main__detail').addClass('deactive');
      setTimeout(function() {
        $(location).attr('href', `detail.php?num=${hrefNum}`);
      }, 500);
    }
  });

});