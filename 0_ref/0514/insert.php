<? // 정보 입력
  include_once $_SERVER['DOCUMENT_ROOT']."/0514/head.php";
?>
  <article>
    <h2>프로필 등록</h2>
    <form action="insert_res.php" name="profile" method="post">
      <ul>
        <li><input type="text" name="name" placeholder="이름" autofocus></li>
        <li><input type="email" name="email" placeholder="이메일 주소"></li>
        <li>
          <input type="text" name="tel" placeholder="휴대전화번호">
        </li>
        <li>
          <input type="text" name="job" placeholder="직업">
        </li>
      </ul>
      <div class="btn_box">
        <input type="submit" value="등록하기" class="btn">
        <a href="list.php" class="btn">목록보기</a>
      </div>
    </form>
    
  </article>
<?
  include_once $_SERVER['DOCUMENT_ROOT']."/0514/foot.php";
?>
