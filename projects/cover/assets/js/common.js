$(function () {
  $(document).on('click', function (e) {
    e.preventDefault();
    let className = $('section').attr('class');
    if($(e.target).hasClass('header__btn')) {
      switch(className) {
        case 'main__works':
          $('.main__works').toggleClass('deactive');
          break;

        case 'main__detail':
          $('.main__works').toggleClass('deactive');
          break;
      }
      clickAbout();
    }

    function clickAbout() {
      $('.main__about').toggleClass('active');
      $('.header__btn').text('close');

      if(!$('.main__about').hasClass('active')) {
        $('.header__btn').text('about');
      }
    }

  });

  // console.log($('link').attr('href'));
});