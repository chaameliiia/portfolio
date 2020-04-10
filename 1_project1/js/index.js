// 큰 단위 변수
var containerJs = document.querySelector('#container');
var headerJs = document.querySelector('#container header');
var pageTitle = headerJs.querySelector('.page-title');
var page1 = document.querySelector('.page1');
var page2 = document.querySelector('.page2');


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
var indexAAll = page1Index.querySelectorAll('a');
var page1Pop = page1.querySelector('.popup');
var popClose = page1Pop.querySelector('.close');

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
  for(var i =0; i < indexAAll.length; i++) {
    classAdd(indexAAll[i].children[1], 'non-active'); // caption 숨기기
  }
});

popClose.addEventListener('click', function(e) {
  closeBtn(e); // 팝업창 내리기
  for(var i =0; i < indexAAll.length; i++) {
    classRemove(indexAAll[i].children[1], 'non-active'); // caption 보이기
  }
});

// page2 ---------------------------------------------------------------------- 
var page2Index = page2.querySelector('.index');
var page2Caption = page2.querySelectorAll('figcaption');
var popGallery = page2.querySelector('.popup-gallery');
var popDetail = page2.querySelector('.popup-detail');

var popImg = popGallery.querySelectorAll('a');
var popClose = popGallery.querySelector('.close');
var detailClose = popDetail.querySelector('.close');

page2Index.addEventListener('click', function(e) {
  e.preventDefault();
  for(var i = 0; i < page2Caption.length; i++) {
    page2Caption[i].style.display = 'none'; // caption 숨기기
  }
  popGallery.style.display = 'block'; // 팝업창 띄우기
});

popClose.addEventListener('click', function(e) { // 팝업창 내리기
  closeBtn(e);
  for(var i = 0; i < page2Caption.length; i++) {
    page2Caption[i].style.display = 'block';
  }
});

popGallery.addEventListener('click', function(e) {
  e.preventDefault();
  if(e.target.nodeName != 'A') {
    return;
  }
  popDetail.querySelector('img').src = e.target.children[0].src; // 이미지 교체
  popDetail.style.display = 'flex'; // 팝업창 띄우기
});

detailClose.addEventListener('click', closeBtn); // 팝업창 내리기

// page3 ---------------------------------------------------------------------- 
var page3 = document.querySelector('.page3');
var page3Pop = page3.querySelector('.popup-detail');
var tipPopClose = page3.querySelector('.close')

page3.addEventListener('click', function(e) { // 팝업창 띄우기
  e.preventDefault();
  if(e.target.nodeName == 'A') {
    page3Pop.style.display = 'flex';
  }
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