
// 큰 단위 변수
var containerJs = document.querySelector('#container');
var headerJs = document.querySelector('#container header');
var page1 = document.querySelector('.page1');
var page2 = document.querySelector('.page2');
var page3 = document.querySelector('.page3');
var page4 = document.querySelector('.page4');


// scroll event ----------------------------------------------------------
// page0 ---------------------------------------------------------------------- 
var winHeight = window.innerHeight;
var conOffsetTop;
var winScrollY;


var mainTitle = document.querySelector('.page0 a');
var pageTitle = headerJs.querySelector('.page-title');


var scrollFirst = 0;
var scrollSecond = 0;
var num = 0;
var a = 0;


var bln = true, check = true;


window.addEventListener('scroll', function() {
  scrolling();

  if(mainTitle.style.top >= 100 + 'px') {
    mainTitle.style = 'top: 100px';
  }

  // header 화면 하단에 도착
  var vidContainer = document.querySelector('.vid-container');
  conOffsetTop = containerJs.offsetTop;
  winScrollY = window.scrollY;

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

  // pageTitle translateY 조정 -------------------------------------------------
  var allSect = container.querySelectorAll('section');
  // 다시 시작
  var pageName = "";
    // if(conOffsetTop + allSect[1].offsetTop - (winHeight * .2) <= winScrollY) {
    //   classRemove(pageTitle, 'active');
    // }

    // if(conOffsetTop + allSect[2].offsetTop - (winHeight * .2) <= winScrollY) {
    //   classRemove(pageTitle, 'active');
    // }

    // if(conOffsetTop + allSect[3].offsetTop - (winHeight * .2) <= winScrollY) {
    //   classRemove(pageTitle, 'active');
    // }

    if(conOffsetTop + allSect[1].offsetTop <= winScrollY && conOffsetTop + allSect[2].offsetTop > winScrollY) {
      classRemove(pageTitle, 'active');
      setTimeout(function(){titleText(page2, 'h2');}, 500);
      // titleText(page2, 'h2');
      
      console.log("aa");
    }

    if(conOffsetTop + allSect[2].offsetTop <= winScrollY && conOffsetTop + allSect[3].offsetTop > winScrollY) {
      classRemove(pageTitle, 'active');
      setTimeout(function(){titleText(page3, 'h2');}, 500);
      // titleText(page3, 'h2');
      console.log("aa22");
    }

    if(conOffsetTop + allSect[3].offsetTop <= winScrollY) {
      classRemove(pageTitle, 'active');
      setTimeout(function(){titleText(page4, 'h2');}, 500);
      // titleText(page4, 'h2');
      console.log("aa33");
    }
    console.log(conOffsetTop + allSect[1].offsetTop);
    console.log(winScrollY);


  // page 2 ~ 4 화면 상단에서 클래스 제거

 /* // 재혁이꺼
  // if((conOffsetTop + page1.offsetHeight) * .95 <= winScrollY) {
  //       classRemove(pageTitle, 'active'); 
  //     }

  // if(conOffsetTop + page2.offsetTop - (winHeight * .2) <= winScrollY) {
  //   classRemove(pageTitle, 'active'); 
  //   console.log("aaa");
  // } else if(conOffsetTop + page3.offsetTop - (winHeight * .2) <= winScrollY) {
  //   classRemove(pageTitle, 'active');  
  
  // } else if(conOffsetTop + page4.offsetTop - (winHeight * .2) <= winScrollY) {
  //   classRemove(pageTitle, 'active');  
  // }
  // // page2 ~ 4 → pageTitle text 교체
  //   if(conOffsetTop + page4.offsetTop <= winScrollY) {
  //   titleText(page4, 'h2'); 
  // } else if(conOffsetTop + page3.offsetTop <= winScrollY) {
  //   setTimeout(function(){titleText(page3, 'h2');},500);  
    
  //   console.log("asdasd");
  // } else if(conOffsetTop + page2.offsetTop <= winScrollY) {
  //   titleText(page2, 'h2'); 
  // }
*/
  

// 
  // for(var i = 1; i < allSect.length; i++) {
  //   if(i != allSect.length - 1) {
  //     if(conOffsetTop + allSect[i].offsetTop - (winHeight * .2) <= winScrollY && conOffsetTop + allSect[i + 1].offsetTop >= winScrollY) {
  //       b += i;
  //       if(b == 3){
  //         classRemove(pageTitle, 'active');
  //         bln=false;
  //       }
  //     } else {
  //         titleText(allSect[i], 'h2');
  //       }
  //     }
  //   }
    
    // else {
    //   switch(allSect[i].dataset.num) {
    //     case 1:
    //       titleText(allSect[1], 'h2');
    //       break;
    //     case 2:
    //       titleText(allSect[2], 'h2');
    //       break;
    //     case 3:
    //       titleText(allSect[3], 'h2');
    //       break;
    //   }
    // }
    

  


  // var b = 0;

  // for(var i=1;i<=4;i++){
    
  //   k = i;
  //    if(k != 4) {
      
      
  //     if((conOffsetTop + (eval("page"+k).offsetHeight)*k)*0.9 < winScrollY && conOffsetTop + eval("page"+(k+1)).offsetTop > winScrollY){
      
  //     b += i;
  //       if(b == 3){
  //         classRemove(pageTitle, 'active');
  //         bln=false;
  //         console.log(k) 
  //       }
  //     }else{
  //       var avv = eval("page"+(k+1));
  //       titleText(avv, 'h2'); 
  //       console.log(avv)
  //     }
  //   }
  // }



/* 지우지 말기
  // if(conOffsetTop + allSect[1].offsetTop - (winHeight * .2) <= winScrollY) {
  //   classRemove(pageTitle, 'active');
  // }

  // if(conOffsetTop + allSect[2].offsetTop - (winHeight * .2) <= winScrollY) {
  //   classRemove(pageTitle, 'active');
  // }

  // if(conOffsetTop + allSect[3].offsetTop - (winHeight * .2) <= winScrollY) {
  //   classRemove(pageTitle, 'active');
  // }

  // if(conOffsetTop + allSect[1].offsetTop <= winScrollY) {
  //   titleText(page2, 'h2');
  // }

  // if(conOffsetTop + allSect[2].offsetTop <= winScrollY) {
  //   titleText(page3, 'h2');
  // }

  // if(conOffsetTop + allSect[3].offsetTop <= winScrollY) {
  //   titleText(page4, 'h2');
  // }

*/

// var i = 0;
//   if(conOffsetTop + allSect[i].offsetTop - (winHeight * .2) <= winScrollY) {
//     classRemove(pageTitle, 'active');
//     var scrollDown = setInterval(function() {
//       event.stopPropagation();
//       i++;
//       window.scrollTo(0, winScrollY + i);
//       if(conOffsetTop + allSect[2].offsetTop <= winScrollY) {
//         clearInterval(scrollDown);
//       }
//     }, 10);
//   }

  // var b = 0;

  // for(var i=1;i<=4;i++){
    
  //   k = i;
  //    if(k != 4) {
      
      
  //     if((conOffsetTop + (eval("page"+k).offsetHeight)*k)*0.9 < winScrollY && conOffsetTop + eval("page"+(k+1)).offsetTop > winScrollY){
      
  //     b += i;
  //       if(b == 3){
  //         classRemove(pageTitle, 'active');
  //         bln=false;
  //         console.log(k) 
  //       }
  //     }else{
  //       var avv = eval("page"+(k+1));
  //       titleText(avv, 'h2'); 
  //       console.log(avv)

        

  //     }
  //   }
  // }

});

