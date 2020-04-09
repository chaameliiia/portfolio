// page0 ---------------------------------------------------------------------- 
var mainTit = document.querySelector('.page0 a');
window.addEventListener('scroll', function() {
  // mainTit.style.top = window.pageYOffset / 2 + 'px';
});

// page1 ---------------------------------------------------------------------- 
var page1 = document.querySelector('.page1')
var page1Index = page1.querySelector('.index');
var page1Caption = page1.querySelectorAll('figcaption');
var keywordPop = page1.querySelector('.popup');
var popClose = keywordPop.querySelector('.close');

page1Index.addEventListener('click', function(e) { // 팝업창 띄우기
  e.preventDefault();
  keywordPop.style.display = 'flex';
  for(var i =0; i < page1Caption.length; i++) {
    page1Caption[i].style.display='none'; // caption 숨기기
  }
});

popClose.addEventListener('click', function(e) {
  closing(e); // 팝업창 내리기
  for(var i =0; i < page1Caption.length; i++) {
    page1Caption[i].style.display='block'; // caption 보이기
  }
});

// page2 ---------------------------------------------------------------------- 
var page2 = document.querySelector('.page2');
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
  closing(e);
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

detailClose.addEventListener('click', closing); // 팝업창 내리기

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

tipPopClose.addEventListener('click', closing); // 팝업창 내리기

function closing(e) {
  e.preventDefault();
  let greatParent = event.target.parentNode.parentNode;
  greatParent.style.display = 'none';
}