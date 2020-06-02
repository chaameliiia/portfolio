$(function () {
  var li = $('.main__works_contents li');
  let liLength = $('.main__works_contents li').length;
  let liIdx = 0;
  bln = true;

  setLiTop(); // 초기 li top값

  if(!$('.main__works').hasClass('deactive')) {
    mainSlide();
  }

  function mainSlide() { //메인 슬라이드 함수
    $(window).on('wheel', function (e) {
      if (bln) {
        bln = false;

        if (e.originalEvent.wheelDelta < 0) { // 휠 아래로
          liIdx--;
          console.log(liIdx);
          $('.main__works_contents').prepend(li.last());
        } else { // 휠 위로
          liIdx++;
          console.log(liIdx);
          $('.main__works_contents').append(li.first());
        }

        if (liIdx >= liLength) {
          liIdx = 0;
        } else if (liIdx <= -liLength) {
          liIdx = liLength;
        }

        setLiTop();

        setTimeout(function () { // 휠 이벤트 횟수 제한
          bln = true;
        }, 1000);
      }
    });
  }

  function setLiTop() { // li top값 조정
    li = $('.main__works_contents li');
    
    li.first().css({
      top: '50%'
    }).addClass('selected').siblings().removeClass('selected');

    li.last().css({
      top: '1%'
    });

    for (var i = 1; i < liLength - 1; i++) {
      li.eq(i).css({
        top: (i + 1) * 49 + '%'
      });
    }
  }

  $('.main__works_contents').on('click', function (e) {
    let dNum;
    e.preventDefault();
    dNum = $(this).find('.selected a').data('num');

    $('.main__works').addClass('deactive');
    setTimeout(function() {
      $(location).attr('href', `detail.php?num=${dNum}`);
    }, 500);
  });
});