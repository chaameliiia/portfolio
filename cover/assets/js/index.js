$(function () {
  let li = $('.main__works_contents li');
  let liLength = $('.main__works_contents li').length;
  let liIndex = 0;

  bln = true;
  function mainSlide() { //메인 슬라이드 함수
    $(window).on('scroll', function() {
      if(bln) {
        bln = false;
        liIndex++;

        if (liIndex == liLength) {
          liIndex = 0;
        }

        a();

        if (liIndex == liLength - 1) {
          liCss(0, "100%");
        }
      }
    });

    function a() { //메인 슬라이드 top값 변경 함수
      li.css({
        top: "150%"
      })
      liCss(liIndex, "50%");
      liCss(liIndex + 1, "100%");
      liCss(liIndex - 1, "0");
    }
    a();

    function liCss(index, top) { //메인 슬라이드 index값에 따른 top값 변경 함수
      li.eq(index).css({
        top: top
      });
    }
  }
  mainSlide();



  $(document).on('click', function (e) {
    e.preventDefault();

    console.log($(e.target));

    if ($(e.target).attr('href') || $(e.target).parent().attr('href')) {
      // var linkTxt = $(e.target).parent().attr('href').split('?')[0];
      // console.log('o');

      // $('.main__works').toggleClass('deactive');

      // setTimeout(function () {
      //   location.href = 'detail.php';
      // }, 1000);
    } else {
      return;
    }
  });

});