/*
전체에 relative
팝업 열었을 때 fixed
*/

// 제안내용
// 스크롤 페이지 단위로 움직이게() or 페이지 배경색 구분

// 큰 단위 변수
var containerJs = document.querySelector('#container');
var headerJs = document.querySelector('#container header');
var page1 = document.querySelector('.page1');
var page2 = document.querySelector('.page2');
var page3 = document.querySelector('.page3');
var page4 = document.querySelector('.page4');

var winHeight = window.innerHeight;

var mainTitle = document.querySelector('.page0 a');
var pageTitle = headerJs.querySelector('.page-title');

var scrollFirst = 0;
var scrollSecond = -1;
var num = -mainTitle.offsetHeight;
var a = 0;

var scrIdx = 0;

var bln = true, check = true;

document.querySelector('body').style.height = wrapper.offsetHeight+'px'

var wrapperStyle = window.getComputedStyle(wrapper);
var scrollFixed;
// scroll event ----------------------------------------------------------
window.addEventListener('scroll', function() {
  var winScrollY = window.scrollY;
  var sectionOffset = [];
  
  if(getComputedStyle(p1Pop).display == 'block') {
    this.scrollTo(0, scrollFixed);
  }

  if(getComputedStyle(popGallery).display == 'block') {
    this.scrollTo(0, scrollFixed);
  }
    
  scrolling(); // page0 타이틀박스 이동

  //wrapper - fixed or absolute
  if(winHeight * 2 <= winScrollY) {
    if(wrapperStyle.getPropertyValue('position') == 'fixed'){
      wrapper.style = `position: absolute; top: ${winScrollY}px`;
    }
  } else {
    wrapper.style = "position: fixed";
  }
   
  //header fixed
  var header = document.querySelector('header');
  var containerRect = containerJs.getBoundingClientRect(); 
  var containerTop = containerRect.top; 
    
  if(containerTop <= 0){
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
    
  //title
  var allSect = container.querySelectorAll('section');
  for(var i = 0; i < allSect.length; i++){
    sectionOffset.push(allSect[i].offsetTop + (winHeight * 3));
  }
  for(var i = 0; i < allSect.length; i++) { 
    if(sectionOffset[i] <= winScrollY  && sectionOffset[i] + (winHeight * .5) > winScrollY) {
      titleText(allSect[i], 'h2');
    } else if(sectionOffset[i] + 500 < winScrollY && sectionOffset[i + 1] > winScrollY){
      classRemove(pageTitle, 'active');    
    }
    
    if(sectionOffset[3] - 300 <= winScrollY) {
      titleText(allSect[i], 'h2');
    }
  }
  // scroll fin
});



// page1 ---------------------------------------------------------------------- 
// var p1Title = page1.querySelector('h2');
var p1Index = page1.querySelector('.index');
var p1IndexA = p1Index.querySelectorAll('a');
var p1Pop = page1.querySelector('.popup');
var p1PopClose = p1Pop.querySelector('.close');
var nodeLength, p1PopFigure, imgHeight;
var popGallery = page2.querySelector('.popup-gallery');


var xhr = new XMLHttpRequest(); // Create XMLHttpRequest object
xhr.addEventListener('load', function () { // When readystate changes
  var data = JSON.parse(xhr.responseText);

  page1.addEventListener('click', function(e) {
    e.preventDefault();

    if(e.target.dataset.num) {
      p1PopFigure = p1Pop.querySelector('.gallery figure');
      
      dNum = e.target.dataset.num;

      // img node 추가
      nodeLength = data.runway[dNum].length;
      var arrOdd = [];
      var arrEven = [];

      for(var i = 0; i < nodeLength; i++) {
        // img node 추가
        p1PopFigure.innerHTML += `<img src=${data.runway[dNum][i]} alt="">`;
        p1PopImg = p1PopFigure.querySelectorAll('img');

        if(i % 2 == 0) { //img node top 조정
          imgTop(arrOdd, i, 0);
        } else {
          imgTop(arrEven, i, 50);
        }
      }

      classAdd(p1Pop, 'active'); // page1 팝업창 띄우기
      for(var i =0; i < p1IndexA.length; i++) {
        classAdd(p1IndexA[i].children[1], 'non-active'); // caption 숨기기
      }

      scrollFixed = window.scrollY;
      disableWheel(p1Pop, '.gallery'); // 팝업 떴을 때 휠, 스크롤 이벤트 정지
    }

    if(e.target.classList.contains('close')) {
      for(var i =0; i < p1IndexA.length; i++) {
        classRemove(p1IndexA[i].children[1], 'non-active'); // caption 보이기
      }
      p1PopFigure.innerHTML = null;
      classRemove(p1Pop, 'active'); // 팝업창 내리기
    }
  });

  // page2 ---------------------------------------------------------------------- 
  var p2Category = page2.querySelector('.category');
  var popCategory = page2.querySelector('.pop-category');
  var popImages = popGallery.querySelector('.images');
  var target, dNum, dIdx;
  var prodName, prodUrl;

  p2Category.addEventListener('click', function(e) {
    e.preventDefault();
    target = e.target;

    if(target.nodeName != 'A' && target.nodeName != 'FIGCAPTION') {
      return;
    }

    if(target.nodeName == 'A') { 
      dNum = target.dataset.num;
    }

    if(target.nodeName == 'FIGCAPTION') {
      dNum = target.parentNode.dataset.num;
    }

    classAdd(popCategory.children[dNum].firstChild, 'selected'); // 클릭한 카테고리 강조
    addTpoList(popImages, data, dNum); // 클릭한 카테고리에 맞게 콘텐츠 변경
    classAdd(popGallery, 'active'); // 팝업창 띄우기
    
    scrollFixed = window.scrollY;
    disableWheel(popGallery, '.images'); // 팝업 떴을 때 휠, 스크롤 이벤트 정지
  });

  popGallery.addEventListener('click', function(e) {
  var popText = popGallery.querySelector('.text');
  var popSpan = popText.querySelector('span');
    
    e.preventDefault();
    target = e.target;

    if(target.parentNode.nodeName == 'H3') {
      dNum = target.dataset.num;
      
      for(var i = 0; i < popCategory.children.length; i++) {
        classRemove(popCategory.children[i].firstChild, 'selected');
      }
      classAdd(target, 'selected'); // 클릭한 카테고리 강조  
      clearPopText(popText, popSpan) // popGallery .text 내용 초기화
      clearInnerHtml(popImages);
      addTpoList(popImages, data, dNum); // 클릭한 카테고리에 맞게 콘텐츠 변경
    }

    if(target.classList.contains('list')) { // 클릭한 대상에 맞게 바로가기 변경
      dIdx = target.dataset.idx;

      clearInnerHtml(popSpan); // 

      popText.querySelector('h3').textContent = data.tpo[dNum][dIdx].caption;
      popSpan.textContent = '제품 바로가기↓';

      for(var j = 0; j < data.prodLink[dNum][dIdx].prodName.length; j++) {
        prodName = data.prodLink[dNum][dIdx].prodName;
        prodUrl = data.prodLink[dNum][dIdx].prodUrl;
        popSpan.innerHTML += `<a href="${prodUrl[j]}">${prodName[j]}</a>`;
      }
    }

    if(target.classList.contains('close')) { // 닫기 아이콘 눌렀을 때
      classRemove(popGallery, 'active'); // 팝업창 내리기
      for(var i = 0; i < popCategory.children.length; i++) {
        classRemove(popCategory.children[i].firstChild, 'selected'); // 카테고리 강조 효과 제거
      }
      clearInnerHtml(popImages); // popGallery 내용 초기화
      clearPopText(popText, popSpan) // popGallery .text 내용 초기화
    }
  });

  // page3 ---------------------------------------------------------------------- 
  var page3Pop = page3.querySelector('.popup-detail');
  var p3Category = page3Pop.querySelectorAll('.pop-text h3 a span');
  var popText = page3Pop.querySelectorAll('.text-container');
  var popImg = page3Pop.querySelector('.pop-img');
  var loopImg;

  page3.addEventListener('click', function(e) { // 팝업창 띄우기
    e.preventDefault();
    target = e.target;

    if(target.parentNode.classList.contains('index')) {
      dNum = target.dataset.num;
      loop(popImg, data, dNum); // pop-img 이미지 교체
      classAdd(p3Category[dNum], 'selected'); // 클릭한 대상에 맞는 내용 출력
      classAdd(popText[dNum], 'selected'); // 클릭한 대상에 맞는 내용 출력
      classAdd(page3Pop, 'active'); // 팝업창 띄우기
    
      scrollFixed = window.scrollY;
      disableWheel(page3Pop); // 팝업 떴을 때 휠, 스크롤 이벤트 정지
    }

    if(target.parentNode.parentNode.nodeName == 'H3') {
      for(i = 0; i < p3Category.length; i++) { // 팝업 내용 초기화
        classRemove(p3Category[i], 'selected');
        classRemove(popText[i], 'selected');
      }
      clearInterval(loopImg);

      dNum = target.dataset.num;
      loop(popImg, data, dNum); // pop-img 이미지 교체
      classAdd(p3Category[dNum], 'selected'); // 클릭한 대상에 맞는 내용 출력
      classAdd(popText[dNum], 'selected'); // 클릭한 대상에 맞는 내용 출력
      
    }

    if(target.classList.contains('close')) {
      classRemove(page3Pop, 'active');
      clearInterval(loopImg);
      for(i = 0; i < popText.length; i++) { // 팝업 내용 초기화
        classRemove(p3Category[i], 'selected');
        classRemove(popText[i], 'selected');
      }
    }
  });

  // page4 ---------------------------------------------------------------------- 
  var submitBtn = page4.querySelector('button');
  var registerForm = document.querySelector('#register');
  var cmntCont = page4.querySelector('.comment-container');
  var formInputs = registerForm.querySelectorAll('input');

  var now = new Date();
  var cmntTime = new Date();
  var submitTime = cmntTime.getTime();
  var timeDiffer = Math.ceil((submitTime - localStorage.realTime) / 1000 / 60 / 60); // 분 단위

  var cmntWriter, cmntTxt, allCmnt, newCmnt;

  localStorage.setItem('realTime',  now.getTime());

  submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(registerForm.agree.checked) { // 사용자 입력 내용 localstorage 저장
      for(var i = 0; i < formInputs.length; i++) {
        if(formInputs[i].type != 'checkbox') {
          if(formInputs[i].value) {
            localStorage.setItem(formInputs[i].id, formInputs[i].value);        
          } else {
            alert('정보를 입력해주세요.');
            formInputs[i].focus();
            return;
          }
        }
      }

      if(registerForm.review.value) {
        localStorage.setItem(registerForm.review.id, registerForm.review.value);  
      } else {
        alert('내용을 입력해주세요.');
        registerForm.review.focus();
        return;
      }

      // 시간 변환
      if(timeDiffer == 1) { // ~ 1분
        cmntTime = '방금 전';
      } else if(timeDiffer > 1 && timeDiffer < 60) { // 2 ~ 59분
        cmntTime = timeDiffer + '분 전';
      } else { // 1시간 ~
        timeDiffer = timeDiffer / 60;
        cmntTime = timeDiffer + '시간 전';
      }

      // 사용자 입력 내용 출력
      allCmnt = cmntCont.querySelectorAll('.comment');
      newCmnt = document.createElement("DIV");

      cmntWriter = localStorage.writer;
      cmntTxt = localStorage.review;

      classAdd(newCmnt, 'comment');
      newCmnt.innerHTML = `<p>${cmntTxt}</p>
                          <code>${cmntTime}</code> | <span class="writer">${cmntWriter}</span>`
      cmntCont.insertBefore(newCmnt, allCmnt[0]);
    } else {
      alert('개인정보 수집 및 이용 동의를 확인해주세요.');
    }
  });

// functions -----------------------------------------------------------------
  function loop(target, data, idx) { // page3 이미지 배너
    var i = 0;
    target.children[0].src = data.snapshot[idx][i];

    loopImg = setInterval(function() {
      target.children[0].src = data.snapshot[idx][i];
      target.children[0].style.opacity = 0;
      i++;
      if(i == data.snapshot[idx].length) {
        i = 0;
      }
      target.children[1].src = data.snapshot[idx][i];
      target.children[1].style.opacity = 1;
      target.insertBefore(target.children[1], target.children[0]);
    }, 2500);
  }
  // json load fin
});
xhr.open('GET', 'data.json', true); // Prepare the request
xhr.send(null);

