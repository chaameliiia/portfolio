$(function() {
  $.ajax({
    url: 'assets/data.json',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data.works.length);
      // for(var i = 0; i < data.works.length; i++) {
      //   // $('.main__works_contents h3').eq(i).text(`${data.works[i].title}`);
      //   $('.main__works_contents').eq(i).append(`
      //     <a href="detail.php?num=#">
      //       <h3>what to wear</h3>
      //       <img src="assets/img/img_prj1.jpg" alt="">
      //       <p>
      //         <code>1</code>/<code>3</code>
      //       </p>
      //     </a>`);
      // }
    }
  })
  
  let bln = true;
  
  $(document).on('click', function (e) {
    e.preventDefault();
    let className = $('section').eq(0).attr('class').split(' ')[0];
    let targetElmt;

    // ------------------------ common -------------------------------

    if($(e.target).hasClass('header__btn')) { // about 클릭
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

    // ------------------------ index.php -------------------------------
    // console.log($(e.target));
    

    // ------------------------ detail.php -------------------------------
    let imgUrl;

    if($(e.target).hasClass('aside__btn')) { // aside 클릭
      if (bln) {
        imgUrl = 'assets/img/ic_message2.png'; // on
        bln = false;
      } else {
        imgUrl = 'assets/img/ic_message.png'; // off
        bln = true;
      }

      // aside 이미지 교체
      $(e.target).css('background', `url(${imgUrl}) no-repeat center`);
      $('.aside__modal').toggleClass('active');
    }

    if($(e.target).hasClass('top-btn')) { // top 버튼 클릭
      $('html').animate({
        scrollTop: 0
      });
    }
  });

});