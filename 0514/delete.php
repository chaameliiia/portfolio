<? // 정보 db에 저장
  include_once $_SERVER['DOCUMENT_ROOT']."/0514/head.php";

  $num = $_GET['num'];

  $query = "delete from biz where num='$num'";

  mq($query);

  message('삭제 완료');
  page('list.php');
?>