// page1 ---------------------------------------------------------------------- 
var page1Title = page1.querySelector('h2');
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
  titleText(page1, '.title'); // pageTitle text 교체
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

    function loop() {
      setInterval(function() {
        popImg.children[0].src = data.changeImg.shorts[i];
        popImg.children[0].style.opacity = 0;
        i++;
        if(i == data.changeImg.shorts.length) {
          i = 0;
        }
        popImg.children[1].src = data.changeImg.shorts[i];
        popImg.children[1].style.opacity = 1;
        popImg.insertBefore(popImg.children[1], popImg.children[0]);
      }, 2500);
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

// page4 ---------------------------------------------------------------------- 
var submitBtn = page4.querySelector('button');
var registerForm = document.querySelector('#register');
var cmntCont = page4.querySelector('.comment-container');
var formInputs = registerForm.querySelectorAll('input');

var cmntWriter, cmntTxt;

// 현재 시간
var now = new Date();
localStorage.setItem('realTime',  now.getTime());

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if(registerForm.agree.checked) {

    // 사용자 입력 내용 localstorage 저장
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
    var cmntTime = new Date();
    var submitTime = cmntTime.getTime();
    var timeDiffer = Math.ceil((submitTime - localStorage.realTime) / 1000 / 60 / 60);
    // 분
    var cmntTime;

    if(timeDiffer == 1) { // ~ 1분
      cmntTime = '방금 전';
    } else if(timeDiffer > 1 && timeDiffer < 60) { // 2 ~ 59분
      cmntTime = timeDiffer + '분 전';
    } else { // 1시간 ~
      timeDiffer = timeDiffer / 60;
      cmntTime = timeDiffer + '시간 전';
    }

    // 사용자 입력 내용 출력
    var allCmnt = cmntCont.querySelectorAll('.comment');
    var newCmnt = document.createElement("DIV");

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
function classAdd(elmnt, clsName) { // 클래스 추가
  elmnt.classList.add(clsName);  
}

function classRemove(elmnt, clsName) { // 클래스 제거
  elmnt.classList.remove(clsName);
}

function closeBtn(e) { // 팝업창 닫기
  e.preventDefault();
  let closeTarget = e.target.parentNode.parentNode;
  classRemove(closeTarget, 'active');
}

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

function titleText(selector, target) {
  pageTitle.textContent = selector.querySelector(target).textContent;
  classAdd(pageTitle, 'active');
}