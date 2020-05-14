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
var num = 0;
var a = 0;

var scrIdx = 0;


var bln = true, check = true, sIdx=0, svalue=50;
var elem = document.body;
var wrapper = document.getElementById('wrapper');
// scroll event ----------------------------------------------------------
function aaa(){
  wrapper.style.top = -sIdx+'px';
}

// wrapper.scrollTop = 0;
window.addEventListener('scroll', function(e) {
  console.log(e)
  var vidContainer = document.querySelector('.vid-container');
  var conOffsetTop = containerJs.offsetTop;
  var winScrollY = window.scrollY;
 // this.scrollTop = 50;
  scrollFirst = window.scrollY;

  scrolling(); // page0 타이틀박스 이동

  
  // if(scrollFirst > scrollSecond) {
  //    sIdx += 120;  
  //   console.log('a')
  // }
  // if(scrollFirst < scrollSecond){
  //    sIdx -= 10;  
  //    console.log('b')
  // }
  // requestAnimationFrame(aaa);
//wrapper.style.top = sIdx+'px';
  
  if(mainTitle.style.top >= 100 + 'px') {
    mainTitle.style = 'top: 100px';
  }

  if(conOffsetTop < winScrollY) { // header 화면 최상단일 때
    classAdd(headerJs, 'fixed');
    classAdd(p1Title, 'visible');
  } else {
    classRemove(headerJs, 'fixed');
    classRemove(p1Title, 'visible');
    classRemove(pageTitle, 'active');
    bln = true; 
  }

  // if(conOffsetTop - winHeight <= winScrollY) {
  //   // header 화면 하단에 도착
    
  //   a -= 5;
  //   mainTitle.style = 'top: ' + (a) + 'px';
  //   vidContainer.style = 'top: ' + (a) + 'px';

  //   // setInterval(function() {
  //   //   window.scrollTo(0, winScrollY);
  //   //   winScrollY++;
  //   //   window.scrollTo(0, winScrollY);
  //   // }, 1000);
  // }


  // // pageTitle_each section -------------------------------------------------
  // var allSect = container.querySelectorAll('section');

  // // pageTitle 클래스 제거
  // for(var i = 1; i < allSect.length; i++) {
  //   if(conOffsetTop + allSect[i].offsetTop - winHeight * .2 <= winScrollY && conOffsetTop + allSect[i].offsetTop > winScrollY) {
  //     if(check) {
  //       check = false;
  //       classRemove(pageTitle, 'active');
  //       bln = true;
  //     }
  //   }
  // }
  // // allSect0
  // if(conOffsetTop <= winScrollY && conOffsetTop + allSect[1].offsetTop - winHeight * .2 > winScrollY) {
  //   if(p1Index.classList.contains('active')) {
  //     if(bln) {
  //       bln = false;
  //       check = true;
  //       titleText(allSect[0], 'h2 a');
  //     }
  //   }
  // }
  // // allSect1
  // if(conOffsetTop + allSect[1].offsetTop <= winScrollY && conOffsetTop + allSect[2].offsetTop - winHeight * .2 > winScrollY) {
  //   if(bln) {
  //     bln = false;
  //     check = true;
  //     titleText(allSect[1], 'h2');
  //   }
  // }
  // // allSect2
  // if(conOffsetTop + allSect[2].offsetTop <= winScrollY && conOffsetTop + allSect[3].offsetTop - winHeight * .2 > winScrollY) {
  //   if(bln) {
  //     bln = false;
  //     check = true;
  //     titleText(allSect[2], 'h2');
  //   }
  // }
  // // allSect3
  // if(conOffsetTop + allSect[3].offsetTop <= winScrollY) {
  //   if(bln) {
  //     bln = false;
  //     check = true;
  //     titleText(allSect[3], 'h2');
  //   }
  // }
  scrollSecond = scrollFirst;
  // scroll fin
});

// page1 ---------------------------------------------------------------------- 
var p1Title = page1.querySelector('h2');
var p1Index = page1.querySelector('.index');
var p1IndexA = p1Index.querySelectorAll('a');
var p1Pop = page1.querySelector('.popup');
var p1PopClose = p1Pop.querySelector('.close');
var nodeLength, p1PopFigure;