// functions ----------------------------------------------------------------- 
function addTpoList(target, data, num) {  
  for(var i = 0; i < data.tpo[num].length; i++) {
    target.innerHTML += `<a href="#" data-idx="${i}" class="list">
                            <img src="${data.tpo[num][i].src}" alt="">
                            <figcaption data-idx="${i}" class="list">${data.tpo[num][i].caption}</figcaption>
                          </a>`;
  }
}

function classAdd(elmnt, clsName) { // 클래스 추가
  elmnt.classList.add(clsName);  
}

function classRemove(elmnt, clsName) { // 클래스 제거
  elmnt.classList.remove(clsName);
}

function clearInnerHtml(target) {
  target.innerHTML = null;
}

function clearPopText(popText, popSpan) {
  popText.querySelector('h3').textContent = '';
  popSpan.textContent = '';
  clearInnerHtml(popSpan);
}

function disableWheel(target, child) {  
  if(!child) {
    target.addEventListener('mousewheel',function(e){
      e.preventDefault();
      e.stopPropagation();
    });
  }
  
  if(child) {
    target.addEventListener('mousewheel',function(e){
      e.preventDefault();
    });
    target.querySelector(child).addEventListener('mousewheel',function(e){
      e.stopPropagation();
    });
  }
}

function imgTop(arr, idx, pos) {
  arr.push(idx);
  var j = arr.indexOf(idx);
  p1PopFigure.children[idx].style.top = pos + (550 * j) + 'px';
}

function scrolling() { // 타이틀 박스 스크롤따라 이동
  if(window.scrollY < 1300){
    num = (window.scrollY * 0.3) - 300;
  }
  mainTitle.style.top = num + 'px';
}

function titleText(selector, target) { // pageTitle text 교체
  pageTitle.textContent = selector.querySelector(target).textContent;
  classAdd(pageTitle, 'active');
}