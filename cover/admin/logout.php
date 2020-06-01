<!-- 세션 삭제 -->
<?
    include_once $_SERVER['DOCUMENT_ROOT']."/admin/assets/inc/head.php";

  // session 삭제
  session_destroy();
  
  // index로 복귀
  back('로그아웃');
?>