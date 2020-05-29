<? // 정보 db에 저장
  include_once $_SERVER['DOCUMENT_ROOT']."/0514/head.php";

  $name = $_POST['name'];
  $email = $_POST['email'];
  $tel = $_POST['tel'];
  $job = $_POST['job'];

  $query = "insert into biz(
    name, email, tel, job
  ) values(
    '$name', '$email', '$tel', '$job'
  )";

  mq($query);

  message('등록 완료');
  page('list.php');
?>
