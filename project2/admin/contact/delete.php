<!-- 입력된 내용 삭제 -->
<?
  // db 접근
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/admin/head.php";

  // list.php에서 선택한 항목 num값 받아서 변수에 저장
  $num = $_GET['num'];

  // db 데이터 가져오기
  $query = "DELETE from contact_us where num='$num'"; // list에서 선택한 항목 삭제
  
  // db 조회
  mq($query);

  // index.php로 이동
  back('삭제 완료');
?>