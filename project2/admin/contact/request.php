<? // 글쓰기 페이지
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/admin/head.php";
?>
  <article class="request">
    <h2>Contact us</h2>
    <form action="request_res.php" name="contact" method="post">
      <ul>
        <!-- db: name, subject, email, contents, date -->
        <li><input type="text" name="writer" placeholder="writer"></li>
        <li><input type="text" name="subject" placeholder="subject"></li>
        <li><input type="email" name="email" placeholder="email"></li>
        <li>
          <textarea name="content" cols="30" rows="10"></textarea>
        </li>
        <li><input type="submit" value="Save" class="btn"></li>
      </ul>    
    </form>
  </article>
<?
  // callFunc('contact()'); // 유효성 검사
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/admin/foot.php";
?>