var xhr = new XMLHttpRequest(); // Create XMLHttpRequest object
xhr.addEventListener('load', function () { // When readystate changes
  var data = JSON.parse(xhr.responseText);

  p1Title.addEventListener('click', function (e) {
    // page1 title 클릭할 때
    e.preventDefault();
    classAdd(p1Index, 'active'); // 키워드 선택창 보이기
    classAdd(p1Title, 'non-active'); // 타이틀 숨기기
    // header에 page title text넣기
    titleText(page1, '.title'); // pageTitle text 교체
  });

  p1Index.addEventListener('click', function(e) {
    e.preventDefault();
    p1PopFigure = p1Pop.querySelector('.gallery figure');
    
    // img node 추가
    nodeLength = data.runway.shorts.length;
    var arrOdd = [];
    var arrEven = [];

    for(var i = 0; i < nodeLength; i++) {
      // img node 추가
      p1PopFigure.innerHTML += `<img src=${data.runway.shorts[i]} alt="">`;

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
    // 이미지 교체 
    if(e.target.nodeName == 'FIGCAPTION') {
      p2PopDetail.querySelector('img').src = e.target.previousElementSibling.src;
    } else {
      p2PopDetail.querySelector('img').src = e.target.children[0].src; 
    }
    classAdd(p2PopDetail, 'active'); // 팝업창 보이기
  });

  detailClose.addEventListener('click', closeBtn); // 팝업창 숨기기

  // page3 ---------------------------------------------------------------------- 
  var page3Pop = page3.querySelector('.popup-detail');
  var tipPopClose = page3.querySelector('.close');
  var popImg; // loop()용

  page3.addEventListener('click', function(e) { // 팝업창 띄우기
    e.preventDefault();
    if(e.target.nodeName != 'A') {
      return;
    }

    loop(data); // pop-img 이미지 교체

    // page3Pop.addEventListener('click', function() {
    //   classAdd(snapshot[1], 'non-visible');
    //   snapshot[1].src = data.snapshot.shorts[2];
    //   classRemove(snapshot[1], 'non-visible');
    //   snapshot[0].src = data.snapshot.shorts[3];
    // });

    classAdd(page3Pop, 'active');
  });

  tipPopClose.addEventListener('click', closeBtn); // 팝업창 내리기

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
});
xhr.open('GET', 'data.json', true); // Prepare the request
xhr.send(null);

// functions ----------------------------------------------------------------- 
function classAdd(elmnt, clsName) { // 클래스 추가
  elmnt.classList.add(clsName);  
}

function classRemove(elmnt, clsName) { // 클래스 제거
  elmnt.classList.remove(clsName);
}

function closeBtn(e) { // 팝업창 닫기
  e.preventDefault();
  e.stopPropagation();
  let closeTarget = e.target.parentNode.parentNode;
  classRemove(closeTarget, 'active');
}

function imgTop(arr, idx, pos) {
  arr.push(idx);
  var j = arr.indexOf(idx);
  p1PopFigure.children[idx].style.top = pos + (500 * j) + 'px';
}

function loop(data) { // page3 이미지 배너
  popImg = page3.querySelector('.pop-img');
  i = 0;

  setInterval(function() {
    popImg.children[0].src = data.snapshot.shorts[i];
    popImg.children[0].style.opacity = 0;
    i++;
    if(i == data.snapshot.shorts.length) {
      i = 0;
    }
    popImg.children[1].src = data.snapshot.shorts[i];
    popImg.children[1].style.opacity = 1;
    popImg.insertBefore(popImg.children[1], popImg.children[0]);
  }, 2500);
}

function scrolling() { // 타이틀 박스 스크롤따라 이동
  //scrollFirst = window.scrollY;
  if(scrollFirst > scrollSecond) { // 스크롤 내림
    if(num != 100) {num += 5;}
  } else { // 스크롤 올림
    if(num > 0){num -= 5;}
  }
  mainTitle.style = 'top: ' + (-num) + 'px';
  //scrollSecond = scrollFirst;
}

function titleText(selector, target) { // pageTitle text 교체
  pageTitle.textContent = selector.querySelector(target).textContent;
  classAdd(pageTitle, 'active');
}