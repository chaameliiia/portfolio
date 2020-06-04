<?
  include_once $_SERVER['DOCUMENT_ROOT']."/admin/assets/inc/db.php";

  // form에서 데이터 받아오기
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $date = date('y-d-m');

  // db에 데이터 입력
  $query = "INSERT INTO contact_us(
    name, email, message, date
  ) values(
    '$name', '$email', '$message', '$date'
  )";

  // 쿼리 명령문 실행
  mq($query);

  // 전송 완료
  back('메세지를 전송했습니다.');
?>