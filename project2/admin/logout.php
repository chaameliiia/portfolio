<!-- 세션 삭제 -->

<?
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/asset/inc/db.php";

  // session 삭제
  session_destroy();
  
  // index로 복귀
  back('로그아웃 되었습니다.');
?>