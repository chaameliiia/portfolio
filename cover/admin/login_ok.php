<!-- 관리자로 로그인 확인 -->
<?
  include_once $_SERVER['DOCUMENT_ROOT']."/cover/asset/inc/db.php";

  $id = $_POST['id'];
  $pw = $_POST['pw'];

  if($id === 'admin' && $pw === '1234') {
    $_SESSION['id'] = $id;
    // $_SESSION[] 값 남기려면 앞에 session_start(); 해야 함
    page('/cover/admin/index.php');
  } else {
    back('관리자가 아닙니다.');
  }
?>