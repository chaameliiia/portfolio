
// 큰 단위 변수
var containerJs = document.querySelector('#container');
var headerJs = document.querySelector('#container header');
var pageTitle = headerJs.querySelector('.page-title');
var page1 = document.querySelector('.page1');
var page2 = document.querySelector('.page2');
var page3 = document.querySelector('.page3');


// page0 ---------------------------------------------------------------------- 
var mainTitle = document.querySelector('.page0 a');
var page1Title = page1.querySelector('h2');

var scrollFirst = 0;
var scrollSecond = 0;
var num = 0;
var a = 0;

window.addEventListener('scroll', function() {
  scrolling();

  if(mainTitle.style.top >= 100 + 'px') {
    mainTitle.style = 'top: 100px';
  }

  // header 화면 하단에 도착
  var vidContainer = document.querySelector('.vid-container');
  var conOffsetTop = containerJs.offsetTop;
  var winHeight = window.innerHeight;
  var winScrollY = window.scrollY;

  if(conOffsetTop - winHeight <= winScrollY) {
    a += 3;
    mainTitle.style = 'top: ' + (mainTitle.offsetTop - a) + 'px';
    vidContainer.style = 'top: ' + (vidContainer.offsetTop - a) + 'px';
  }

  // header 화면 최상단일 때
  if(conOffsetTop - winScrollY <= 0) {
    classAdd(headerJs, 'fixed');
    classAdd(page1Title, 'visible');
  } else {
    // classRemove(headerJs, 'fixed');
    classRemove(page1Title, 'visible');
  }
});

// page1 ---------------------------------------------------------------------- 
var page1Index = page1.querySelector('.index');
var p1IndexA = page1Index.querySelectorAll('a');
var page1Pop = page1.querySelector('.popup');
var p1PopClose = page1Pop.querySelector('.close');
var p1PopGallery = page1Pop.querySelector('.gallery');


page1Title.addEventListener('click', function (e) {
  // page1 title 클릭할 때
  e.preventDefault();
  classAdd(page1Index, 'active'); // 키워드 선택창 보이기
  classAdd(page1Title, 'non-active'); // 타이틀 숨기기
  // header에 page title text넣기
  pageTitle.textContent = page1.querySelector('.title').textContent;
  classAdd(pageTitle, 'active');
});

page1Index.addEventListener('click', function(e) {
  e.preventDefault();
  classAdd(page1Pop, 'active'); // page1 팝업창 띄우기
  for(var i =0; i < p1IndexA.length; i++) {
    classAdd(p1IndexA[i].children[1], 'non-active'); // caption 숨기기
  }
});

p1PopClose.addEventListener('click', function(e) {
  closeBtn(e); // page1 팝업창 내리기
  for(var i =0; i < p1IndexA.length; i++) {
    classRemove(p1IndexA[i].children[1], 'non-active'); // caption 보이기
  }
});


// page2 ---------------------------------------------------------------------- 
var page2Index = page2.querySelector('.index');
var p2IndexA = page2Index.querySelectorAll('a');
var p2PoGallery = page2.querySelector('.popup-gallery');
var p2PopDetail = page2.querySelector('.popup-detail');

var popImg = p2PoGallery.querySelectorAll('a');
var p2PopClose = p2PoGallery.querySelector('.close');
var detailClose = p2PopDetail.querySelector('.close');

page2Index.addEventListener('click', function(e) {
  e.preventDefault();
  for(var i =0; i < p2IndexA.length; i++) {
    classAdd(p2IndexA[i].children[1], 'non-active'); // caption 숨기기
  }
  classAdd(page2.querySelector('.popup-gallery'), 'active'); // 팝업창 띄우기
});

p2PopClose.addEventListener('click', function(e) { // 팝업창 내리기
  closeBtn(e);
  for(var i =0; i < p2IndexA.length; i++) {
    classRemove(p2IndexA[i].children[1], 'non-active'); // caption 보이기
  }
});

p2PoGallery.addEventListener('click', function(e) {
  e.preventDefault();
  p2PopDetail.querySelector('img').src = e.target.children[0].src; // 이미지 교체
  classAdd(p2PopDetail, 'active'); // 팝업창 보이기
});

detailClose.addEventListener('click', closeBtn); // 팝업창 숨기기

// page3 ---------------------------------------------------------------------- 
var page3Pop = page3.querySelector('.popup-detail');
var tipPopClose = page3.querySelector('.close');
var popImg = page3.querySelector('.pop-img');
var changeImg = popImg.getElementsByTagName('img');

page3.addEventListener('click', function(e) { // 팝업창 띄우기
  e.preventDefault();
  if(e.target.nodeName != 'A') {
    return;
  }

  // pop-img 이미지 교체
  var xhr = new XMLHttpRequest(); // Create XMLHttpRequest object
  xhr.addEventListener('load', function () { // When readystate changes
    var data = JSON.parse(xhr.responseText);
    var i = 0;



// var first = page3.querySelector('.first');
// var last = page3.querySelector('.last');
    function loop() {
      setInterval(function() {

        for(var i = 0; i < 2; i++) {
          changeImg[k].style.opacity
        }
        
        changeImg[0].src = data.changeImg.shorts[i];
        changeImg[k].style.opacity = (i%2==0)?0:1;

        // classAdd(changeImg[0], 'non-visible');
        
        i++;
        if(i == data.changeImg.shorts.length) {
          i = 0;
        }

        changeImg[1].src = data.changeImg.shorts[i];
         changeImg[k].style.opacity = (i%2==0)?0:1;

        //changeImg[1].insertAdjacentElement('afterbegin',popImg);
        // classAdd(changeImg[1], 'visible');

        // setTimeout(function() {
        //   changeImg[0].style.opacity = 1;
        //   changeImg[1].style.opacity = 0;
        // }, 500);

      }, 1000);
    }
   
    loop();

    // page3Pop.addEventListener('click', function() {
    //   classAdd(changeImg[1], 'non-visible');
    //   changeImg[1].src = data.changeImg.shorts[2];
    //   classRemove(changeImg[1], 'non-visible');
    //   changeImg[0].src = data.changeImg.shorts[3];
    // });


  });
  xhr.open('GET', 'data.json', true); // Prepare the request
  xhr.send(null);



  classAdd(page3Pop, 'active');
});

tipPopClose.addEventListener('click', closeBtn); // 팝업창 내리기



// functions ----------------------------------------------------------------- 
function scrolling() {
  // 타이틀 박스 스크롤따라 이동
  scrollFirst = window.scrollY;
  if(scrollFirst > scrollSecond) {
    // 스크롤 내림
    num += 5;
    mainTitle.style = 'top: ' + (mainTitle.offsetTop + num) + 'px';
    // mainTitle.style = 'top: ' + (mainTitle.offsetTop - window.scrollY) + 'px';
  } else {
    // 스크롤 올림
    num -= 5;
    mainTitle.style = 'top: ' + (mainTitle.offsetTop - num) + 'px';
    // mainTitle.style = 'top: ' + (mainTitle.offsetTop -window.scrollY) + 'px';
  }
  scrollSecond = scrollFirst;
}

function closeBtn(e) { // 팝업창 닫기
  e.preventDefault();
  let closeTarget = e.target.parentNode.parentNode;
  classRemove(closeTarget, 'active');
}

function classAdd(elmnt, clsName) { // 클래스 추가
  elmnt.classList.add(clsName);  
}

function classRemove(elmnt, clsName) { // 클래스 제거
  elmnt.classList.remove(clsName);
}