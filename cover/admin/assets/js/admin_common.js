// 문의 목록 보기
function view() {
  $('.view').on('click', function (e) {
    e.preventDefault();
    $('.detail').stop().slideUp();
    $(this).parent().find('.detail').stop().slideDown();
  });
}

// 프로젝트 목록 수정 &삭제
function prjList(data) {
  function numData(e) {
    e.preventDefault();
    var target = e.target;
    var targetClass = target.className;

    for (; targetClass != 'view'; target = target.parentElement) {
      if (targetClass == 'delete' || targetClass == 'update') break;
      targetClass = target.parentElement.className;
      if (targetClass == 'list') break;
    }
    if (targetClass == 'delete' || targetClass == 'view') {
      var dNum = target.dataset.num;
      $.ajax({
        url: 'data_query.php', // 해당 문서로 이동
        type: 'POST',
        data: { 'num': dNum, 'mode': targetClass },
        // dataType: 'php',
        success: function (data) {
          if (targetClass == 'view') {
            $('.popup').html(data);
          } else {
            location.reload();
          }
        }
      });
    }
    if (targetClass == 'edit') {
      location.href = target.href;
    }
  }
  var prjUl = document.querySelector('.list ul');
  prjUl.addEventListener('click', numData);
}

// 스마트 에디터 request에 끼워넣기
function reqEditor() {
  var oEditors = [];
  nhn.husky.EZCreator.createInIFrame({
    oAppRef: oEditors,
    elPlaceHolder: "ir1",
    sSkinURI: "/cover/admin/assets/editor/SmartEditor2Skin.html",
    htParams: {
      bUseToolbar: true,
      fOnBeforeUnload: function () {
        //alert("아싸!");	
      }
    }, //boolean
    fOnAppLoad: function () {
      //예제 코드
      //oEditors.getById["ir1"].exec("PASTE_HTML", ["로딩이 완료된 후에 본문에 삽입되는 text입니다."]);
    },
    fCreator: "createSEditor2"
  });

  function editor(e) {
    e.preventDefault();
    oEditors.getById['ir1'].exec('UPDATE_CONTENTS_FIELD', []);
    portfolio.submit();
  }

  var submit = document.querySelector('input[type=submit]');
  submit.addEventListener('click', editor);
}