<!-- 글정보처리 페이지 -->

<?
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/admin/admin_check.php";

  // request에서 데이터 받아오기
  $writer = $_POST['writer'];
  $subject = $_POST['subject'];
  $email = $_POST['email'];
  $content = $_POST['content'];
  $date = date('Ymd');
  
  // db에 데이터 입력
  $query = "INSERT INTO contact_us(
    writer, subject, email, content, date
  ) values(
    '$writer', '$subject', '$email', '$content', '$date'
  )";

  // 쿼리 명령문 실행
  mq($query);

  // 뒤로 이동
  page('list.php');
?>