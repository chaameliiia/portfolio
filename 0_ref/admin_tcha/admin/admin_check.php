<? // admin/index.php 바로가기 했을 때 관리자 세션 정보있는지 확인
  include_once $_SERVER['DOCUMENT_ROOT']."/0_ref/admin_tcha/asset/inc/db.php";
  $session = $_SESSION['id'];

  if(!isset($session)) { // admin 로그인 안 했을 경우
    page('/0_ref/admin_tcha/admin/login.php');
  }
?>