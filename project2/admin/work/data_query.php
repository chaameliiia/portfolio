<?
  // 수정 & 삭제 버튼 눌렀을 때
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/admin/admin_check.php";

  $num = $_POST['num']; // 선택한 항목 num 값 받아오기
  $mode = $_POST['mode'];

  if($mode == 'delete'){
    // 목록 삭제
    $query = "delete from project2 where num='{$num}'"; // 선택한 항목만 삭제
    mq($query);
  } else {
    // 팝업창
    $query = "select * from project2 where num='{$num}'";
    $result = mq($query); // 쿼리 실행 값 변수에 저장
    $row = mysqli_fetch_array($result); // result값 배열 형태로 저장

    if($row['description'] != '<br>') {
      echo $row['description']; // row값 전달  
    } else {
      echo "입력된 값이 없습니다. <br>
        <a href='modify.php?num={$num}'>정보입력하기</a>";
    }
  }  
?>